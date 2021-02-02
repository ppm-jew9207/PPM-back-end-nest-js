import React from 'react';
import { render } from '@testing-library/react';

import SharedAdvertsAddButtons from './shared-adverts-add-buttons';

describe('SharedAdvertsAddButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedAdvertsAddButtons />);
    expect(baseElement).toBeTruthy();
  });
});
