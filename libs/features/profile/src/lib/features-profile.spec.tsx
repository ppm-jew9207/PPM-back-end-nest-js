import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import FeaturesProfile from './features-profile';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe(' FeaturesProfile', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();
  storeMock = configureStoreMock(
    {
      profile: {photo: ''},
      loading: false,
      adverts: [{_id: 'tetsId', creator: {_id: '4jh35b23jh5', name: 'Jon', imageUrl: 'http://google.lt.image.jpg' }}],
    }
  );

  beforeEach(() => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => storeMock.getState());
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => storeMock.dispatch);
    component = shallow(<FeaturesProfile  store={storeMock}/>);

  });
  it('should render successfully', () => {
    expect(component).toBeTruthy();
  });
});
