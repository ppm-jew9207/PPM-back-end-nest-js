import { text } from '@storybook/addon-knobs';
import React from 'react';
import {
  SharedAdvertDetails,
  SharedAdvertDetailsProps,
} from './shared-advert-details';

export default {
  component: SharedAdvertDetails,
  title: 'SharedAdvertDetails',
};

export const primary = () => {
  const props: SharedAdvertDetailsProps = {
    learnItems: [ 
      { _id: 'dfasdf', title: 'Programming', value: 'prog' },
      { _id: 'sadfdf', title: 'Javascript', value: 'js' },
      { _id: 'sdfasdf', title: 'React', value: 'react' },
      { _id:'ddsaf', title: 'Web Development', value: 'web' }
    ],
    preRequisites: text('preRequisites', 'Anglu ir Lietuviu kalbos'),
  };

  return (
    <SharedAdvertDetails
      learnItems={props.learnItems}
      preRequisites={props.preRequisites}
    />
  );
};
