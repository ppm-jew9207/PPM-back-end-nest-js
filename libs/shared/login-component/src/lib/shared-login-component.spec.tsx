import React from 'react';
import { render } from '@testing-library/react';

import SharedLoginComponent from './shared-login-component';

describe(' SharedLoginComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedLoginComponent login={() => console.log('login called')} />
    );
    expect(baseElement).toBeTruthy();
  });
});
