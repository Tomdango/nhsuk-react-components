import React from 'react';
import { shallow } from 'enzyme';
import ActionLink from '../action-link';

describe('ActionLink', () => {
  it('matches the snapshot', () => {
    const shallowMount = shallow(<ActionLink>Test</ActionLink>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('handles onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ActionLink onClick={onClick}>Test</ActionLink>);
    const wrapperForAnonFunc = shallow(<ActionLink>Test</ActionLink>);
    wrapper.find('a').simulate('click');
    wrapperForAnonFunc.find('a').simulate('click');
    wrapper.unmount();
    wrapperForAnonFunc.unmount();
  });
});
