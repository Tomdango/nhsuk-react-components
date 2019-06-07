import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../header';

describe('Header', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Header>Child</Header>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('updates state on toggleMenu', () => {
    const wrapper = mount(<Header>Child</Header>);
    expect(wrapper.state().menuVisible).toBe(false);
    wrapper.instance().toggleMenu();
    expect(wrapper.state().menuVisible).toBe(true);
    wrapper.unmount();
  });
});
