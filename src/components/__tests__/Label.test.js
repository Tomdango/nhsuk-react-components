/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { shallow } from 'enzyme';
import Label from '../label';

describe('Label', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<Label>Label</Label>);
    expect(shallowMount).toMatchSnapshot();

    shallowMount.unmount();
  });
  it('renders as bold', () => {
    const shallowMount = shallow(<Label type="bold">Label</Label>);
    expect(
      shallowMount.containsMatchingElement(
        <label className="nhsuk-label  nhsuk-label--s ">Label</label>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  it('renders as a heading', () => {
    const shallowMount = shallow(<Label type="heading">Label</Label>);
    expect(
      shallowMount.containsMatchingElement(
        <label className="nhsuk-label   nhsuk-label--xl">Label</label>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
});
