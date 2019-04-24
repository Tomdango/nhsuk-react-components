import React from 'react';
import { mount, shallow } from 'enzyme';
import Breadcrumbs from '../breadcrumbs';

describe('Breadcrumbs', () => {
  it('matches snapshot', () => {
    const mountedItem = mount(
      <Breadcrumbs>
        <Breadcrumbs.Item>Test</Breadcrumbs.Item>
      </Breadcrumbs>
    );
    expect(mountedItem).toMatchSnapshot();
    mountedItem.unmount();
  });
  it('item matches snapshot', () => {
    const mountedItem = mount(<Breadcrumbs.Item>Item</Breadcrumbs.Item>);
    expect(mountedItem).toMatchSnapshot();
    mountedItem.unmount();
  });
  it('handles onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Breadcrumbs.Item onClick={onClick}>Item</Breadcrumbs.Item>
    );
    const wrapperForAnonFunc = shallow(
      <Breadcrumbs.Item>Item</Breadcrumbs.Item>
    );
    wrapper.find('a').simulate('click');
    wrapperForAnonFunc.find('a').simulate('click');
    expect(onClick).toHaveBeenCalled();
    wrapper.unmount();
    wrapperForAnonFunc.unmount();
  });
});
