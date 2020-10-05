import React from 'react';
import { render } from '@testing-library/react';

import SharedLessonComponent from './shared-lesson-component';

describe(' SharedLessonComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLessonComponent />);
    expect(baseElement).toBeTruthy();
  });
});
