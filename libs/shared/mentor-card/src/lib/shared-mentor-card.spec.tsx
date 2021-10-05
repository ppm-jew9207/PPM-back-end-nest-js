import React from 'react';
import { render } from '@testing-library/react';

import { MentorCard } from './shared-mentor-card';

const mentorImage = 'https://placekitten.com/300/300';
const fullName = 'John Doe';
const location = 'Vilnius';
const aboutMentor =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.';
const socialLinks = [
  {
    icon: 'facebook',
    link: '#',
    color: '#3b5999',
  },
];
const url = '#';
const data = {
  mentorImage,
  fullName,
  aboutMentor,
  location,
  socialLinks,
  url,
};

describe(' SharedUserProfileCard', () => {
  it('should render successfully', () => {
    const result = render(<MentorCard {...data} />);
    expect(result).toBeTruthy();
  });
});
