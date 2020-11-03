import React from 'react';
import { render } from '@testing-library/react';

import HooksUseAdverts from './hooks-use-adverts';

describe('HooksUseAdverts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HooksUseAdverts />);
    expect(baseElement).toBeTruthy();
  });
});
