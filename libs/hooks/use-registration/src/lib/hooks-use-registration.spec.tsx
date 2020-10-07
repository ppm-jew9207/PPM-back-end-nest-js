import React from 'react';
import { render } from '@testing-library/react';
import { useRegistration } from './hooks-use-registration';
import { History } from '@ppm/common/main';

const mockSelectors = jest.mock('react-redux', () => ({
  registrationStep: jest.fn(),
  loading: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(() => mockSelectors),
}));

jest.mock('react-router-dom', () => ({
  useParams: () => jest.fn(),
}));

describe('useRegistration', () => {
  let result;
  it('should render successfully', () => {
    function HookRunner() {
      result = useRegistration({} as History);
      return null;
    }
    render(<HookRunner />);

    expect(result).toBeTruthy();
  });

  it('useRegistration should return objects', () => {
    expect(result).toEqual({
      getStepContent: result.getStepContent,
      loading: undefined,
      registrationStep: undefined,
      staticSteps: ['Registration', 'Verification', 'Login'],
    });
  });
});
