import React from 'react';
import { mount } from 'enzyme';
import MenuToggle from '../components/menutoggle';
import HeaderContext from '../HeaderContext';

const testContext = {
  toggleMenu: jest.fn()
};

describe('Header.MenuToggle', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <HeaderContext.Provider value={testContext}>
        <MenuToggle></MenuToggle>
      </HeaderContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('calls toggleMenu on click', () => {
    const wrapper = mount(
      <HeaderContext.Provider value={testContext}>
        <MenuToggle />
      </HeaderContext.Provider>
    );
    wrapper.find('#toggle-menu').simulate('click');
    expect(testContext.toggleMenu).toHaveBeenCalled();
    wrapper.unmount();
  });
});
