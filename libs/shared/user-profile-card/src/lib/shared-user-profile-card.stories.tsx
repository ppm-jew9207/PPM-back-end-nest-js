import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from './shared-user-profile-card';

export default {
  component: SharedUserProfileCard,
  title: 'SharedUserProfileCard',
  decorators: [withKnobs],
};

export const primary = () => {
  const mentorImage = text('Mentor Image', 'https://placekitten.com/300/300');
  const fullName = text('Full Name', 'John Doe');
  const mentorLocation = text('Mentor Location', 'Vilnius');
  const aboutMentor = text(
    'About Mentor',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  );
  const facebook = text('Facebook', '#');
  const twitter = text('Twitter', '#');
  const linkedin = text('LinkedIn', '');
  const instagram = text('Instagram', '');

  const props: SharedUserProfileCardProps = {
    mentorImage,
    fullName,
    aboutMentor,
    mentorLocation,
    facebook,
    twitter,
    linkedin,
    instagram,
  };

  return <SharedUserProfileCard {...props} />;
};