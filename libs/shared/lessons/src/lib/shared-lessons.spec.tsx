import React from 'react';
import { render } from '@testing-library/react';

import SharedLessons from './shared-lessons';

describe('SharedLessons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLessons />);
    expect(baseElement).toBeTruthy();
  });
});
