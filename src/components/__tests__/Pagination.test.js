import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../pagination';

describe('Pagination', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(
      <Pagination
        previousUrl="/section/treatments"
        previousPage="Treatments"
        nextUrl="/section/symptoms"
        nextPage="Symptoms"
      />
    );
    expect(shallowMount.text()).toEqual('Previous:TreatmentsNext:Symptoms');
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('conditionally renders', () => {
    const previous = shallow(
      <Pagination previousUrl="/section/treatments" previousPage="Treatments" />
    );
    const next = shallow(
      <Pagination nextUrl="/section/symptoms" nextPage="Symptoms" />
    );
    const both = shallow(
      <Pagination
        previousUrl="/section/treatments"
        previousPage="Treatments"
        nextUrl="/section/symptoms"
        nextPage="Symptoms"
      />
    );
    expect(both.text()).toEqual('Previous:TreatmentsNext:Symptoms');
    expect(previous.text()).toEqual('Previous:Treatments');
    expect(next.text()).toEqual('Next:Symptoms');
    previous.unmount();
    next.unmount();
    both.unmount();
  });
});
