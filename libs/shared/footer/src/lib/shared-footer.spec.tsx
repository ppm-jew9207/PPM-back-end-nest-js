import React from 'react';
import { render } from '@testing-library/react';

import SharedFooter from './shared-footer';

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

describe(' SharedFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFooter {...testMenu} />);
    expect(baseElement).toBeTruthy();
  });
});
