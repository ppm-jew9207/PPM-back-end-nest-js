import React from 'react';
import { render } from '@testing-library/react';

import SharedModal from './shared-modal';

describe(' SharedModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedModal />);
    expect(baseElement).toBeTruthy();
  });
});
