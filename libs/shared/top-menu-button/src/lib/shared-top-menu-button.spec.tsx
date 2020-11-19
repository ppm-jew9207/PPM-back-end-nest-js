import React from 'react';
import { render } from '@testing-library/react';

import SharedTopMenuButton from './shared-top-menu-button';

const items = [
  {
    _id: '',
    title: 'Title',
    path: '',
    timeStamp: '',
    isRead: true,
  }
];

describe(' SharedTopMenuButton', () => {
  it('should render successfully', () => {
    const result = render(
    <SharedTopMenuButton 
      items={items}
    />);
    expect(result).toBeTruthy();
  });
});
