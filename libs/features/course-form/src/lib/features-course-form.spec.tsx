import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesCoursesForm from './features-course-form';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesCourses', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();

  storeMock = configureStoreMock({
    course: {
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
    loading: false,
    categories: [],
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
    component = shallow(<FeaturesCoursesForm />);
    expect(component).toBeTruthy();
  });

  it('renders loading', () => {
    storeMock = configureStoreMock({
      courses: null,
      loading: true,
    });
    component = shallow(<FeaturesCoursesForm />);
    expect(component).toBeTruthy();
  });
});
