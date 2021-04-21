import React from 'react';
import { render } from '@testing-library/react';

import SharedCreateCourseForm from './shared-create-course-form';

describe(' SharedCreateCourseForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedCreateCourseForm />);
    expect(baseElement).toBeTruthy();
  });
});
