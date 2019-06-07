import React from 'react';
import { mount } from 'enzyme';
import HeaderContext from '../HeaderContext';
import Navigation from '../components/navigation';

const testContext = {
  menuVisible: false,
  toggleMenu: jest.fn()
};

describe('Header.Navigation', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <HeaderContext.Provider value={testContext}>
        <Navigation></Navigation>
      </HeaderContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('toggles visible with context', () => {
    const visibleContext = {
      menuVisible: true
    };
    const hiddenContext = {
      menuVisible: false
    };
    const visibleMenuWrapper = mount(
      <HeaderContext.Provider value={visibleContext}>
        <Navigation></Navigation>
      </HeaderContext.Provider>
    );
    const hiddenMenuWrapper = mount(
      <HeaderContext.Provider value={hiddenContext}>
        <Navigation></Navigation>
      </HeaderContext.Provider>
    );
    expect(visibleMenuWrapper.find('nav').props().className).toBe(
      'nhsuk-header__navigation js-show'
    );
    expect(hiddenMenuWrapper.find('nav').props().className).toBe(
      'nhsuk-header__navigation'
    );
    visibleMenuWrapper.unmount();
    hiddenMenuWrapper.unmount();
  });
});
