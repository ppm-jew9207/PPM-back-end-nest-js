import React from 'react';
import { render } from '@testing-library/react';

import SharedModal from './shared-modal';

describe(' SharedModal', () => {
  it('should render successfully', () => {
    const title = 'modal';
    const text = 'text';
    const submit = jest.fn();
    const isModal = true;
    const isConfirmed = true;
    const { baseElement } = render(
      <SharedModal
        title={title}
        text={text}
        submit={submit}
        isModal={isModal}
        isConfirmed={isConfirmed}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
