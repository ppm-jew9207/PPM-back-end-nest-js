import React from 'react';
import { SharedFooter, SharedFooterProps } from './shared-footer';

export default {
  component: SharedFooter,
  title: 'SharedFooter',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedFooterProps = {};

  return <SharedFooter />;
};
