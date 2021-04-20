import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesLessonPage from './features-lesson-page';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesCourses', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();

  // Empty store
  storeMock = configureStoreMock({
    lessons: [],
    lesson: null,
    loading: false,
    categoriesList: [],
    learnItemsList: [],
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
    const match = {
      params: {
        id: 'dfasdsadsadsadsa',
      },
    };
    component = shallow(
      /* TODO: mock History in another way, now type error is shown */
      <FeaturesLessonPage history={mockHistory} match={match} />
    );
    expect(component).toBeTruthy();
  });
});
