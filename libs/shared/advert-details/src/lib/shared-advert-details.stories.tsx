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
    learnItems: ['Javascript', 'React', 'Nx', 'NestJS'],
    preRequisites: text('preRequisites', 'Anglu ir Lietuviu kalbos'),
  };

  return (
    <SharedAdvertDetails
      learnItems={props.learnItems}
      preRequisites={props.preRequisites}
    />
  );
};
