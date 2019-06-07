import React from 'react';
import { mount } from 'enzyme';
import Pagination from '../pagination';

describe('Pagination', () => {
  it('matches snapshot', () => {
    const shallowMount = mount(
      <Pagination>
        <Pagination.Previous href="/section/treatments">
          Treatments
        </Pagination.Previous>
        <Pagination.Next href="/section/symptoms">Symptoms</Pagination.Next>
      </Pagination>
    );
    expect(shallowMount.text()).toEqual('Previous:TreatmentsNext:Symptoms');
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('conditionally renders', () => {
    const previous = mount(
      <Pagination>
        <Pagination.Previous href="/section/treatments">
          Treatments
        </Pagination.Previous>
      </Pagination>
    );
    const next = mount(
      <Pagination>
        <Pagination.Next href="/section/symptoms">Symptoms</Pagination.Next>
      </Pagination>
    );
    const both = mount(
      <Pagination>
        <Pagination.Previous href="/section/treatments">
          Treatments
        </Pagination.Previous>
        <Pagination.Next href="/section/symptoms">Symptoms</Pagination.Next>
      </Pagination>
    );
    expect(both.text()).toEqual('Previous:TreatmentsNext:Symptoms');
    expect(previous.text()).toEqual('Previous:Treatments');
    expect(next.text()).toEqual('Next:Symptoms');
    previous.unmount();
    next.unmount();
    both.unmount();
  });
});
