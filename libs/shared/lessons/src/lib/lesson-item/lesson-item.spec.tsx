import React from 'react';
import { render } from '@testing-library/react';

import LessonItem from './lesson-item';

const lesson = {
    _id: '1',
    title: 'Full React Js Course: React JS, Redux, Hooks and Context',
    datetime: '2020-05-20',
    creator: {
      _id: '1',
      name: 'Creator name',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl:
      'https://img-a.udemycdn.com/course/240x135/3338688_c925.jpg?ZtHSsE2B7aTXLKdxOuu9_PSA_TMWiatU-G_Ex1EZu7afEBKUFMepAepm9SqqSdgJescVuFliD2d7r_ektJYvAAHV4UZxqHiUPAKd978UkLI7pNtzxyfP8exll7Od4g',
  };

  const actions = [{
      title: 'VIEW MORE',
      onAction: () => jest.fn()
    }];

describe('LessonItem', () => {
  it('should render successfully', () => {
    const result = render(
    <LessonItem 
      actions={actions}
      lesson={lesson}
    />);
    expect(result).toBeTruthy();
  });
});
