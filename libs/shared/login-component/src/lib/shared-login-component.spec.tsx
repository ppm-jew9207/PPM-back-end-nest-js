import React from 'react';
import { render } from '@testing-library/react';
import { action } from '@storybook/addon-actions';
import SharedLoginComponent from './shared-login-component';

describe(' SharedLoginComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedLoginComponent
        onLogin={action('onLogin')}
        onForgotPassword={action('onForgotPassword')}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
