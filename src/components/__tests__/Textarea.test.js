import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../form/components/textarea';
import Hint from '../hint';
import ErrorMessage from '../error-message';

describe('Textarea', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Textarea />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('handles onChange', () => {
    const valueCallback = jest.fn();
    const wrapper = shallow(<Textarea valueCallback={valueCallback} />);
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'Change' } });
    expect(valueCallback).toHaveBeenCalled();
    expect(valueCallback.mock.calls[0][1]).toBe('Change');
    wrapper.unmount();
  });
  it('renders hint and error', () => {
    const wrapper = shallow(<Textarea error="Error" hint="Hint" />);
    expect(
      wrapper.containsMatchingElement(<ErrorMessage>Error</ErrorMessage>)
    ).toBeTruthy();
    expect(wrapper.containsMatchingElement(<Hint>Hint</Hint>)).toBeTruthy();
    wrapper.unmount();
  });
  it('has valid defaultProps', () => {
    expect(Textarea.defaultProps.valueCallback()).toBe(undefined);
    expect(Textarea.defaultProps.registerInitialValue()).toBe(undefined);
  });
});
