import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesAdverts from './features-adverts';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesAdverts', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();

  storeMock = configureStoreMock({
    profile: { _id: 'asdadsafdfdffd' },
    adverts: [
      {
        _id: '1111111111',
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
        lessons: [],
      },
    ],
    loading: false,
  });

  beforeEach(() => {
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(() => storeMock.getState());
    jest
      .spyOn(redux, 'useDispatch')
      .mockImplementation(() => storeMock.dispatch);
  });

  it('render component succesfully', () => {
    component = shallow(<FeaturesAdverts />);
    expect(component).toBeTruthy();
  });

  it('finds loading', () => {
    storeMock = configureStoreMock({
      adverts: null,
      loading: true,
    });
    component = shallow(<FeaturesAdverts />);
    expect(component).toBeTruthy();
  });

  it('shows that there no adverts', () => {
    storeMock = configureStoreMock({
      adverts: [],
      loading: false,
    });
    component = shallow(<FeaturesAdverts />);
    expect(component).toBeTruthy();
  });

  it('shows error when adverts are null', () => {
    storeMock = configureStoreMock({});
    component = shallow(<FeaturesAdverts />);
    expect(component).toBeTruthy();
  });
});
