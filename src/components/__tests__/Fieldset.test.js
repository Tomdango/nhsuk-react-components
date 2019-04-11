import React from 'react';
import { shallow } from 'enzyme';
import Fieldset from '../fieldset';

describe('Fieldset', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<Fieldset>Test</Fieldset>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('renders as a page title', () => {
    const shallowMount = shallow(
      <Fieldset title="Title" asPageHeading>
        Test
      </Fieldset>
    );
    expect(
      shallowMount.containsMatchingElement(
        <h1 className="nhsuk-fieldset__heading nhsuk-fieldset__legend--l">
          Title
        </h1>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
});
