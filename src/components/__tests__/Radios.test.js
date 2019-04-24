import React from 'react';
import { mount, shallow } from 'enzyme';
import Radios from '../form/components/radios';
import ErrorMessage from '../error-message';
import Hint from '../hint';

describe('Input', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Radios />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('handles onChange', () => {
    const valueCallback = jest.fn();
    const wrapper = mount(
      <Radios name="radio" valueCallback={valueCallback}>
        <Radios.Radio value="Change">Radio</Radios.Radio>
      </Radios>
    );
    wrapper.find('input').simulate('click');
    expect(valueCallback).toHaveBeenCalled();
    expect(valueCallback.mock.calls[0][1]).toBe('Change');
    wrapper.unmount();
  });
  it('renders hint on radio', () => {
    const wrapper = shallow(
      <Radios.Radio hint="hint" value="value">
        Value
      </Radios.Radio>
    );
    expect(
      wrapper.containsMatchingElement(
        <Hint className="nhsuk-radios__hint">hint</Hint>
      )
    ).toBeTruthy();
    wrapper.unmount();
  });
  it('renders hint and error', () => {
    const wrapper = shallow(<Radios error="Error" hint="Hint" />);
    expect(
      wrapper.containsMatchingElement(<ErrorMessage>Error</ErrorMessage>)
    ).toBeTruthy();
    expect(wrapper.containsMatchingElement(<Hint>Hint</Hint>)).toBeTruthy();
    wrapper.unmount();
  });
  it('renders divider', () => {
    const wrapper = shallow(<Radios.Divider>Or</Radios.Divider>);
    expect(
      wrapper.containsMatchingElement(
        <div className="nhsuk-radios__divider">Or</div>
      )
    );
    wrapper.unmount();
  });
  it('passes through normal children', () => {
    const wrapper = mount(
      <Radios>
        <h1>H1</h1>
        <Radios.Radio value="value">Value</Radios.Radio>
      </Radios>
    );
    expect(wrapper.containsMatchingElement(<h1>H1</h1>)).toBeTruthy();
    wrapper.unmount();
  });
  it('renders as inline', () => {
    const wrapper = shallow(
      <Radios inline>
        <h1>H1</h1>
      </Radios>
    );
    expect(wrapper.find('div').props().className).toBe(
      'nhsuk-radios nhsuk-radios--inline'
    );
    wrapper.unmount();
  });
  it('has valid defaultProps', () => {
    expect(Radios.defaultProps.valueCallback()).toBe(undefined);
    expect(Radios.defaultProps.registerInitialValue()).toBe(undefined);
    expect(Radios.Radio.defaultProps._onClick()).toBe(undefined);
  });
});
