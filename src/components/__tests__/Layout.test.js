import React from 'react';
import { shallow } from 'enzyme';
import { Container, MainWrapper, ReadingWidth, Row } from '../layout';

describe('Layout', () => {
  describe('Container', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<Container>Child</Container>);
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('renders a fluid container', () => {
      const standard = shallow(<Container>Child</Container>);
      const fluid = shallow(<Container fluid>Child</Container>);
      expect(
        standard.containsMatchingElement(
          <div className="nhsuk-width-container">Child</div>
        )
      ).toBeTruthy();
      expect(
        fluid.containsMatchingElement(
          <div className="nhsuk-width-container-fluid">Child</div>
        )
      ).toBeTruthy();
      standard.unmount();
      fluid.unmount();
    });
  });
  describe('MainWrapper', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<MainWrapper>Child</MainWrapper>);
      expect(shallowMount).toMatchSnapshot();
      expect(
        shallowMount.containsMatchingElement(
          <main className="nhsuk-main-wrapper">Child</main>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  describe('ReadingWidth', () => {
    it('matches snapshot and element', () => {
      const shallowMount = shallow(<ReadingWidth>Text</ReadingWidth>);
      expect(
        shallowMount.containsMatchingElement(
          <div className="nhsuk-u-reading-width">Text</div>
        )
      ).toBeTruthy();
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
  });
  describe('Row', () => {
    it('matches snapshot and element', () => {
      const shallowMount = shallow(<Row>Child</Row>);
      expect(shallowMount).toMatchSnapshot();
      expect(
        shallowMount.containsMatchingElement(
          <div className="nhsuk-grid-row">Child</div>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  describe('Column', () => {
    it('matches snapshot and element', () => {
      const shallowMount = shallow(<Row.Column width="full">Child</Row.Column>);
      expect(shallowMount).toMatchSnapshot();
      expect(
        shallowMount.containsMatchingElement(
          <div className="nhsuk-grid-column-full">Child</div>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
    it('forces layout', () => {
      const shallowMount = shallow(
        <Row.Column width="full" forceLayout>
          Child
        </Row.Column>
      );
      expect(shallowMount).toMatchSnapshot();
      expect(
        shallowMount.containsMatchingElement(
          <div className="nhsuk-grid-column-full nhsuk-u-full">Child</div>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
    it('works with tablet width', () => {
      const shallowMount = shallow(
        <Row.Column width="full" tabletWidth="one-half">
          Child
        </Row.Column>
      );
      expect(shallowMount).toMatchSnapshot();
      expect(
        shallowMount.containsMatchingElement(
          <div className="nhsuk-grid-column-full nhsuk-u-one-half-tablet">
            Child
          </div>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
});
