import React from 'react';
import { render } from '@testing-library/react';

import { SharedInfoCard } from './shared-info-card';

const fields= [
  {
    label: 'label',
    value: 'value',
  },
];

const title = "title";

describe(' SharedInfoCard', () => {
  it('should render successfully', () => {
    const result = render(
    <SharedInfoCard
      title={title}
      fields={fields}
    />);
    expect(result).toBeTruthy();
  });
});
