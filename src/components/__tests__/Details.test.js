import React from 'react';
import { shallow } from 'enzyme';
import Details from '../details';

describe('Details', () => {
  it('normal matches snapshot', () => {
    const shallowMount = shallow(<Details text="Test Text">Test Text</Details>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('expander matches snapshot', () => {
    const shallowMount = shallow(
      <Details expander text="Test Text">
        Test Text
      </Details>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('renders expandergroup', () => {
    const wrapper = shallow(
      <Details.ExpanderGroup>Child</Details.ExpanderGroup>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
