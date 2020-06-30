import React from 'react';
import { render } from '@testing-library/react';

import SharedForgotPasswordForm from './shared-forgot-password-form';

describe(' SharedForgotPasswordForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedForgotPasswordForm />);
    expect(baseElement).toBeTruthy();
  });
});
