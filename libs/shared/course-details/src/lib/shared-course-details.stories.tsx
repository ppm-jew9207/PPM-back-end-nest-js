import { text } from '@storybook/addon-knobs';
import React from 'react';
import {
  SharedCourseDetails,
  SharedCourseDetailsProps,
} from './shared-course-details';

export default {
  component: SharedCourseDetails,
  title: 'SharedCourseDetails',
};

export const primary = () => {
  const props: SharedCourseDetailsProps = {
    learnItems: [
      { _id: 'dfasdf', title: 'Programming', value: 'prog' },
      { _id: 'sadfdf', title: 'Javascript', value: 'js' },
      { _id: 'sdfasdf', title: 'React', value: 'react' },
      { _id: 'ddsaf', title: 'Web Development', value: 'web' },
    ],
    preRequisites: text('preRequisites', 'Anglu ir Lietuviu kalbos'),
  };

  return (
    <SharedCourseDetails
      learnItems={props.learnItems}
      preRequisites={props.preRequisites}
    />
  );
};
