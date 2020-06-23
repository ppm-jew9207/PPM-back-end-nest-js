import React from 'react';
import {
  SharedTopRightBar,
  SharedTopRightBarProps,
} from './shared-top-right-bar';

export default {
  component: SharedTopRightBar,
  title: 'SharedTopRightBar',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedTopRightBarProps = {};

  return <SharedTopRightBar />;
};
