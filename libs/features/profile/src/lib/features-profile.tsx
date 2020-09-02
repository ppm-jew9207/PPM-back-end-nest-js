import React, { useState, useEffect } from 'react';
import { SharedUserProfileCard } from '@ppm/shared/user-profile-card';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStructuredSelector } from 'reselect';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';

import './features-profile.scss';

const stateSelector = createStructuredSelector({
  profiles: userProfileSelectors.selectUserProfile(),
  loading: userProfileSelectors.selectLoading(),
});

export const FeaturesProfile = (props) => {
  const dispatch = useDispatch();
  const { profiles, loading } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile(props.match.params.id));
  }, [dispatch]);

  const data = {
    mentorImage: 'https://placekitten.com/300/300',
    fullName: 'John Doe',
    aboutMentor: 'Lorem ipsum dolor sit amet',
    mentorLocation: 'Vilnius',
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  };

  if (loading) return <CircularProgress />;

  return (
    <div>
      <SharedUserProfileCard {...data} />
    </div>
  );
};

export default FeaturesProfile;
