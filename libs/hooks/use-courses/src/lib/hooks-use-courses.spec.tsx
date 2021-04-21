import React from 'react';
import { render } from '@testing-library/react';

import { useCourses } from './hooks-use-courses';

const mockSelectors = jest.mock('react-redux', () => ({
  course: jest.fn(),
  loading: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(() => mockSelectors),
}));

describe('useCourses', () => {
  let result;
  it('should render successfully', () => {
    function HookRunner() {
      result = useCourses(1);
      return null;
    }
    render(<HookRunner />);

    expect(result).toBeTruthy();
  });

  it('useRegistration should return objects', () => {
    expect(result).toEqual({
      course: undefined,
      getCourseById: result.getCourseById,
      loading: undefined,
      onGetStartedClick: result.onGetStartedClick,
    });
  });
});
