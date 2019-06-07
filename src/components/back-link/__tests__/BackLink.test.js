import React from 'react';
import { shallow } from 'enzyme';
import BackLink from '../back-link';

describe('BackLink', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<BackLink />);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('handles onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<BackLink onClick={onClick} />);
    wrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalled();
    wrapper.unmount();
  });
});
