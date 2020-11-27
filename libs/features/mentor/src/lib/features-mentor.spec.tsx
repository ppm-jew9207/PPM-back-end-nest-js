import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesMentor from './features-mentor';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesAdverts', () => {
  it('render successfully', () => {
    const component = shallow(<FeaturesMentor />);
    expect(component).toBeTruthy();
  });
});
