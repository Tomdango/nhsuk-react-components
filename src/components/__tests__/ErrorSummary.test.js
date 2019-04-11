import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import ErrorSummary from '../error-summary';

describe('ErrorSummary', () => {
  it('item matches snapshot', () => {
    const shallowMount = shallow(
      <ErrorSummary.ErrorItem href="#">Error item</ErrorSummary.ErrorItem>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('handles onClick properly', () => {
    const onClick = sinon.spy();
    const shallowMount = shallow(
      <ErrorSummary.ErrorItem onClick={onClick}>
        Error item
      </ErrorSummary.ErrorItem>
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
        <ErrorSummary.ErrorItem href="#example-error-1">
          Link to error with explanation
        </ErrorSummary.ErrorItem>
        <ErrorSummary.ErrorItem href="#example-error-2">
          Link to error with explanation
        </ErrorSummary.ErrorItem>
      </ErrorSummary>
    );
    expect(mountedElement).toMatchSnapshot();
    mountedElement.unmount();
  });
  it("doesn't render description or title when not provided", () => {
    const mountedElement = mount(
      <ErrorSummary>
        <ErrorSummary.ErrorItem href="#example-error-1">
          Link to error with explanation
        </ErrorSummary.ErrorItem>
        <ErrorSummary.ErrorItem href="#example-error-2">
          Link to error with explanation
        </ErrorSummary.ErrorItem>
      </ErrorSummary>
    );
    expect(mountedElement).toMatchSnapshot();
    mountedElement.unmount();
  });
});
