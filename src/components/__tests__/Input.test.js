import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../form';

describe('Input', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Input name="input" />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
