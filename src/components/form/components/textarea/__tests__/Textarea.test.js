import React from 'react';
import { shallow, mount } from 'enzyme';
import Textarea from '..';
import FormContext from '../../../FormContext';
import Label from '../../../../label';
import Hint from '../../../../hint';
import ErrorMessage from '../../../../error-message';

describe('Textarea', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Textarea />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('registers component', () => {
    const contextValue = {
      registerComponent: jest.fn(),
      passBackError: jest.fn()
    };
    const wrapper = mount(
      <FormContext.Provider value={contextValue}>
        <Textarea name="textarea" />
      </FormContext.Provider>
    );
    expect(contextValue.registerComponent).toBeCalled();
    expect(contextValue.passBackError).toBeCalled();
    expect(contextValue.registerComponent).toBeCalledWith('textarea', '');
    expect(contextValue.passBackError).toBeCalledWith('textarea', false, '');
    wrapper.unmount();
  });
  it('passes back initial error and value', () => {
    const contextValue = {
      registerComponent: jest.fn(),
      passBackError: jest.fn()
    };
    const wrapper = mount(
      <FormContext.Provider value={contextValue}>
        <Textarea name="textarea" error="error" value="initial" />
      </FormContext.Provider>
    );
    expect(contextValue.registerComponent).toBeCalledWith(
      'textarea',
      'initial'
    );
    expect(contextValue.passBackError).toBeCalledWith(
      'textarea',
      true,
      'error'
    );
    wrapper.unmount();
  });
  it('fires on change', () => {
    const contextValue = {
      passBackError: jest.fn(),
      updateFormState: jest.fn()
    };
    const wrapper = mount(
      <FormContext.Provider value={contextValue}>
        <Textarea name="textarea" />
      </FormContext.Provider>
    );
    wrapper.find('textarea').simulate('change', { target: { value: 'input' } });
    expect(contextValue.updateFormState).toBeCalledWith('textarea', 'input');
    expect(contextValue.passBackError).toHaveBeenCalledTimes(2);
    expect(contextValue.passBackError.mock.calls).toEqual([
      ['textarea', false, ''],
      ['textarea', false, '']
    ]);
    wrapper.unmount();
  });
  it('renders label, hint and error', () => {
    const wrapper = mount(
      <Textarea
        name="textarea"
        label="label"
        labelHtmlFor="textarea"
        hint="hint"
        error="error"
      />
    );
    expect(
      wrapper.containsMatchingElement(<Label htmlFor="textarea">label</Label>)
    ).toBeTruthy();
    expect(wrapper.containsMatchingElement(<Hint>hint</Hint>)).toBeTruthy();
    expect(
      wrapper.containsMatchingElement(<ErrorMessage>error</ErrorMessage>)
    ).toBeTruthy();
    wrapper.unmount();
  });
});
