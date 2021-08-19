import React from 'react';
import { render } from '@testing-library/react';

import SharedFilter from './shared-filter';

type Detail = {
  label: string;
  name: string;
};
interface SharedFilterProps {
  details?: Detail[];
  title?: string;
  type?: string;
}

describe('SharedFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFilter />);
    expect(baseElement).toBeTruthy();
  });
});
