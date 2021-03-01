import React, { useState, useEffect } from 'react';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from '@ppm/shared/user-profile-card';
import { 
  Profile,
  SharedProfileForm,
  Category
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
import { countriesApiActions, countriesApiSelectors } from '@ppm/data-access/countries-api';
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
  cities: countriesApiSelectors.selectCities()
});

export const FeaturesProfile = (props) => {
  const dispatch = useDispatch();
  const { profile, loading, adverts, categories, countries, states, cities } = useSelector(stateSelector);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [addDrawer, setAddDrawer] = useState(false);

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

  const addAdvert = (data) => {
    console.log(data)
  }

  return (
    <div className="features-profile">
      <div className="profile-card-container">
        <SharedUserProfileCard {...data} toggleDrawer={toggleDrawer} />
      </div>
      <div className="content">
        <SharedAdvertsAddButtons disabled={false} toggleAddDrawer={() => setAddDrawer(true)}/>

        <Drawer anchor="left" open={addDrawer} onClose={() => setAddDrawer(false)}>
            <SharedCreateAdvertForm
              onSubmit={addAdvert}
              onCancel={() => console.log('cancel')}
               categories={[
          {
            title: 'Category A',
            value: 'category-a',
            _id: 'as3dg432af',
            checked: false, },
          { 
            title: 'Category B',
            value: 'category-b',
            _id: 'as33dg4432af',
            checked: false, 
          },
        ]}
            />
        </Drawer>

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
            countries={countries}
            cities={cities}
            states={states}
            onSelectCountry={(countryName: string) => dispatch(countriesApiActions.getStates(countryName))}
            onSelectState={(stateName: string) => dispatch(countriesApiActions.getCities(stateName))}
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
