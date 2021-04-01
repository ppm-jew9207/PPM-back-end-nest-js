import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import {
  SharedLessonComponent,
  SharedLessonComponentProps,
} from './shared-lesson-component';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedLessonComponent,
  title: 'SharedLessonComponent',
  decorators: [withKnobs],
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedLessonComponentProps = {
    onSubmit: action('onSubmit'),
    onCancel: action('onCancel'),
    data: {
      title: 'Create/Edit Lesson',
      submitButtonText: 'Create/Edit',
      cancelButtonText: 'Cancel',
      resourcesInputLabel: 'Resources',
      connectionUrlInputLabel: 'Connection URL',
      descriptionInputLabel: 'Description',
      datetimeInputLabel: 'Date and Time',
      titleInputLabel: 'New Lesson Title',
      mentorInputLabel: 'Select Mentor',
    },
    lesson: {
      _id: 'e21omfekwm32momfwffwsd',
      mentorName: 'as3dg432zd',
      description: 'big description',
      resources: 'so much resources',
      imageUrl: 'https://placekitten.com/300/300',
      title: 'lesson title',
      connectionUrl: 'https://placekitten.com/300/300',
      datetime: '2021-09-22T17:09',
      categories: ['as3dg432af', 'as33dg4432af'],
    },
    mentors: [
      { name: 'John Doe', value: 'John Doe', _id: 'as3dg432zd' },
      { name: 'Dohn Joe', value: 'Dohn Joe', _id: 'as33dg4432dz' },
      { name: 'Gohn Boe', value: 'Gohn Boe', _id: 'as3dg432zdbg' },
    ],
    categories: [
      { title: 'Category A', value: 'category-a', _id: 'as3dg432af' },
      { title: 'Category B', value: 'category-b', _id: 'as33dg4432af' },
    ],
  };

  return <SharedLessonComponent {...props} />;
};
