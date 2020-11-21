import React from 'react';
import { render } from '@testing-library/react';

import {SharedUserProfileCard} from './shared-user-profile-card';

const mentorImage = 'https://placekitten.com/300/300';
const fullName = 'John Doe';
const mentorLocation = 'Vilnius';
const aboutMentor = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.';
const socialLinks = [
  {
    icon: 'facebook',
    link: '#',
    color: '#3b5999',
  }]

const data = {
  mentorImage,
  fullName,
  aboutMentor,
  mentorLocation,
  socialLinks,
};  

describe(' SharedUserProfileCard', () => {
  it('should render successfully', () => {
    const result = render(
    <SharedUserProfileCard 
      {...data}
    />);
    expect(result).toBeTruthy();
  });
});
