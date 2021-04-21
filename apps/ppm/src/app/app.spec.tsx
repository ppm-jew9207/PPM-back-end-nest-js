import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesCourses', () => {
  it('render component succesfully', () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });
});
