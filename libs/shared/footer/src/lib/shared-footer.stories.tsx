import React from 'react';
import { SharedFooter, SharedFooterProps } from './shared-footer';

export default {
  component: SharedFooter,
  title: 'SharedFooter',
};

const testMenu = {
  menu1: {
    allMenu: [
      { tittle: 'link1', path: '#' },
      { tittle: 'link2', path: '#' },
      { tittle: 'link3', path: '#' },
    ],
    title: 'Title 1',
  },
  menu2: {
    allMenu: [
      { tittle: 'link1', path: '#' },
      { tittle: 'link2', path: '#' },
      { tittle: 'link3', path: '#' },
    ],
    title: 'Title 2',
  },
  menu3: {
    allMenu: [
      { tittle: 'link1', path: '#' },
      { tittle: 'link2', path: '#' },
      { tittle: 'link3', path: '#' },
    ],
    title: 'Title 3',
  },
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedFooterProps = {};

  return <SharedFooter {...testMenu} />;
};
