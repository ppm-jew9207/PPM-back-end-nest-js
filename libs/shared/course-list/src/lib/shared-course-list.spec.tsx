import React from 'react';
import { render } from '@testing-library/react';

import SharedCourseList from './shared-course-list';

describe('SharedCourseList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedCourseList />);
    expect(baseElement).toBeTruthy();
  });
});
