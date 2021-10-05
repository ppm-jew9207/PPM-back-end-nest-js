import React from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesRegistration from './features-registration';
import { MemoryRouter, Route } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesCourses', () => {
  let storeMock;
  let component;
  const configureStoreMock = configureStore();

  const RenderWithRouter = ({ children }) => (
    <MemoryRouter initialEntries={['']}>
      <Route path="">{children}</Route>
    </MemoryRouter>
  );

  // Empty store
  storeMock = configureStoreMock({
    registrationStep: 0,
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

  it('render successfully', () => {
    const match = {
      params: {
        id: 'dfasdsadsadsadsa',
      },
    };
    /* TODO: mock History in another way, now type error is shown */
    component = shallow(
      <RenderWithRouter>
        <FeaturesRegistration history={history} />
      </RenderWithRouter>
    );
    expect(component).toBeTruthy();
  });
});
