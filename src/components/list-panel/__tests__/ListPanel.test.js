import React from 'react';
import { shallow } from 'enzyme';
import ListPanel from '../list-panel';

describe('ListPanel', () => {
  describe('Item', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<ListPanel.Item>Text</ListPanel.Item>);
      expect(shallowMount).toMatchSnapshot();
      expect(shallowMount.text()).toEqual('Text');
      shallowMount.unmount();
    });
    it('renders href', () => {
      const shallowMount = shallow(
        <ListPanel.Item href="/href">Text</ListPanel.Item>
      );
      expect(
        shallowMount.containsMatchingElement(
          <a className="nhsuk-list-panel__link" href="/href">
            Text
          </a>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  describe('Panel', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(
        <ListPanel.Panel label="Label">Child</ListPanel.Panel>
      );
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('renders disabled panel', () => {
      const shallowMount = shallow(
        <ListPanel.Panel label="Label" disabled>
          Text
        </ListPanel.Panel>
      );
      expect(
        shallowMount.containsMatchingElement(
          <div className="nhsuk-list-panel__box nhsuk-list-panel__box--with-label">
            <p className="nhsuk-list-panel--results-items__no-results">Text</p>
          </div>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
    it('renders backToTop link', () => {
      const shallowMount = shallow(
        <ListPanel.Panel
          backToTop
          backToTopText="text"
          backToTopHref="#top"
          label="Label"
        >
          Text
        </ListPanel.Panel>
      );
      expect(
        shallowMount.containsMatchingElement(
          <div className="nhsuk-back-to-top">
            <a className="nhsuk-back-to-top__link" href="#top">
              <svg
                className="nhsuk-icon nhsuk-icon__arrow-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" />
              </svg>
              text
            </a>
          </div>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  describe('ListPanel', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<ListPanel>Child</ListPanel>);
      expect(shallowMount).toMatchSnapshot();
      expect(shallowMount.text()).toEqual('Child');
      expect(
        shallowMount.containsMatchingElement(
          <ol className="nhsuk-list">Child</ol>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
});
