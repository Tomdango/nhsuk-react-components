import React from 'react';
import { mount } from 'enzyme';
import CareCard from '../care-card';

describe('CareCard', () => {
  it('matches snapshot', () => {
    const nonUrgent = mount(
      <CareCard heading="TestHeading" type="non-urgent">
        Content
      </CareCard>
    );
    const urgent = mount(
      <CareCard heading="TestHeading" type="urgent">
        Content
      </CareCard>
    );
    const immediate = mount(
      <CareCard heading="TestHeading" type="immediate">
        Content
      </CareCard>
    );
    const incorrect = mount(
      <CareCard heading="TestHeading" type="incorrect">
        Content
      </CareCard>
    );
    const disableHiddenText = mount(
      <CareCard disableHiddenText heading="TestHeading" type="immediate">
        Content
      </CareCard>
    );
    const hiddenTextCard = mount(
      <CareCard hiddenText="hello" type="immediate">
        Content
      </CareCard>
    );
    expect(nonUrgent).toMatchSnapshot();
    expect(urgent).toMatchSnapshot();
    expect(immediate).toMatchSnapshot();
    expect(incorrect).toMatchSnapshot();
    expect(disableHiddenText).toMatchSnapshot();
    expect(hiddenTextCard).toMatchSnapshot();
    nonUrgent.unmount();
    urgent.unmount();
    immediate.unmount();
    incorrect.unmount();
    disableHiddenText.unmount();
    hiddenTextCard.unmount();
  });
});
