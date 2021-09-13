import React from 'react';
import { render } from '@testing-library/react';

import SharedFilter from './shared-filter';

export interface FilterFormData {
  rating?: string;
  topic?: string[];
  categories?: string[];
}

interface SharedFilter {
  onSubmit: (queries: FilterFormData) => void;
}

describe('SharedFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedFilter onChange={[]} onSubmit={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
