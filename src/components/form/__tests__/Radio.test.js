import React from 'react';
import { mount } from 'enzyme';
import Radios from '../components/radios';

describe('Radios', () => {
  it('shows conditional content', () => {
    const TestComponent = () => <p id="conditional">ConditionalContent</p>;

    const component = mount(
      <Radios id="conditional-radios" name="radios">
        <Radios.Radio conditional={<TestComponent />} value="Inc Con" />
        <Radios.Radio value="Not Inc Con">Radio</Radios.Radio>
      </Radios>
    );
    // check conditional content not displayed at first load
    expect(
      component.containsMatchingElement(
        <p id="conditional">ConditionalContent</p>
      )
    ).toBeFalsy();
    // simulate radio button 0 click
    component
      .find('input#conditional-radios-radio-0')
      .simulate('change', { target: { value: 'Inc Con' } });
    // check conditional content now displayed
    expect(
      component.containsMatchingElement(
        <p id="conditional">ConditionalContent</p>
      )
    ).toBeTruthy();
    // simulate radio button 1 click
    component
      .find('input#conditional-radios-radio-1')
      .simulate('change', { target: { value: 'Not Inc Con' } });

    // check conditional content not displayed
    expect(
      component.containsMatchingElement(
        <p id="conditional">ConditionalContent</p>
      )
    ).toBeFalsy();

    component.unmount();
  });
});
