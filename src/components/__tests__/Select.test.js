import React from 'react';
import { shallow, mount } from 'enzyme';
import { Select } from '../form';

describe('Select', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Select name="select" />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('updates form state on change', () => {
    const wrapper = mount(
      <Select name="select">
        <Select.Item value="1">One</Select.Item>
      </Select>
    );
    wrapper.find('option').simulate('click');
  });
});

describe('Item', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Select.Item value="item">Item</Select.Item>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
