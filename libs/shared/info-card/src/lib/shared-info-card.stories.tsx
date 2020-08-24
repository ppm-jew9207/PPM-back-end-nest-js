import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import { SharedInfoCard, SharedInfoCardProps } from './shared-info-card';

export default {
  component: SharedInfoCard,
  title: 'SharedInfoCard',
  decorators: [withKnobs],
};

const data = [
  {
    label: text('label', 'Default label'),
    value: text('value', 'Default value'),
  },
];

export const primary = () => {
  const props: SharedInfoCardProps = {
    title: text('title', 'Default Title'),
    fields: data,
  };

  return <SharedInfoCard title={props.title} fields={props.fields} />;
};
