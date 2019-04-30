import React from 'react';
import { mount, shallow } from 'enzyme';
import { DateInput } from '../form';
import Hint from '../hint';
import Label from '../label';
import ErrorMessage from '../error-message';

describe('DateInput', () => {
  it('all subelements have valid defaultProps', () => {
    expect(DateInput.Day.defaultProps._handleInput()).toBe(undefined);
    expect(DateInput.Month.defaultProps._handleInput()).toBe(undefined);
    expect(DateInput.Year.defaultProps._handleInput()).toBe(undefined);
    expect(DateInput.Month.defaultProps._registerComponent()).toBe(undefined);
    expect(DateInput.Year.defaultProps._registerComponent()).toBe(undefined);
  });
  describe('Day', () => {
    it('contains elements', () => {
      const wrapper = shallow(<DateInput.Day _name="name" />);
      expect(
        wrapper.containsMatchingElement(
          <input
            className="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2"
            id="name-day"
            name="name-day"
            aria-label="name-day input"
            type="number"
            autoComplete=""
            value=""
            pattern="[0-9]*"
            required={false}
          />
        )
      ).toBeTruthy();
      wrapper.unmount();
    });
    it('passes back input', () => {
      const handleInput = jest.fn();
      const wrapper = shallow(
        <DateInput.Day _name="name" _handleInput={handleInput} />
      );
      const wrapperForAnonFunc = shallow(
        <DateInput.Day _name="name" _handleInput={handleInput} />
      );
      wrapper.find('input').simulate('change', { target: { value: '10' } });
      wrapperForAnonFunc
        .find('input')
        .simulate('change', { target: { value: '10' } });
      expect(handleInput).toHaveBeenCalled();
      expect(handleInput.mock.calls[0][0]).toBe('day');
      expect(handleInput.mock.calls[0][1]).toBe('10');
      wrapper.unmount();
    });
    it('renders with error', () => {
      const wrapper = shallow(<DateInput.Day _name="name" error="error" />);
      expect(wrapper.find('input').props().className).toBe(
        'nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 nhsuk-input--error'
      );
      wrapper.unmount();
    });
  });

  describe('Month', () => {
    it('contains elements', () => {
      const wrapper = shallow(<DateInput.Month _name="name" />);
      expect(
        wrapper.containsMatchingElement(
          <input
            className="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2"
            id="name-month"
            name="name-month"
            aria-label="name-month input"
            type="number"
            autoComplete=""
            value=""
            pattern="[0-9]*"
            required={false}
          />
        )
      ).toBeTruthy();
      wrapper.unmount();
    });
    it('passes back input', () => {
      const handleInput = jest.fn();
      const wrapper = shallow(
        <DateInput.Month _name="name" _handleInput={handleInput} />
      );
      const wrapperForAnonFunc = shallow(<DateInput.Month _name="name" />);
      wrapper.find('input').simulate('change', { target: { value: '10' } });
      wrapperForAnonFunc
        .find('input')
        .simulate('change', { target: { value: '10' } });
      expect(handleInput).toHaveBeenCalled();
      expect(handleInput.mock.calls[0][0]).toBe('month');
      expect(handleInput.mock.calls[0][1]).toBe('10');
      wrapper.unmount();
    });
    it('registers ref', () => {
      const registerComponent = jest.fn();
      const wrapper = mount(
        <DateInput.Month _name="name" _registerComponent={registerComponent} />
      );
      expect(registerComponent).toHaveBeenCalled();
      expect(registerComponent.mock.calls[0][0]).toBe('month');
      wrapper.unmount();
    });
    it('renders with error', () => {
      const wrapper = shallow(<DateInput.Month _name="name" error="error" />);
      expect(wrapper.find('input').props().className).toBe(
        'nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 nhsuk-input--error'
      );
      wrapper.unmount();
    });
  });
  describe('Year', () => {
    it('contains elements', () => {
      const wrapper = shallow(<DateInput.Year _name="name" />);
      expect(
        wrapper.containsMatchingElement(
          <input
            aria-label="name-year input"
            autoComplete=""
            className="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4"
            id="name-year"
            name="name-year"
            pattern="[0-9]*"
            type="number"
            value=""
          />
        )
      ).toBeTruthy();
      wrapper.unmount();
    });
    it('passes back input', () => {
      const handleInput = jest.fn();
      const wrapper = shallow(
        <DateInput.Year _name="name" _handleInput={handleInput} />
      );
      const wrapperForAnonFunc = shallow(<DateInput.Year _name="name" />);
      wrapper.find('input').simulate('change', { target: { value: '10' } });
      wrapperForAnonFunc
        .find('input')
        .simulate('change', { target: { value: '10' } });
      expect(handleInput).toHaveBeenCalled();
      expect(handleInput.mock.calls[0][0]).toBe('year');
      expect(handleInput.mock.calls[0][1]).toBe('10');
      wrapper.unmount();
    });
    it('registers ref', () => {
      const registerComponent = jest.fn();
      const wrapper = mount(
        <DateInput.Year _name="name" _registerComponent={registerComponent} />
      );
      expect(registerComponent).toHaveBeenCalled();
      expect(registerComponent.mock.calls[0][0]).toBe('year');
      wrapper.unmount();
    });
    it('renders with error', () => {
      const wrapper = shallow(<DateInput.Year _name="name" error="error" />);
      expect(wrapper.find('input').props().className).toBe(
        'nhsuk-input nhsuk-date-input__input nhsuk-input--width-4 nhsuk-input--error'
      );
      wrapper.unmount();
    });
  });
  describe('Wrapper', () => {
    it('renders without individual components', () => {
      const wrapper = mount(<DateInput name="dateInput" />);
      expect(wrapper).toMatchSnapshot();
      wrapper.unmount();
    });
    it("doesn't call handleAutoFocus", () => {
      const wrapper = mount(<DateInput name="dateInput" />);
      const spy = jest.spyOn(wrapper.instance(), 'handleAutoFocus');
      wrapper
        .find('#dateInput-day')
        .simulate('change', { target: { value: '10' } });
      expect(spy).not.toHaveBeenCalled();
      wrapper.unmount();
    });

    it('matches snapshot', () => {
      const multiMount = mount(
        <DateInput name="dateInput">
          <DateInput.Day />
          <DateInput.Month />
          <DateInput.Year />
        </DateInput>
      );
      expect(multiMount).toMatchSnapshot();
      multiMount.unmount();
    });
    it('calls back values', () => {
      const valueCallback = jest.fn();
      const wrapper = mount(
        <DateInput valueCallback={valueCallback} autoFocus name="dateInput" />
      );

      expect(valueCallback).toHaveBeenCalledTimes(0);
      wrapper
        .find('#dateInput-day')
        .simulate('change', { target: { value: '10' } });
      expect(valueCallback).toHaveBeenCalledTimes(1);
      expect(valueCallback.mock.calls[0]).toEqual([
        'dateInput',
        {
          day: '10',
          month: '',
          year: ''
        }
      ]);
      wrapper
        .find('#dateInput-month')
        .simulate('change', { target: { value: '10' } });
      expect(valueCallback).toHaveBeenCalledTimes(2);
      expect(valueCallback.mock.calls[1]).toEqual([
        'dateInput',
        {
          day: '10',
          month: '10',
          year: ''
        }
      ]);
      wrapper
        .find('#dateInput-year')
        .simulate('change', { target: { value: '2000' } });
      expect(valueCallback).toHaveBeenCalledTimes(3);
      expect(valueCallback.mock.calls[2]).toEqual([
        'dateInput',
        {
          day: '10',
          month: '10',
          year: '2000'
        }
      ]);
      wrapper.unmount();
    });
  });
  it("doesn't inject props into other children", () => {
    const wrapper = mount(
      <DateInput name="dateInput">
        <h1>h1</h1>
      </DateInput>
    );
    expect(wrapper.containsMatchingElement(<h1>h1</h1>)).toBeTruthy();
    wrapper.unmount();
  });

  it('renders with error, label and hint', () => {
    const wrapper = shallow(
      <DateInput name="dateInput" hint="hint" label="Label" error="error" />
    );
    expect(wrapper.containsMatchingElement(<Hint>hint</Hint>)).toBeTruthy();
    expect(wrapper.containsMatchingElement(<Label>Label</Label>)).toBeTruthy();
    expect(
      wrapper.containsMatchingElement(<ErrorMessage>error</ErrorMessage>)
    ).toBeTruthy();
    wrapper.unmount();
  });
  it('registers component', () => {
    const wrapper = shallow(
      <DateInput name="dateInput" hint="hint" error="error" />
    );
    wrapper.instance().registerComponent('month', 'ref');
    wrapper.instance().registerComponent('year', 'ref');
    wrapper.instance().registerComponent('year1', 'ref');
    expect(wrapper.instance().monthInput).toBe('ref');
    expect(wrapper.instance().yearInput).toBe('ref');
    wrapper.unmount();
  });
});
