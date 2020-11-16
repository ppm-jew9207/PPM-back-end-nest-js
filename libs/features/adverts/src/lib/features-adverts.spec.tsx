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
    adverts: [
      {
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
    component = shallow(<FeaturesAdverts />);
  });

  it('should render successfully', () => {
    expect(component).toBeTruthy();
  });
});
