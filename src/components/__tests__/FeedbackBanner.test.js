import React from 'react';
import { mount, shallow } from 'enzyme';
import { tupleTypeAnnotation } from '@babel/types';
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
  it('timeout to have been set', done => {
    const fullMount = mount(
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
        timeout={500}
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    expect(fullMount.state()).toEqual({
      shown: false,
      jsInView: false
    });
    setTimeout(() => {
      expect(fullMount.state()).toEqual({
        shown: true,
        jsInView: false
      });
      done();
    }, 600);
  });
  it('unsticks banner', done => {
    const wrapper = mount(
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
        timeout={500}
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    expect(wrapper.instance().timer).toBe(false);
    wrapper.instance().unstickBanner({ useMockFooter: true });
    expect(wrapper.instance().timer).not.toBe(false);
    setTimeout(() => {
      expect(wrapper.state()).toEqual({ jsInView: true, shown: true });
      wrapper.unmount();
      done();
    }, 600);
  });
  it('toggles banner', () => {
    const wrapper = mount(
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
        timeout={500}
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    expect(wrapper.state()).toEqual({
      shown: false,
      jsInView: false
    });
    wrapper.instance().toggleBanner();
    expect(wrapper.state()).toEqual({
      shown: true,
      jsInView: false
    });
    wrapper.instance().toggleBanner();
    expect(wrapper.state()).toEqual({
      shown: false,
      jsInView: false
    });
    wrapper.instance().toggleBanner(false);
    expect(wrapper.state()).toEqual({
      shown: false,
      jsInView: false
    });
    wrapper.unmount();
  });
  it('clears timeout', () => {
    const wrapper = mount(
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
        timeout={500}
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    expect(wrapper.instance().timer).toBe(false);
    wrapper.instance().unstickBanner({ useMockFooter: true });
    const initialTimer = wrapper.instance().timer;
    expect(initialTimer).not.toBe(false);
    wrapper.instance().unstickBanner({ useMockFooter: true });
    const secondTimer = wrapper.instance().timer;
    expect(secondTimer).not.toBe(initialTimer);
    wrapper.unmount();
  });
  it('sets jsInView state', done => {
    const wrapper = mount(
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
        timeout={500}
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    wrapper
      .instance()
      .unstickBanner({ useMockFooter: true, forceScrolledIntoView: false });
    setTimeout(() => {
      expect(wrapper.state()).toEqual({
        shown: true,
        jsInView: false
      });
      done();
    }, 600);
  });
  it('fires toggleBanner(false)', done => {
    const wrapper = mount(
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
        timeout={0}
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    setTimeout(() => {
      expect(wrapper.state()).toEqual({
        shown: true,
        jsInView: false
      });
      wrapper.find('#nhsuk-feedback-banner-close').simulate('click');
      expect(wrapper.state()).toEqual({
        shown: false,
        jsInView: false
      });
      done();
    }, 100);
  });
  it('renders label', () => {
    const wrapper = shallow(
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
        href="/href"
        timeout={0}
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    const wrapperNoLabel = shallow(
      <FeedbackBanner title="Help us make the NHS website better" timeout={0}>
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    expect(
      wrapper.containsMatchingElement(
        <a href="/href" className="nhsuk-u-nowrap nhsuk-feedback-banner__label">
          Answer the survey
        </a>
      )
    ).toBeTruthy();
    expect(
      wrapperNoLabel.containsMatchingElement(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="nhsuk-u-nowrap nhsuk-feedback-banner__label">
          Answer the survey
        </a>
      )
    ).toBeFalsy();
  });
  it('works with defaultProps', () => {
    expect(FeedbackBanner.defaultProps.onClick()).toEqual();
  });
  it('works with non-mocked out elements', () => {
    const wrapper = shallow(
      <FeedbackBanner title="Help us make the NHS website better" timeout={0}>
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    wrapper.instance().unstickBanner();
  });
  it('forces didScroll false', done => {
    const wrapper = shallow(
      <FeedbackBanner title="Help us make the NHS website better" timeout={0}>
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    );
    wrapper.instance().unstickBanner({
      forceDidScroll: false,
      useMockFooter: true
    });
    setTimeout(() => {
      wrapper.instance().unstickBanner({
        forceDidScroll: true,
        useMockFooter: true
      });
      setTimeout(() => {
        done();
      }, 600);
    }, 600);
  });
});
