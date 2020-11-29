import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeaturesDashboardMentor from './features-dashboard-mentor';

Enzyme.configure({ adapter: new Adapter() });

describe(' FeaturesAdverts', () => {
  it('render successfully', () => {
    const component = shallow(<FeaturesDashboardMentor />);
    expect(component).toBeTruthy();
  });
});
