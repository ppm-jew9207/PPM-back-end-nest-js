import React from 'react';
import { render } from '@testing-library/react';

import SharedFilter from './shared-filter';

interface FilterFormData {
  rating?: string;
  topic?: string[];
  categories?: string[];
}
interface SharedFilterProps {
  onChange: (queries: FilterFormData) => void;
}

describe('SharedFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFilter onChange={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
