import React from 'react';
import { shallow, mount } from 'enzyme';
import { Body, Heading, List } from '../typography';

describe('Typography', () => {
  describe('Body', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<Body>Text</Body>);
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('has proper styling', () => {
      const smallBody = mount(<Body size="s">Text</Body>);
      const mediumBody = mount(<Body size="m">Text</Body>);
      const largeBody = mount(<Body size="l">Text</Body>);
      expect(
        smallBody.containsMatchingElement(<p className="nhsuk-body-s">Text</p>)
      ).toBeTruthy();
      expect(
        mediumBody.containsMatchingElement(<p className="nhsuk-body">Text</p>)
      ).toBeTruthy();
      expect(
        largeBody.containsMatchingElement(<p className="nhsuk-body-l">Text</p>)
      ).toBeTruthy();
      largeBody.unmount();
      mediumBody.unmount();
      smallBody.unmount();
    });
  });
  describe('Heading', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<Heading>Text</Heading>);
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('renders proper heading on size supplied', () => {
      const xl = shallow(<Heading size="xl">Title</Heading>);
      const l = shallow(<Heading size="l">Title</Heading>);
      const m = shallow(<Heading size="m">Title</Heading>);
      const s = shallow(<Heading size="s">Title</Heading>);
      const xs = shallow(<Heading size="xs">Title</Heading>);
      expect(
        xl.containsMatchingElement(<h1 className="nhsuk-heading-xl">Title</h1>)
      ).toBeTruthy();
      expect(
        l.containsMatchingElement(<h2 className="nhsuk-heading-l">Title</h2>)
      ).toBeTruthy();
      expect(
        m.containsMatchingElement(<h3 className="nhsuk-heading-m">Title</h3>)
      ).toBeTruthy();
      expect(
        s.containsMatchingElement(<h4 className="nhsuk-heading-s">Title</h4>)
      ).toBeTruthy();
      expect(
        xs.containsMatchingElement(<h5 className="nhsuk-heading-xs">Title</h5>)
      ).toBeTruthy();
      xl.unmount();
      l.unmount();
      m.unmount();
      s.unmount();
      xs.unmount();
    });
    it('returns null (for coverage)', () => {
      const invalidSize = shallow(<Heading size="xxl">Title</Heading>);
      expect(
        invalidSize.containsMatchingElement(
          <h1 className="nhsuk-heading-xl">Title</h1>
        )
      ).toBeFalsy();
      expect(invalidSize.getElement()).toEqual(null);
      invalidSize.unmount();
    });
  });
  describe('List', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(
        <List>
          <li>Text</li>
        </List>
      );
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('returns an ordered list', () => {
      const shallowMountNumber = shallow(
        <List type="number">
          <li>Text</li>
        </List>
      );
      expect(
        shallowMountNumber.containsMatchingElement(
          <ol className="nhsuk-list nhsuk-list--number">
            <li>Text</li>
          </ol>
        )
      ).toBeTruthy();
      shallowMountNumber.unmount();
      const shallowMountUnordered = shallow(
        <List type="bullet">
          <li>Text</li>
        </List>
      );
      expect(
        shallowMountUnordered.containsMatchingElement(
          <ul className="nhsuk-list nhsuk-list--bullet">
            <li>Text</li>
          </ul>
        )
      ).toBeTruthy();
      shallowMountUnordered.unmount();
    });
  });
});
