import React from 'react';
import { render } from '@testing-library/react';

import SharedListEditor from './shared-list-editor';

describe('SharedListEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedListEditor />);
    expect(baseElement).toBeTruthy();
  });
});
