import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import FeaturesMentors from './features-mentors';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesMentors', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();
  storeMock = configureStoreMock({
    mentors: [],
  });

  beforeEach(() => {
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(() => storeMock.getState());
    jest
      .spyOn(redux, 'useDispatch')
      .mockImplementation(() => storeMock.dispatch);
    component = shallow(<FeaturesMentors store={storeMock} />);
  });
  it('should render successfully', () => {
    expect(component).toBeTruthy();
  });
});
