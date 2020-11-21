import React from 'react';
import { render } from '@testing-library/react';

import SharedLessons from './shared-lessons';

const lessons = [
      {
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
      },
      {
        _id: '2',
        title: 'React JS: Learn React JS From Scratch with Hands-On Projects',
        datetime: '2020-05-20',
        creator: {
          _id: '1',
          name: 'Creator name',
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl:
          'https://img-b.udemycdn.com/course/240x135/2554823_4e4e_16.jpg?secure=adyE1tCChEzdKBNr4EJyPw%3D%3D%2C1601992702',
      },
    ];

    const actions = [
      {
        title: 'VIEW MORE',
        onAction: () => jest.fn()
      },
      {
        title: 'ADD TO CALENDAR',
        onAction: () => jest.fn()
      },
      {
        title: 'REMOVE',
        onAction: () => jest.fn()
      },
    ];

describe('SharedLessons', () => {
  it('should render successfully', () => {
    const result = render(
    <SharedLessons 
    lessons={lessons}
    actions={actions}
    />);
    expect(result).toBeTruthy();
  });
});
