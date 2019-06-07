import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../components/logo';

describe('Header.Logo', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Logo></Logo>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('sets white', () => {
    const whiteWrapper = shallow(<Logo white></Logo>);
    const notWhiteWrapper = shallow(<Logo white={false}></Logo>);
    expect(whiteWrapper.find('svg').props().className).toBe(
      'nhsuk-logo nhsuk-logo--white'
    );
    expect(notWhiteWrapper.find('svg').props().className).toBe('nhsuk-logo');
    whiteWrapper.unmount();
    notWhiteWrapper.unmount();
  });
});
