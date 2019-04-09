import React from 'react';
import { mount, shallow } from 'enzyme';
import DoDontList from '../do-dont-list';

describe('DoDontList', () => {
  it('matches snapshot for do', () => {
    const shallowMount = shallow(<DoDontList.Do>Test</DoDontList.Do>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('matches snapshot for dont', () => {
    const shallowMount = shallow(<DoDontList.Dont>Test</DoDontList.Dont>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('matches snapshot for container', () => {
    const mountedComponent = mount(
      <DoDontList title="Do" type="tick">
        <DoDontList.Do>Test</DoDontList.Do>
      </DoDontList>
    );
    expect(mountedComponent).toMatchSnapshot();
    mountedComponent.unmount();
  });
});
