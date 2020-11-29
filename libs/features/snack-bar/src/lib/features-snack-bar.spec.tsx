import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import FeaturesSnackBar from './features-snack-bar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const mockEnqueue = jest.fn();

jest.mock('notistack', () => ({
...jest.requireActual('notistack'),
useSnackbar: () => {
  return {
    enqueueSnackbar: mockEnqueue
  };
}
}));

describe(' FeaturesSnackBar', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();
  storeMock = configureStoreMock(
    {
      message: null,
      type: null
    }
  );

  beforeEach(() => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => storeMock.getState());
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => storeMock.dispatch);
    component = shallow(<FeaturesSnackBar store={storeMock}/>);

  });
  it('should render successfully', () => {
    expect(component).toBeTruthy();
  });
});
