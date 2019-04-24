import React from 'react';
import { shallow } from 'enzyme';
import ReviewDate from '../review-date';

describe('ReviewDate', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(
      <ReviewDate
        lastReviewDate="12 February 2016"
        nextReviewDate="1 February 2019"
      />
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('matches expected text', () => {
    const shallowMount = shallow(
      <ReviewDate
        lastReviewDate="12 February 2016"
        nextReviewDate="1 February 2019"
      />
    );
    expect(shallowMount.text()).toEqual(
      'Page last reviewed: 12 February 2016Next review due: 1 February 2019'
    );
    shallowMount.unmount();
  });
  it('conditionally renders', () => {
    const lastReview = shallow(
      <ReviewDate lastReviewDate="12 February 2016" />
    );
    const nextReview = shallow(<ReviewDate nextReviewDate="1 February 2019" />);
    expect(lastReview.text()).toEqual('Page last reviewed: 12 February 2016');
    expect(nextReview.text()).toEqual('Next review due: 1 February 2019');
    lastReview.unmount();
    nextReview.unmount();
  });
  it('changes default texts', () => {
    const shallowMount = shallow(
      <ReviewDate
        lastReviewDate="12 February 2016"
        nextReviewDate="1 February 2019"
        lastReviewText="Last:"
        nextReviewText="Next:"
      />
    );
    expect(shallowMount.text()).toEqual(
      'Last: 12 February 2016Next: 1 February 2019'
    );
    shallowMount.unmount();
  });
});
