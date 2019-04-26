import React from 'react';
import { shallow, mount } from 'enzyme';
import Select from '../form/components/select';
import ErrorMessage from '../error-message';
import Hint from '../hint';

describe('Select', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('handles onChange', () => {
    const valueCallback = jest.fn();
    const wrapper = shallow(<Select valueCallback={valueCallback} />);
    wrapper.find('select').simulate('change', { target: { value: 'Change' } });
    expect(valueCallback).toHaveBeenCalled();
    expect(valueCallback.mock.calls[0][1]).toBe('Change');
    wrapper.unmount();
  });
  it('renders hint and error', () => {
    const wrapper = shallow(<Select error="Error" hint="Hint" />);
    expect(
      wrapper.containsMatchingElement(<ErrorMessage>Error</ErrorMessage>)
    ).toBeTruthy();
    expect(wrapper.containsMatchingElement(<Hint>Hint</Hint>)).toBeTruthy();
    wrapper.unmount();
  });
  it('sets state for selected element', () => {
    const wrapper = shallow(<Select.Item value="value">Item</Select.Item>);
    expect(
      wrapper.containsMatchingElement(<option value="value">Item</option>)
    ).toBeTruthy();
    wrapper.unmount();
  });
  it('registers default selection', () => {
    const registerInitialValue = jest.fn();
    const wrapper = mount(
      <Select name="select" registerInitialValue={registerInitialValue}>
        <Select.Item value="item" selected>
          Item
        </Select.Item>
      </Select>
    );
    expect(wrapper.state()).toEqual({ value: 'item' });
    expect(registerInitialValue).toHaveBeenCalledTimes(2);
    expect(registerInitialValue.mock.calls[1]).toEqual(['select', 'item']);
    wrapper.unmount();
  });
  it('has valid defaultProps', () => {
    expect(Select.defaultProps.valueCallback()).toBe(undefined);
    expect(Select.defaultProps.registerInitialValue()).toBe(undefined);
  });
});