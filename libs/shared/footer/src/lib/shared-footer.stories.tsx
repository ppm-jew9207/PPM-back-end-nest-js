import React from 'react';
import { SharedFooter, SharedFooterProps } from './shared-footer';

export default {
  component: SharedFooter,
  title: 'SharedFooter',
};

const testMenu = {
  column1: {
    allMenu: [
      { tittle: 'Github', path: '#' },
      { tittle: 'Twitter', path: '#' },
      { tittle: 'StackOverflow', path: '#' },
      { tittle: 'Team', path: '#' },
    ],
    title: 'Community',
  },
  column2: {
    allMenu: [
      { tittle: 'Support', path: '#' },
      { tittle: 'Blog', path: '#' },
      { tittle: 'Material Icons', path: '#' },
    ],
    title: 'Resources',
  },
  column3: {
    allMenu: [
      { tittle: 'About', path: '#' },
      { tittle: 'Contact Us', path: '#' },
      { tittle: 'Jobs', path: '#' },
    ],
    title: 'Company',
  },
  home: 'PPM',
};

export const primary = () => {
  return <SharedFooter {...testMenu} />;
};
