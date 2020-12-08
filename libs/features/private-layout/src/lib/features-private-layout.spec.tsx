import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesPrivateLayout from './features-private-layout';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesAdverts', () => {
  let component;

  it('render successfully', () => {
    component = shallow(
      <FeaturesPrivateLayout children={null} router={null} />
    );
    expect(component).toBeTruthy();
  });

  it('render with mocked links', () => {
    const router = [
      {
        title: 'Home',
        path: '/home/',
        icon: null,
        component: null,
        onMenu: true,
      },
      {
        title: 'Home2',
        path: '/home2/',
        icon: null,
        component: null,
        onMenu: true,
      },
      {
        title: 'Home3',
        path: '/home3/',
        icon: null,
        component: null,
        onMenu: true,
      },
      {
        title: 'Home4',
        path: '/home4/',
        icon: null,
        component: null,
        onMenu: true,
      },
    ];
    component.setProps({ router: router });
    expect(component).toBeTruthy();
  });
});
