import React from 'react';
import { shallow } from 'enzyme';
import SummaryList from '../summary-list';

describe('SummaryList', () => {
  describe('Row', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<SummaryList.Row>Test</SummaryList.Row>);
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('handles onClick', () => {
      const action = {
        text: 'Hello',
        visuallyHiddenText: 'Vishidden',
        onClick: jest.fn()
      };
      const wrapper = shallow(
        <SummaryList.Row action={action}>Test</SummaryList.Row>
      );

      wrapper.find('a').simulate('click');
      expect(action.onClick).toHaveBeenCalled();
      wrapper.unmount();
    });
    it('renders key and action', () => {
      const shallowMount = shallow(
        <SummaryList.Row
          rowKey="key"
          action={{
            text: 'Hello',
            href: '/action',
            visuallyHiddenText: 'VisHidden'
          }}
        >
          Test
        </SummaryList.Row>
      );
      expect(
        shallowMount.containsMatchingElement(
          <span className="nhsuk-u-visually-hidden">VisHidden</span>
        )
      ).toBeTruthy();
      expect(
        shallowMount.containsMatchingElement(
          <dd className="nhsuk-summary-list__actions">
            <a href="/action">
              Hello
              <span className="nhsuk-u-visually-hidden">VisHidden</span>
            </a>
          </dd>
        )
      ).toBeTruthy();
      expect(
        shallowMount.containsMatchingElement(
          <dt className="nhsuk-summary-list__key">key</dt>
        )
      ).toBeTruthy();
      expect(
        shallowMount.containsMatchingElement(
          <dd className="nhsuk-summary-list__value">Test</dd>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  it('matches snapshot', () => {
    const shallowMount = shallow(<SummaryList>Child</SummaryList>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
});
