import React from 'react';
import { render } from '@testing-library/react';

import FeaturesAdvertPage from './features-advert-page';

describe('FeaturesAdvertPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesAdvertPage />);
    expect(baseElement).toBeTruthy();
  });
});
