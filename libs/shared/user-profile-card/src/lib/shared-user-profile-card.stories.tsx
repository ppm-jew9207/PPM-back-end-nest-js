import React from 'react';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from './shared-user-profile-card';

export default {
  component: SharedUserProfileCard,
  title: 'SharedUserProfileCard',
};

export const primary = () => {
  const props: SharedUserProfileCardProps = {
    mentorImage: '',
    fullName: 'John Doe',
    aboutMentor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    mentorLocation: 'Vilnius',
    facebook: '#',
    twitter: '#',
    linkedin: '',
    instagram: '',
  };

  return <SharedUserProfileCard {...props} />;
};
