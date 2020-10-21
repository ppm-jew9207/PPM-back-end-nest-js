import React from 'react';
import { render } from '@testing-library/react';

import LessonItem from './lesson-item';

describe('LessonItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LessonItem />);
    expect(baseElement).toBeTruthy();
  });
});
