import React, { useState, useEffect } from 'react';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from '@ppm/shared/user-profile-card';
import { 
  Profile,
  SharedProfileForm,
  SharedProfileFormProps
} from "@ppm/shared/profile-form";
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, CircularProgress, IconButton } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
import './features-profile.scss';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import { categoriesActions, categoriesSelectors } from '@ppm/data-access/categories';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import { SharedAdvertsAddButtons } from '@ppm/shared/adverts-add-buttons';

import { Close as CloseIcon } from '@material-ui/icons';

const stateSelector = createStructuredSelector({
  profile: userProfileSelectors.selectUserProfile(),
  loading: userProfileSelectors.selectLoading(),
  adverts: advertsSelectors.selectAdverts(),
  categories: categoriesSelectors.selectCategories()
});

export const FeaturesProfile = (props) => {
  const dispatch = useDispatch();
  const { profile, loading, adverts, categories } = useSelector(stateSelector);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  const saveClick = (payload: any) => {
    const data = { callback: 'getAllByAuthor', ...payload };
    dispatch(advertsActions.smallUpdate(data));
  };

  useEffect(() => {
    dispatch(advertsActions.getAllByAuthor());
  }, [dispatch]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(advertsActions.getAllByAuthor());
  }, [dispatch]);

  useEffect(() => {
    dispatch(categoriesActions.getAll());
  }, [dispatch]);

  const defaultData = {
    mentorImage: '',
    fullName: '',
    aboutMentor: '',
    mentorLocation: '',
    socialLinks: [],
    toggleDrawer
  };

  const [data, setData] = useState<SharedUserProfileCardProps>(defaultData);

  useEffect(() => {
    if (profile) {
      setData({
        mentorImage: profile.photo,
        fullName: profile.firstName + ' ' + profile.lastName,
        aboutMentor: profile.description,
        mentorLocation: profile.city,
        socialLinks: profile.socialLinks,
        toggleDrawer: toggleDrawer
      });
    }
  }, [profile]);

  if (loading) return <CircularProgress />;

  return (
    <div className="features-profile">
      <div className="profile-card-container">
        <SharedUserProfileCard {...data} toggleDrawer={toggleDrawer} />
      </div>
      <div className="content">
        <SharedAdvertsAddButtons disabled={false} />
        {adverts.map((advert, i) => (
          <SharedAdvertCard
            id={advert._id}
            key={advert._id}

            title={advert.title}
            author={{
              _id: advert.creator._id,
              firstName: advert.creator.name,
              lastName: '',
              img: advert.creator.imageUrl,
            }}
            createAt={advert.createdAt}
            description={advert.description}
            // TODO add likes to backend
            like={0}
            // TODO add shares to backend
            shared={0}
            imgUrl={advert.imageUrl}
            onSaveClick={saveClick}
            editable={profile._id == advert.creator._id}
          />
        ))}
      </div>

      <Drawer
        open={isMenuOpen}
        ModalProps={{ onBackdropClick: () => toggleDrawer(false) }}
        anchor="right"
      >
        <div className="shared-left-side-menu">
          <IconButton
            onClick={() => toggleDrawer(false)}
            aria-label="close drawer"
          >
            <CloseIcon />
          </IconButton>
          <SharedProfileForm 
            profile={profile} 
            categories={categories} 
            onSubmit={(formData: Profile) => {
              console.log(formData);
            }} 
          />
        </div>
      </Drawer>
    </div>
  );
};

export default FeaturesProfile;
