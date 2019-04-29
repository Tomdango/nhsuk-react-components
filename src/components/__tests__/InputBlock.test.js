import React from 'react';
import { shallow, mount } from 'enzyme';
import InputBlock from '../form/components/input-block';
import Hint from '../hint';
import Label from '../label';
import ErrorMessage from '../error-message';
import { Heading } from '../typography';

describe('InputBlock', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<InputBlock>Child</InputBlock>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('has valid defaultProps', () => {
    expect(InputBlock.defaultProps.valueCallback()).toBe(undefined);
    expect(InputBlock.defaultProps.registerInitialValue()).toBe(undefined);
  });
  it('responds to change', () => {
    const valueCallback = jest.fn();
    const wrapper = mount(
      <InputBlock valueCallback={valueCallback}>
        <InputBlock.Input name="thing" />
      </InputBlock>
    );
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'InputValue' } });
    expect(valueCallback).toHaveBeenCalled();
    expect(valueCallback.mock.calls[0][0]).toBe('thing');
    expect(valueCallback.mock.calls[0][1]).toBe('InputValue');
    wrapper.unmount();
  });
  it('renders heading', () => {
    const wrapper = shallow(<InputBlock heading="Title" headingSize="xl" />);
    expect(
      wrapper.containsMatchingElement(<Heading size="xl">Title</Heading>)
    ).toBeTruthy();
    wrapper.unmount();
  });
  describe('Input', () => {
    it('matches snapshot', () => {
      const wrapper = shallow(<InputBlock.Input name="thing" />);
      expect(wrapper).toMatchSnapshot();
      wrapper.unmount();
    });
    it('renders label, hint and error', () => {
      const wrapper = shallow(
        <InputBlock.Input
          name="thing"
          label="title"
          hint="hint"
          error="error"
        />
      );
      expect(
        wrapper.containsMatchingElement(<Label>title</Label>)
      ).toBeTruthy();
      expect(wrapper.containsMatchingElement(<Hint>hint</Hint>)).toBeTruthy();
      expect(
        wrapper.containsMatchingElement(<ErrorMessage>error</ErrorMessage>)
      ).toBeTruthy();
      wrapper.unmount();
    });
    it('changes width', () => {
      const wrapper = mount(<InputBlock.Input name="thing" width={12} />);
      expect(wrapper.find('input').props().className).toBe(
        'nhsuk-input nhsuk-input--block nhsuk-input--width-12'
      );
      wrapper.unmount();
    });
    it('has valid defaultProps', () => {
      expect(InputBlock.Input.defaultProps._handleInput()).toBe(undefined);
      expect(InputBlock.Input.defaultProps.registerInitialValue()).toBe(
        undefined
      );
    });
  });
});
