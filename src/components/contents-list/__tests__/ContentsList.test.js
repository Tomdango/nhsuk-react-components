import React from 'react';
import { mount } from 'enzyme';
import ContentsList from '../contents-list';

describe('ContentsList', () => {
  it('item matches snapshot', () => {
    const mountedComponent = mount(
      <ContentsList.Item>Test Text</ContentsList.Item>
    );
    expect(mountedComponent).toMatchSnapshot();
    mountedComponent.unmount();
  });
  it('current item matches snapshot', () => {
    const mountedComponent = mount(
      <ContentsList.Item current>Test Text</ContentsList.Item>
    );
    expect(mountedComponent).toMatchSnapshot();
    mountedComponent.unmount();
  });
  it('container matches snapshot', () => {
    const mountedComponent = mount(
      <ContentsList>
        <ContentsList.Item>Test</ContentsList.Item>
        <ContentsList.Item current>Test Text</ContentsList.Item>
      </ContentsList>
    );

    expect(mountedComponent).toMatchSnapshot();
    mountedComponent.unmount();
  });
  it('responds to onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <ContentsList>
        <ContentsList.Item onClick={onClick}>Test</ContentsList.Item>
      </ContentsList>
    );
    const wrapperForAnonFunc = mount(
      <ContentsList>
        <ContentsList.Item>Test</ContentsList.Item>
      </ContentsList>
    );
    wrapper.find('a').simulate('click');
    wrapperForAnonFunc.find('a').simulate('click');
    expect(onClick).toHaveBeenCalled();
    wrapper.unmount();
  });
});
