import React from 'react';
import { shallow, mount } from 'enzyme';
import DateInput from '..';

describe('DateInput', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<DateInput></DateInput>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('Displays initial value when passed in via props', () => {
    const initialValues = { day: '10', month: '06', year: '1999' };
    const component = mount(
      <DateInput 
        label="Date From Field"
        labelHtmlFor="date-from"
        id="date-from"
        name="dateFrom"
        autoselectnext="true"
        value={initialValues}
        error=""
        autoComplete="off"
        type="tel">
        </DateInput>
      );
      expect(component.getElements().length).toEqual(1);
      expect(component).toMatchSnapshot();
      expect(component.find("#dateFrom-day").props().value).toContain("10");
      expect(component.find("#dateFrom-month").props().value).toContain("06");
      expect(component.find("#dateFrom-year").props().value).toEqual("1999");
  });

  it('Updates values when props change', () => {
    const initialValues = { day: '10', month: '06', year: '1999' };
    const updatedValues = { day: '06', month: '06', year: '1666' };
    const component = mount(
      <DateInput 
        label="Date From Field"
        labelHtmlFor="date-from"
        id="date-from"
        name="dateFrom"
        autoselectnext="true"
        value={initialValues}
        error=""
        autoComplete="off"
        type="tel">
        </DateInput>
      );
      expect(component.find("#dateFrom-day").props().value).toEqual("10");
      expect(component.find("#dateFrom-month").props().value).toEqual("06");
      expect(component.find("#dateFrom-year").props().value).toEqual("1999");

      component.setProps({
        value: updatedValues,
      });

      expect(component.find("#dateFrom-day").props().value).toEqual("06");
      expect(component.find("#dateFrom-month").props().value).toEqual("06");
      expect(component.find("#dateFrom-year").props().value).toEqual("1666");
  });

  it('Does not update when props do not change', () => {
    const initialValues = { day: '10', month: '06', year: '1999' };
    const component = mount(
      <DateInput 
        label="Date From Field"
        labelHtmlFor="date-from"
        id="date-from"
        name="dateFrom"
        autoselectnext="true"
        value={initialValues}
        error=""
        autoComplete="off"
        type="tel">
        </DateInput>
      );
      expect(component.find("#dateFrom-day").props().value).toEqual("10");
      expect(component.find("#dateFrom-month").props().value).toEqual("06");
      expect(component.find("#dateFrom-year").props().value).toEqual("1999");
      component.render = jest.fn();

      component.setProps({
        value: initialValues,
      });

      expect(component.render).not.toHaveBeenCalled();
      expect(component.find("#dateFrom-day").props().value).toEqual("10");
      expect(component.find("#dateFrom-month").props().value).toEqual("06");
      expect(component.find("#dateFrom-year").props().value).toEqual("1999");
  });
});
