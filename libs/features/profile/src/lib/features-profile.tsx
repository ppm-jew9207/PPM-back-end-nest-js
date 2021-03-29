import React, { useState, useEffect } from 'react';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from '@ppm/shared/user-profile-card';
import { Profile, SharedProfileForm, Category } from '@ppm/shared/profile-form';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, CircularProgress, IconButton } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
import './features-profile.scss';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import { likesActions } from '@ppm/data-access/likes';
import {
  categoriesActions,
  categoriesSelectors,
} from '@ppm/data-access/categories';
import {
  countriesApiActions,
  countriesApiSelectors,
} from '@ppm/data-access/countries-api';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import { SharedAdvertsAddButtons } from '@ppm/shared/adverts-add-buttons';

import { Close as CloseIcon } from '@material-ui/icons';

const stateSelector = createStructuredSelector({
  profile: userProfileSelectors.selectUserProfile(),
  loading: userProfileSelectors.selectLoading(),
  adverts: advertsSelectors.selectAdverts(),
  categories: categoriesSelectors.selectCategories(),
  countries: countriesApiSelectors.selectCountries(),
  states: countriesApiSelectors.selectStates(),
  cities: countriesApiSelectors.selectCities(),
});

export const FeaturesProfile = (props) => {
  const dispatch = useDispatch();
  const {
    profile,
    loading,
    adverts,
    categories,
    countries,
    states,
    cities,
  } = useSelector(stateSelector);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  const saveClick = (payload: any) => {
    const data = { callback: 'getAllByAuthor', ...payload };
    dispatch(advertsActions.smallUpdate(data));
  };

  const likeClick = (advertId: string, type: string) => {
    dispatch(likesActions.create({ advert: advertId, type: type }));
    dispatch(advertsActions.getAllByAuthor());
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

  useEffect(() => {
    dispatch(countriesApiActions.getCountries());
  }, [dispatch]);

  const defaultData = {
    mentorImage: '',
    fullName: '',
    aboutMentor: '',
    mentorLocation: '',
    socialLinks: [],
    toggleDrawer,
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
        toggleDrawer: toggleDrawer,
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
            like={
              advert.likesList.filter((like: any) => like.type == 'like').length
            }
            shared={
              advert.likesList.filter((like: any) => like.type == 'share')
                .length
            }
            imgUrl={advert.imageUrl}
            onSaveClick={saveClick}
            editable={profile._id == advert.creator._id}
            onLikeClick={() => likeClick(advert._id, 'like')}
            onSharedClick={() => likeClick(advert._id, 'share')}
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
            countries={countries}
            cities={cities}
            states={states}
            onSelectCountry={(countryName: string) =>
              dispatch(countriesApiActions.getStates(countryName))
            }
            onSelectState={(stateName: string) =>
              dispatch(countriesApiActions.getCities(stateName))
            }
            onSubmit={(profileData: Profile) => {
              dispatch(userProfileActions.update(profileData));
            }}
            onAddCategory={(categoryData: Category) => {
              dispatch(categoriesActions.create(categoryData));
              dispatch(categoriesActions.getAll());
            }}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default FeaturesProfile;
