import React from 'react';
import { render } from '@testing-library/react';

import SharedCreateAdvertForm from './shared-create-advert-form';

describe(' SharedCreateAdvertForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedCreateAdvertForm />);
    expect(baseElement).toBeTruthy();
  });
});
