import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { SharedLessons, SharedLessonsProps } from './shared-lessons';

export default {
  component: SharedLessons,
  title: 'SharedLessons',
};

const viewMore = () => {};

export const primary = () => {
  const props: SharedLessonsProps = {
    lessons: object('lessons', [
      {
        _id: '1',
        title: 'Full React Js Course: React JS, Redux, Hooks and Context',
        datime: '2020-05-20',
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
        datime: '2020-05-20',
        creator: {
          _id: '1',
          name: 'Creator name',
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl:
          'https://img-b.udemycdn.com/course/240x135/2554823_4e4e_16.jpg?secure=adyE1tCChEzdKBNr4EJyPw%3D%3D%2C1601992702',
      },
    ]),
    actions: [
      {
        title: 'VIEW MORE',
        action: (lesson) => {
          console.log('View More');
        },
      },
      {
        title: 'ADD TO CALENDAR',
        action: (lesson) => {
          console.log('Add To Calendar');
        },
      },
      {
        title: 'REMOVE',
        action: (lesson) => {
          console.log('Remove');
        },
      },
    ],
  };

  return <SharedLessons lessons={props.lessons} actions={props.actions} />;
};
