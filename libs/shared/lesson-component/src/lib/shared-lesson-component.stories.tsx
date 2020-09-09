import React from 'react';
import {
  SharedLessonComponent,
  SharedLessonComponentProps,
} from './shared-lesson-component';

export default {
  component: SharedLessonComponent,
  title: 'SharedLessonComponent',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedLessonComponentProps = {};

  return <SharedLessonComponent />;
};
