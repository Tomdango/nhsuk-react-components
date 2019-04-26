import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../form/components/input';
import ErrorMessage from '../error-message';
import Hint from '../hint';

describe('Input', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('handles onChange', () => {
    const valueCallback = jest.fn();
    const wrapper = shallow(<Input valueCallback={valueCallback} />);
    wrapper.find('input').simulate('change', { target: { value: 'Change' } });
    expect(valueCallback).toHaveBeenCalled();
    expect(valueCallback.mock.calls[0][1]).toBe('Change');
    wrapper.unmount();
  });
  it('renders hint and error', () => {
    const wrapper = shallow(<Input error="Error" hint="Hint" />);
    expect(
      wrapper.containsMatchingElement(<ErrorMessage>Error</ErrorMessage>)
    ).toBeTruthy();
    expect(wrapper.containsMatchingElement(<Hint>Hint</Hint>)).toBeTruthy();
    wrapper.unmount();
  });
  it('handles input', () => {
    const valueCallback = jest.fn();
    const wrapper = mount(<Input name="input" valueCallback={valueCallback} />);
    expect(wrapper.state()).toEqual({ input: '' });
    wrapper.instance().handleInput({ target: { value: 'InputValue' } });
    expect(valueCallback).toHaveBeenCalled();
    expect(valueCallback.mock.calls[0][0]).toBe('input');
    expect(valueCallback.mock.calls[0][1]).toBe('InputValue');
    expect(wrapper.state()).toEqual({ input: 'InputValue' });
    wrapper.unmount();
  });
  it('has valid defaultProps', () => {
    expect(Input.defaultProps.valueCallback()).toBe(undefined);
    expect(Input.defaultProps.registerInitialValue()).toBe(undefined);
  });
  it('changes width', () => {
    const wrapper = shallow(<Input name="name" width={12} />);
    expect(
      wrapper.containsMatchingElement(
        <input
          className="nhsuk-input nhsuk-input--width-12"
          id="name"
          name="name-hint"
          type="text"
          aria-describedby="name-hint"
          autoComplete=""
        />
      )
    ).toBeTruthy();
    wrapper.unmount();
  });
});
