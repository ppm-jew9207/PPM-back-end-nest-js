import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesCourses from './features-courses';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesCourses', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();

  storeMock = configureStoreMock({
    profile: { _id: 'asdadsafdfdffd' },
    courses: [
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
    component = shallow(<FeaturesCourses />);
    expect(component).toBeTruthy();
  });

  it('finds loading', () => {
    storeMock = configureStoreMock({
      courses: null,
      loading: true,
    });
    component = shallow(<FeaturesCourses />);
    expect(component).toBeTruthy();
  });

  it('shows that there no courses', () => {
    storeMock = configureStoreMock({
      courses: [],
      loading: false,
    });
    component = shallow(<FeaturesCourses />);
    expect(component).toBeTruthy();
  });

  it('shows error when courses are null', () => {
    storeMock = configureStoreMock({});
    component = shallow(<FeaturesCourses />);
    expect(component).toBeTruthy();
  });
});
