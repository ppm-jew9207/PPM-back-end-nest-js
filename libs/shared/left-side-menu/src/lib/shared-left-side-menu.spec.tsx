import React from 'react';
import { render } from '@testing-library/react';

import SharedLeftSideMenu from './shared-left-side-menu';

describe(' SharedLeftSideMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLeftSideMenu />);
    expect(baseElement).toBeTruthy();
  });
});
