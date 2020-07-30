import React from 'react';
import {
  SharedLeftSideMenu,
  SharedLeftSideMenuProps,
} from './shared-left-side-menu';

export default {
  component: SharedLeftSideMenu,
  title: 'SharedLeftSideMenu',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedLeftSideMenuProps = {};

  return <SharedLeftSideMenu />;
};
