import React from 'react';
import { render } from '@testing-library/react';

import FeaturesAdvertPage from './features-advert-page';

jest.mock('', () => ({
  advert: {
    title: 'TitleName',
    description: 'That is wonderful lesson',
    creator: {
      name: 'Lukas Ruzauskas',
      id: '1111111111111111',
    },
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Javascript',
    programmingLanguages: ['Javascript', 'Typescript'],
    preRequisites: 'University degree',
  },
  loading: false,
  onGetStartedClick: () => jest.fn(),
}));

describe('FeaturesAdvertPage', () => {
  it('should render successfully', () => {
    const result = render(<FeaturesAdvertPage />);
    expect(result).toBeTruthy();
  });
});
