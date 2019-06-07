import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import ErrorSummary from '../error-summary';

describe('ErrorSummary', () => {
  it('item matches snapshot', () => {
    const shallowMount = shallow(
      <ErrorSummary.Item href="#">Error item</ErrorSummary.Item>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('handles onClick properly', () => {
    const onClick = sinon.spy();
    const shallowMount = shallow(
      <ErrorSummary.Item onClick={onClick}>Error item</ErrorSummary.Item>
    );
    shallowMount.find('a').simulate('click');
    sinon.assert.called(onClick);
    shallowMount.unmount();
  });
  it('all matches snapshot', () => {
    const mountedElement = mount(
      <ErrorSummary
        title="This is a problem"
        description="Optional description of the errors and how to correct them"
      >
        <ErrorSummary.Item href="#example-error-1">
          Link to error with explanation
        </ErrorSummary.Item>
        <ErrorSummary.Item href="#example-error-2">
          Link to error with explanation
        </ErrorSummary.Item>
      </ErrorSummary>
    );
    expect(mountedElement).toMatchSnapshot();
    mountedElement.unmount();
  });
  it("doesn't render description or title when not provided", () => {
    const mountedElement = mount(
      <ErrorSummary>
        <ErrorSummary.Item href="#example-error-1">
          Link to error with explanation
        </ErrorSummary.Item>
        <ErrorSummary.Item href="#example-error-2">
          Link to error with explanation
        </ErrorSummary.Item>
      </ErrorSummary>
    );
    expect(mountedElement).toMatchSnapshot();
    mountedElement.unmount();
  });
  it('responds to onClick', () => {
    const clickFn = jest.fn();
    const wrapper = mount(
      <ErrorSummary>
        <ErrorSummary.Item onClick={clickFn}>Item</ErrorSummary.Item>
      </ErrorSummary>
    );
    const wrapperTest = mount(
      <ErrorSummary>
        <ErrorSummary.Item>Item</ErrorSummary.Item>
      </ErrorSummary>
    );
    wrapper.find('a').simulate('click');
    wrapperTest.find('a').simulate('click');
    expect(clickFn).toHaveBeenCalled();
    wrapper.unmount();
    wrapperTest.unmount();
  });
});
