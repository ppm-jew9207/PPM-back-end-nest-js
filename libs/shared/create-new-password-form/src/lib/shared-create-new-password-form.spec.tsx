import React from 'react';
import { render } from '@testing-library/react';

import SharedCreateNewPasswordForm from './shared-create-new-password-form';

describe('SharedCreateNewPasswordForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedCreateNewPasswordForm />);
    expect(baseElement).toBeTruthy();
  });
});
