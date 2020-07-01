import React from 'react';
import { render } from '@testing-library/react';

import SharedForgotPasswordForm from './shared-forgot-password-form';
import { action } from '@storybook/addon-actions';

describe(' SharedForgotPasswordForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedForgotPasswordForm
        onSubmit={action('onSubmit')}
        title="string"
        subtitle="string"
        submitButtonText="string"
        inputLabel="string"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
