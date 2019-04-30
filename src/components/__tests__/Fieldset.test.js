import React from 'react';
import { shallow } from 'enzyme';
import Fieldset from '../fieldset';
import Input from '../form/components/input';

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
  it('passes back on error', () => {
    const callbackErrorFromChild = jest.fn();
    const wrapper = shallow(
      <Fieldset callbackErrorFromChild={callbackErrorFromChild}>
        <Input value="input" error="error">
          Input
        </Input>
        <Input value="input">Input</Input>
        <p>Non-Form Element</p>
      </Fieldset>
    );
    expect(callbackErrorFromChild).toHaveBeenCalled();
    expect(callbackErrorFromChild.mock.calls[0][0]).toBe(true);
    wrapper.unmount();
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
  it('has valid defaultProps', () => {
    expect(Fieldset.defaultProps.valueCallback()).toBe(undefined);
    expect(Fieldset.defaultProps.callbackErrorFromChild()).toBe(undefined);
    expect(Fieldset.defaultProps.registerInitialValue()).toBe(undefined);
  });
});
