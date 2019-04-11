import React from 'react';
import { mount } from 'enzyme';
import FeedbackBanner from '../feedback-banner';

describe('FeedbackBanner', () => {
  it('matches snapshot', () => {
    const fullMount = mount(
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    expect(fullMount).toMatchSnapshot();
    fullMount.unmount();
  });
});
