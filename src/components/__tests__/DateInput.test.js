import React from 'react';
import { mount } from 'enzyme';
import { DateInput } from '../form';

describe('DateInput', () => {
  it('injects props', () => {
    const multiMount = mount(
      <DateInput name="dateInput">
        <DateInput.Day />
        <DateInput.Month />
        <DateInput.Year />
      </DateInput>
    );
    // Day
    const dayProps = multiMount.find('#dateInput-day').props();
    const monthProps = multiMount.find('#dateInput-month').props();
    const yearProps = multiMount.find('#dateInput-year').props();
    expect(dayProps._name).not.toEqual('');
    expect(dayProps._day).not.toEqual('');
    expect(monthProps._name).not.toEqual('');
    expect(dayProps._month).not.toEqual('');
    expect(yearProps._name).not.toEqual('');
    expect(yearProps._year).not.toEqual('');
    multiMount.unmount();
  });
});
