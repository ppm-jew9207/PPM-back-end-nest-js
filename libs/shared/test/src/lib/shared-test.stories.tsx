import React from 'react';
import { SharedTest, SharedTestProps } from './shared-test';

export default {
  component: SharedTest,
  title: 'SharedTest',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedTestProps = {};

  return <SharedTest />;
};
