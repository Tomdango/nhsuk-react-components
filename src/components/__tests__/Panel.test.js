import React from 'react';
import { shallow, mount } from 'enzyme';
import Panel from '../panel';

describe('Panel', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<Panel>Child</Panel>);
    expect(shallowMount).toMatchSnapshot();
    expect(
      shallowMount.containsMatchingElement(
        <div className="nhsuk-panel">Child</div>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  it('renders label', () => {
    const shallowMount = shallow(<Panel label="label">Child</Panel>);
    expect(
      shallowMount.containsMatchingElement(
        <div className="nhsuk-panel-with-label">
          <h3 className="nhsuk-panel-with-label__label">label</h3>
          Child
        </div>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  it('renders grey', () => {
    const shallowMount = shallow(<Panel grey>Child</Panel>);
    expect(
      shallowMount.containsMatchingElement(
        <div className="nhsuk-panel nhsuk-panel--grey">Child</div>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });

  describe('PanelGroup', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(
        <Panel.Group>
          <h1>Child</h1>
        </Panel.Group>
      );
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('assigns correct classes', () => {
      const oneChild = mount(
        <Panel.Group>
          <h1>Child</h1>
        </Panel.Group>
      );
      const twoChildren = mount(
        <Panel.Group>
          <h1>Child</h1>
          <h1>Child</h1>
        </Panel.Group>
      );
      const threeChildren = mount(
        <Panel.Group>
          <h1>Child</h1>
          <h1>Child</h1>
          <h1>Child</h1>
        </Panel.Group>
      );
      const fourChildren = mount(
        <Panel.Group>
          <h1>Child</h1>
          <h1>Child</h1>
          <h1>Child</h1>
          <h1>Child</h1>
        </Panel.Group>
      );
      const fiveChildren = mount(
        <Panel.Group>
          <h1>Child</h1>
          <h1>Child</h1>
          <h1>Child</h1>
          <h1>Child</h1>
          <h1>Child</h1>
        </Panel.Group>
      );
      expect(
        oneChild.containsMatchingElement(
          <div className="nhsuk-grid-column-full nhsuk-panel-group__item">
            <h1>Child</h1>
          </div>
        )
      ).toBeTruthy();
      expect(
        twoChildren.containsMatchingElement(
          <div className="nhsuk-grid-column-one-half nhsuk-panel-group__item">
            <h1>Child</h1>
          </div>
        )
      ).toBeTruthy();
      expect(
        threeChildren.containsMatchingElement(
          <div className="nhsuk-grid-column-one-third nhsuk-panel-group__item">
            <h1>Child</h1>
          </div>
        )
      ).toBeTruthy();
      expect(
        fourChildren.containsMatchingElement(
          <div className="nhsuk-grid-column-one-quarter nhsuk-panel-group__item">
            <h1>Child</h1>
          </div>
        )
      ).toBeTruthy();
      expect(
        fiveChildren.containsMatchingElement(
          <div className="nhsuk-panel-group__item">
            <h1>Child</h1>
          </div>
        )
      ).toBeTruthy();
      oneChild.unmount();
      twoChildren.unmount();
      threeChildren.unmount();
      fourChildren.unmount();
      fiveChildren.unmount();
    });
  });
});
