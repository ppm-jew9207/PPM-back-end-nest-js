import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesForgotPassword from './features-forgot-password';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesCourses', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();

  storeMock = configureStoreMock({
    isLogged: false,
    loading: false,
    step: 0,
    loadingStep: false,
  });

  const mockHistory = jest.fn();

  beforeEach(() => {
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(() => storeMock.getState());
    jest
      .spyOn(redux, 'useDispatch')
      .mockImplementation(() => storeMock.dispatch);
  });

  it('render successfully', () => {
    component = shallow(<FeaturesForgotPassword />);
    expect(component).toBeTruthy();
  });
});
