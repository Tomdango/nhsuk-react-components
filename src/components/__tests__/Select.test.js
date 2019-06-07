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
        <Select.Option value="1">One</Select.Option>
      </Select>
    );
    wrapper.find('option').simulate('click');
  });
});

describe('Item', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Select.Option value="item">Item</Select.Option>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
