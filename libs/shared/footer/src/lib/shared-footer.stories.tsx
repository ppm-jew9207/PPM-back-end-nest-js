import React from 'react';
import { SharedFooter, SharedFooterProps } from './shared-footer';

export default {
  component: SharedFooter,
  title: 'SharedFooter',
};

const testMenu = {
  menu1: {
    allMenu: [
      { tittle: 'Github', path: '#' },
      { tittle: 'Twitter', path: '#' },
      { tittle: 'StackOverflow', path: '#' },
      { tittle: 'Team', path: '#' },
    ],
    title: 'Community',
  },
  menu2: {
    allMenu: [
      { tittle: 'Support', path: '#' },
      { tittle: 'Blog', path: '#' },
      { tittle: 'Material Icons', path: '#' },
    ],
    title: 'Resources',
  },
  menu3: {
    allMenu: [
      { tittle: 'About', path: '#' },
      { tittle: 'Contact Us', path: '#' },
      { tittle: 'Jobs', path: '#' },
    ],
    title: 'Company',
  },
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedFooterProps = {};

  return <SharedFooter {...testMenu} />;
};
