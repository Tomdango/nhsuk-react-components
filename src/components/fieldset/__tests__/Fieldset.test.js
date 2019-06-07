import React from 'react';
import { shallow } from 'enzyme';
import Fieldset from '..';
import Input from '../../form/components/input';

describe('Fieldset', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<Fieldset>Test</Fieldset>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('renders as a page title', () => {
    const shallowMount = shallow(<Fieldset title="Title">Test</Fieldset>);
    expect(
      shallowMount.containsMatchingElement(
        <h1 className="nhsuk-fieldset__heading nhsuk-fieldset__legend--m">
          Title
        </h1>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });

  it('produces different titleSizes', () => {
    const wrapper = shallow(<Fieldset title="title" titleSize="xl" />);
    expect(
      wrapper.containsMatchingElement(
        <legend className="nhsuk-fieldset__legend nhsuk-fieldset__legend--xl">
          <h1 className="nhsuk-fieldset__heading nhsuk-fieldset__legend--xl">
            title
          </h1>
        </legend>
      )
    );
  });
});
