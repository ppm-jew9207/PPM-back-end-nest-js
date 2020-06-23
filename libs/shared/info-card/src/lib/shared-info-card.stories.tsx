import { text } from '@storybook/addon-knobs';
import React from 'react';
import { SharedInfoCard, SharedInfoCardProps } from './shared-info-card';

export default {
  component: SharedInfoCard,
  title: 'SharedInfoCard',
};

export const primary = () => {
  const props: SharedInfoCardProps = {
    title: text('title', ''),
    fields: ('fields', ''),
  };

  return <SharedInfoCard title={props.title} fields={props.fields} />;
};
