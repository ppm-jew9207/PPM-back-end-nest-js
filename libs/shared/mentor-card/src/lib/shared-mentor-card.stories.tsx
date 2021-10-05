import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { MentorCard, MentorCardProps } from './shared-mentor-card';

export default {
  component: MentorCard,
  title: 'MentorCard',
  decorators: [withKnobs],
};

export const primary = () => {
  const mentorImage = text(
    'Mentor Image',
    'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
  );
  const fullName = text('Full Name', 'Elonas Muskas');
  const location = text('Mentor Location', 'Vilnius');
  const aboutMentor = text(
    'About Mentor',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  );
  const url = '#';
  const socialLinks = [
    {
      icon: 'facebook',
      link: '#',
      color: '#3b5999',
    },
    {
      icon: 'twitter',
      link: '#',
      color: '#55acee',
    },
    {
      icon: 'linkedin',
      link: '#',
      color: '#55acee',
    },
    {
      icon: 'instagram',
      link: '#',
      color: '#55acee',
    },
  ];

  const props: MentorCardProps = {
    mentorImage,
    fullName,
    aboutMentor,
    location,
    socialLinks,
    url,
  };

  return <MentorCard {...props} />;
};
