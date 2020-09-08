import React, { useState, useEffect } from 'react';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from '@ppm/shared/user-profile-card';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStructuredSelector } from 'reselect';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';

import './features-profile.scss';

const stateSelector = createStructuredSelector({
  profile: userProfileSelectors.selectUserProfile(),
  loading: userProfileSelectors.selectLoading(),
});

export const FeaturesProfile = (props) => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
  }, [dispatch]);

  const defaultData = {
    mentorImage: '',
    fullName: '',
    aboutMentor: '',
    mentorLocation: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  };

  const [data, setData] = useState<SharedUserProfileCardProps>(defaultData);

  useEffect(() => {
    if (profile) {
      setData({
        mentorImage: profile.photo,
        fullName: profile.firstName + ' ' + profile.lastName,
        aboutMentor: profile.description,
        mentorLocation: profile.city,
        facebook: profile.socialLinks[0].link,
        twitter: profile.socialLinks[0].link,
        linkedin: profile.socialLinks[0].link,
        instagram: profile.socialLinks[0].link,
      });
    }
  }, [profile]);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <SharedUserProfileCard {...data} />
    </div>
  );
};

export default FeaturesProfile;
