import React from 'react';
import { mount } from 'enzyme';
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
});
