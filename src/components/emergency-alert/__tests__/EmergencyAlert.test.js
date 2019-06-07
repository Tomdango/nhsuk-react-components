import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import EmergencyAlert from '../emergency-alert';

describe('EmergencyAlert', () => {
  it('title matches snapshot', () => {
    const shallowMount = shallow(
      <EmergencyAlert.Title>Title</EmergencyAlert.Title>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('message matches snapshot', () => {
    const shallowMount = shallow(
      <EmergencyAlert.Message>Message</EmergencyAlert.Message>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('link matches snapshot', () => {
    const shallowMount = shallow(
      <EmergencyAlert.Link href="#">Link</EmergencyAlert.Link>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('last updated matches snapshot', () => {
    const shallowMount = shallow(
      <EmergencyAlert.LastUpdated>
        Updated 23 mins ago
      </EmergencyAlert.LastUpdated>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('all matches snapshot', () => {
    const fullMount = mount(
      <EmergencyAlert>
        <EmergencyAlert.Title>National Flu Outbreak</EmergencyAlert.Title>
        <EmergencyAlert.Message>
          There has been a national flu outbreak.
          <EmergencyAlert.Link href="https://www.nhs.uk">
            How does it affect me
          </EmergencyAlert.Link>
        </EmergencyAlert.Message>
        <EmergencyAlert.LastUpdated>
          Updated 23 mins ago
        </EmergencyAlert.LastUpdated>
      </EmergencyAlert>
    );
    expect(fullMount).toMatchSnapshot();
    fullMount.unmount();
  });
  it('handles onClick properly', () => {
    const onClick = sinon.spy();
    const shallowMount = shallow(
      <EmergencyAlert.Link onClick={onClick}>Link</EmergencyAlert.Link>
    );
    const shallowMountForAnonFunc = shallow(
      <EmergencyAlert.Link>Link</EmergencyAlert.Link>
    );

    shallowMount
      .find('.nhsuk-global-alert-link__margin-override')
      .simulate('click');
    shallowMountForAnonFunc
      .find('.nhsuk-global-alert-link__margin-override')
      .simulate('click');
    sinon.assert.called(onClick);
  });
});
