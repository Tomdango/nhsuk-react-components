import React from 'react';
import { mount } from 'enzyme';
import { DateInput } from '../form';

describe('DateInput', () => {
  it('matches snapshot for all components', () => {
    const singleMount = mount(<DateInput name="dateInput" />);
    const dayMount = mount(<DateInput.Day />);
    const monthMount = mount(<DateInput.Month />);
    const yearMount = mount(<DateInput.Year />);
    expect(singleMount).toMatchSnapshot();
    expect(dayMount).toMatchSnapshot();
    expect(monthMount).toMatchSnapshot();
    expect(yearMount).toMatchSnapshot();
    singleMount.unmount();
    dayMount.unmount();
    monthMount.unmount();
    yearMount.unmount();
  });
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
