import React from 'react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import { SharedRank, SharedRankProps } from './shared-rank';

export default {
  component: SharedRank,
  title: 'SharedRank',
  decorators: [withKnobs, withActions('click')],
};

export const primary = () => {
  const value = number('Value', 2, { max: 5, min: 0, range: true, step: 0.5 });
  const isRanked = boolean('IsRated', false);
  const props: SharedRankProps = {
    onUpdate: action('onUpdate'),
    value,
    isRanked,
  };

  return <SharedRank {...props} />;
};
