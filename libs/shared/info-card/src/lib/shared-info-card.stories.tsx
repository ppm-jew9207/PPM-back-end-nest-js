import { text } from '@storybook/addon-knobs';
import React from 'react';
import { SharedInfoCard, SharedInfoCardProps } from './shared-info-card';

export default {
  component: SharedInfoCard,
  title: 'SharedInfoCard',
};

const data = [
  {
    label: 'test label',
    value: 'test value'
  },
];

export const primary = () => {
  const props: SharedInfoCardProps = {
    title: text('title', ''),
    fields: data,
  };

  return <SharedInfoCard title={props.title} fields={props.fields} />;
};
