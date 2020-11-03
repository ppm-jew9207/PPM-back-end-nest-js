import React from 'react';
import { render } from '@testing-library/react';

import FeaturesLessonPage from './features-lesson-page';

describe('FeaturesLessonPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesLessonPage />);
    expect(baseElement).toBeTruthy();
  });
});
