import React from 'react';
import { shallow } from 'enzyme';
import WarningCallout from '../warning-callout';

describe('WarningCallout', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(
      <WarningCallout heading="title">Child</WarningCallout>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('conditionally renders header', () => {
    const shallowMount = shallow(
      <WarningCallout heading="title">Child</WarningCallout>
    );
    const shallowMountwithoutHeading = shallow(
      <WarningCallout>Child</WarningCallout>
    );
    expect(
      shallowMount.containsMatchingElement(
        <h3 className="nhsuk-warning-callout__label">title</h3>
      )
    ).toBeTruthy();
    expect(
      shallowMountwithoutHeading.containsMatchingElement(
        <h3 className="nhsuk-warning-callout__label">title</h3>
      )
    ).toBeFalsy();
    shallowMount.unmount();
    shallowMountwithoutHeading.unmount();
  });
});
