import React from 'react';
import { shallow } from 'enzyme';
import NavAZ from '../nav-a-z';

describe('NavAZ', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<NavAZ fullAlphabet />);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('renders all letters', () => {
    const shallowMount = shallow(<NavAZ fullAlphabet />);
    expect(shallowMount.text()).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    shallowMount.unmount();
  });
  it('sets letters to disabled', () => {
    const shallowMount = shallow(<NavAZ fullAlphabet disabledItems={['A']} />);
    expect(shallowMount.text()).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(
      shallowMount.containsMatchingElement(
        <span className="nhsuk-nav-a-z__link--disabled">A</span>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  it('excludes letters', () => {
    const shallowMount = shallow(<NavAZ fullAlphabet excludedItems={['A']} />);
    expect(shallowMount.text()).toEqual('BCDEFGHIJKLMNOPQRSTUVWXYZ');
    shallowMount.unmount();
  });
  it('renders using items', () => {
    const shallowMount = shallow(<NavAZ items={['A', 'B', 'C']} />);
    const shallowMountWithDisableFalse = shallow(
      <NavAZ items={['A', 'B', { label: 'C', disable: false }, false]} />
    );
    expect(
      shallowMountWithDisableFalse.containsMatchingElement(
        <span className="nhsuk-nav-a-z__link--disabled">C</span>
      )
    ).toBeFalsy();
    expect(shallowMount.text()).toEqual('ABC');
    shallowMount.unmount();
  });
  it('handles wrong items', () => {
    const shallowMount = shallow(
      <NavAZ items={['A', 'B', { label: 'C', disable: true }, false]} />
    );
    expect(shallowMount.text()).toEqual('ABC');
    expect(
      shallowMount.containsMatchingElement(
        <span className="nhsuk-nav-a-z__link--disabled">C</span>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
});
