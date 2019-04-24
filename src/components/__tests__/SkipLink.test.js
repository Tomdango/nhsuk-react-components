import React from 'react';
import { mount } from 'enzyme';
import SkipLink from '../skip-link';

describe('SkipLink', () => {
  it('matches snapshot', () => {
    const shallowMount = mount(<SkipLink />);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('adds and removes focus', () => {
    const mockHeadingElement = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      setAttribute: jest.fn(),
      focus: jest.fn(),
      removeAttribute: jest.fn()
    };
    // Add Event Listener
    expect(mockHeadingElement.addEventListener).toHaveBeenCalledTimes(0);
    const wrapper = mount(<SkipLink testHeadingElement={mockHeadingElement} />);
    expect(mockHeadingElement.addEventListener).toHaveBeenCalledTimes(1);
    expect(mockHeadingElement.addEventListener.mock.calls[0][0]).toBe('blur');

    // Event Listener Callback
    mockHeadingElement.addEventListener.mock.calls[0][1]({
      preventDefault: () => {}
    });
    expect(mockHeadingElement.removeAttribute).toHaveBeenCalledTimes(1);
    expect(mockHeadingElement.removeAttribute.mock.calls[0][0]).toBe(
      'tabIndex'
    );

    // Add Focus
    wrapper.instance().addFocus();
    expect(mockHeadingElement.setAttribute).toHaveBeenCalled();
    expect(mockHeadingElement.setAttribute.mock.calls[0][0]).toBe('tabIndex');
    expect(mockHeadingElement.setAttribute.mock.calls[0][1]).toBe('-1');
    expect(mockHeadingElement.focus).toHaveBeenCalledTimes(1);

    // Remove Focus
    wrapper.instance().removeFocus();
    expect(mockHeadingElement.removeAttribute).toHaveBeenCalled();
    expect(mockHeadingElement.removeAttribute.mock.calls[0][0]).toBe(
      'tabIndex'
    );

    // HandleSkipLink
    wrapper.instance().handleSkipLink({ preventDefault: () => {} });
    expect(mockHeadingElement.setAttribute).toHaveBeenCalledTimes(2);
    expect(mockHeadingElement.setAttribute.mock.calls[1][0]).toBe('tabIndex');
    expect(mockHeadingElement.setAttribute.mock.calls[1][1]).toBe('-1');

    // Remove Event Listener
    expect(mockHeadingElement.removeEventListener).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(mockHeadingElement.removeEventListener).toHaveBeenCalledTimes(1);
    expect(mockHeadingElement.removeEventListener.mock.calls[0][0]).toBe(
      'blur'
    );

    // Remove Event Listener Callback
    mockHeadingElement.removeEventListener.mock.calls[0][1]({
      preventDefault: () => {}
    });
    expect(mockHeadingElement.removeAttribute).toHaveBeenCalledTimes(3);
    expect(mockHeadingElement.removeAttribute.mock.calls[2][0]).toBe(
      'tabIndex'
    );
  });
  it('works without headingElement', () => {
    const wrapper = mount(<SkipLink />);
    wrapper.instance().addFocus();
    wrapper.instance().removeFocus();
    wrapper.instance().handleSkipLink({ preventDefault: () => {} });
    wrapper.unmount();
  });
});
