import React, { useState, useEffect } from 'react';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from '@ppm/shared/user-profile-card';
import { Profile, SharedProfileForm, Category } from '@ppm/shared/profile-form';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer,  IconButton } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
import './features-profile.scss';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import { categoriesActions, categoriesSelectors } from '@ppm/data-access/categories';
import { lessonsActions, lessonsSelectors } from '@ppm/data-access/lessons';
import { LikeEnum, likesActions } from '@ppm/data-access/likes';
import {
  countriesApiActions,
  countriesApiSelectors,
} from '@ppm/data-access/countries-api';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import { SharedAdvertsAddButtons } from '@ppm/shared/adverts-add-buttons';
import { SharedCreateAdvertForm } from '@ppm/shared/create-advert-form';

import { Close as CloseIcon } from '@material-ui/icons';


const stateSelector = createStructuredSelector({
  profile: userProfileSelectors.selectUserProfile(),
  loading: userProfileSelectors.selectLoading(),
  adverts: advertsSelectors.selectAdverts(),
  categories: categoriesSelectors.selectCategories(),
  countries: countriesApiSelectors.selectCountries(),
  states: countriesApiSelectors.selectStates(),
  cities: countriesApiSelectors.selectCities(),
  lessons: lessonsSelectors.selectLessons()
});

export const FeaturesProfile = (props) => {
  const [advertsState, setAdvertsState] = useState([]);
  const dispatch = useDispatch();
  const { profile, loading, adverts, categories, countries, states, cities, lessons } = useSelector(stateSelector);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [addDrawer, setAddDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  const saveClick = (payload: any) => {
    const data = { callback: 'getAllByAuthor', ...payload };
    dispatch(advertsActions.smallUpdate(data));
  };

  const likeClick = (advertId: string, type: string) => {
    dispatch(likesActions.create({ advert: advertId, type: type }));
    const clickedAdvert = advertsState.find((item) => item._id === advertId);
    const foundItem = clickedAdvert.likesList.findIndex(
      (item) => item.type === type && item.user === profile._id
    );
    if (foundItem !== -1) {
      clickedAdvert.likesList.splice(foundItem, 1);
    } else {
      clickedAdvert.likesList.push({
        advert: advertId,
        type: type,
        user: profile._id,
      });
    }
    setAdvertsState([...adverts]);
  };

  useEffect(() => {
    setAdvertsState(adverts);
  }, [adverts]);

  useEffect(() => {
    dispatch(advertsActions.getAllByAuthor());
    dispatch(userProfileActions.getUserProfile());
    dispatch(categoriesActions.getAll());
    dispatch(countriesApiActions.getCountries());
    dispatch(lessonsActions.getAll());
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

  const addAdvert = () => {
    setAddDrawer(false);
  }

  return (
    <div className="features-profile">
      <div className="profile-card-container">
        <SharedUserProfileCard {...data} toggleDrawer={toggleDrawer} />
      </div>
      <div className="content">
        <SharedAdvertsAddButtons disabled={false} toggleAddDrawer={() => setAddDrawer(true)}/>

        <Drawer anchor="right" open={addDrawer} onClose={() => setAddDrawer(false)}>
            <SharedCreateAdvertForm
              onSubmit={addAdvert}
              onCancel={() => {}}
              categories={categories}
              lessons={lessons}
              toggleAddDrawer={() => setAddDrawer(false)}
            />
        </Drawer>

        <SharedAdvertsAddButtons disabled={false} />
        {advertsState.map((advert, i) => (
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
              advert.likesList
                ? advert.likesList.filter(
                    (like: any) => like.type === LikeEnum.Like
                  ).length
                : 0
            }
            shared={
              advert.likesList
                ? advert.likesList.filter(
                    (like: any) => like.type === LikeEnum.Share
                  ).length
                : 0
            }
            imgUrl={advert.imageUrl}
            onSaveClick={saveClick}
            editable={profile._id == advert.creator._id}
            onLikeClick={() => likeClick(advert._id, LikeEnum.Like)}
            onSharedClick={() => likeClick(advert._id, LikeEnum.Share)}
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
