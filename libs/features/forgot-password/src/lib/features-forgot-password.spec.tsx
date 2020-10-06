import React from 'react';
import { render } from '@testing-library/react';

import FeaturesForgotPassword from './features-forgot-password';

describe('FeaturesForgotPassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesForgotPassword />);
    expect(baseElement).toBeTruthy();
  });
});
