import React from 'react';
import {
  SharedSearchInput,
  SharedSearchInputProps,
} from './shared-search-input';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedSearchInput,
  title: 'SharedSearchInput',
};

export const primary = () => {
  const props: SharedSearchInputProps = {
    onSearch: action('onSearch'),
  };

  return <SharedSearchInput onSearch={props.onSearch} />;
};
