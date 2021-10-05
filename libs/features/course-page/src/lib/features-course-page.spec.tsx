import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesCoursePage from './features-course-page';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  useParams: () => {
    return '1111111111';
  },
}));

describe('FeaturesCoursePage', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();

  it('should render successfully', () => {
    storeMock = configureStoreMock({
      course: {
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
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(() => storeMock.getState());
    jest
      .spyOn(redux, 'useDispatch')
      .mockImplementation(() => storeMock.dispatch);
    component = shallow(<FeaturesCoursePage store={storeMock} />);

    expect(component).toBeTruthy();
  });

  it('should render error successfully', () => {
    storeMock = configureStoreMock({
      course: null,
      loading: false,
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(() => storeMock.getState());
    jest
      .spyOn(redux, 'useDispatch')
      .mockImplementation(() => storeMock.dispatch);
    component = shallow(<FeaturesCoursePage store={storeMock} />);
    expect(component).toBeTruthy();
  });

  it('should load loading', () => {
    storeMock = configureStoreMock({
      course: null,
      loading: true,
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(() => storeMock.getState());
    jest
      .spyOn(redux, 'useDispatch')
      .mockImplementation(() => storeMock.dispatch);
    component = shallow(<FeaturesCoursePage store={storeMock} />);
    expect(component).toBeTruthy();
  });
});
