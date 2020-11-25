import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesAuthorization from './features-authorization';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesAdverts', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();

  storeMock = configureStoreMock({
    isLogged: true,
    loading: false,
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

  it('redirect successfully', () => {
    component = shallow(<FeaturesAuthorization history={mockHistory} />);
    expect(component).toBeTruthy();
  });
});
