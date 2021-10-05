import React from 'react';
import { render } from '@testing-library/react';

import SharedCoursesAddButtons from './shared-courses-add-buttons';

describe('SharedCoursesAddButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedCoursesAddButtons disabled={false} />
    );
    expect(baseElement).toBeTruthy();
  });
});
