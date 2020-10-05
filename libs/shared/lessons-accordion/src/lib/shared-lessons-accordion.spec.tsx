import React from 'react';
import { render } from '@testing-library/react';

import SharedLessonsAccordion from './shared-lessons-accordion';

describe('SharedLessonsAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLessonsAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
