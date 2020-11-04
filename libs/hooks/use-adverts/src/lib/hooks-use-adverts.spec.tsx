import React from 'react';
import { render } from '@testing-library/react';

import { useAdverts } from './hooks-use-adverts';

const mockSelectors = jest.mock('react-redux', () => ({
  advert: jest.fn(),
  loading: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(() => mockSelectors),
}));

describe('useAdverts', () => {
  let result;
  it('should render successfully', () => {
    function HookRunner() {
      result = useAdverts(1);
      return null;
    }
    render(<HookRunner />);

    expect(result).toBeTruthy();
  });

  it('useRegistration should return objects', () => {
    expect(result).toEqual({
      advert: undefined,
      getAdvertById: result.getAdvertById,
      loading: undefined,
      onGetStartedClick: result.onGetStartedClick,
    });
  });
});
