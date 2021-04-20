import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import {
  SharedCreateCourseForm,
  SharedCreateCourseFormProps,
} from './shared-create-course-form';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedCreateCourseForm,
  title: 'SharedCreateCourseForm',
};

export const primary = () => {
  const props: SharedCreateCourseFormProps = {
    onSubmit: action('onSubmit'),
    onCancel: action('onCancel'),
    data: {
      title: 'New course',
      submitButtonText: 'Create',
      cancelButtonText: 'Cancel',
      descriptionInputLabel: 'Description',
      titleInputLabel: 'New Course',
      categoryInputLabel: 'Category',
      prerequisitesInputLabel: 'Requirement',
      learningInputLabel: 'Learning input',
    },
    categories: [
      {
        title: 'Category A',
        value: 'category-a',
        _id: 'as3dg432af',
        checked: false,
      },
      {
        title: 'Category B',
        value: 'category-b',
        _id: 'as33dg4432af',
        checked: false,
      },
    ],
    lesson: [
      {
        title: 'Create React Component',
        _id: 'gfsgsffa',
        datetime: '2021-09-22T17:09',
        checked: false,
      },
      {
        title: 'Create React Library',
        _id: 'gfsgsffb',
        datetime: '2021-10-22T17:09',
        checked: false,
      },
      {
        title: 'Create React Feature',
        _id: 'gfsgsffc',
        datetime: '2021-11-22T17:09',
        checked: false,
      },
      {
        title: 'Create React Beat',
        _id: 'gfsgsffcd',
        datetime: '2021-11-22T17:09',
        checked: false,
      },
    ],
  };
  return <SharedCreateCourseForm {...props} />;
};
