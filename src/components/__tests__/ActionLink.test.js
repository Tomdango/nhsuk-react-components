import React from 'react';
import { shallow, mount } from 'enzyme';
import ActionLink from '../action-link';

describe('ActionLink', () => {
  it('matches the snapshot', () => {
    const shallowMount = shallow(<ActionLink>Test</ActionLink>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('sets props on openInNewTab', () => {
    const currentWindow = mount(<ActionLink>Test</ActionLink>);
    const newTab = mount(<ActionLink openInNewWindow>Test</ActionLink>);
    const currentWindowProps = currentWindow
      .find('.nhsuk-action-link__link')
      .props();
    const newTabProps = newTab.find('.nhsuk-action-link__link').props();

    expect(newTabProps.rel).toBe('noreferrer noopener');
    expect(newTabProps.target).toBe('_blank');
    expect(currentWindowProps.rel).toBe('');
    expect(currentWindowProps.target).toBe('');
  });
});
