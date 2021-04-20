import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesMentors from './features-mentors';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesCourses', () => {
  it('render successfully', () => {
    const component = shallow(<FeaturesMentors />);
    expect(component).toBeTruthy();
  });
});
