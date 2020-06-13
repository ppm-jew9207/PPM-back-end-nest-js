import React from 'react';
import { render } from '@testing-library/react';

import SharedLoginComponent from './shared-login-component';

describe(' SharedLoginComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedLoginComponent onLogin={(data) => console.log(data)} />
    );
    expect(baseElement).toBeTruthy();
  });
});
