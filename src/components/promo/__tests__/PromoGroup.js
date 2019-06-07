import React from 'react';
import { shallow, mount } from 'enzyme';
import Promo from '../promo';

describe('PromoGroup', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(
      <Promo.Group>
        <h1>Child</h1>
      </Promo.Group>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('assigns correct classes', () => {
    const oneChild = mount(
      <Promo.Group>
        <h1>Child</h1>
      </Promo.Group>
    );
    const twoChildren = mount(
      <Promo.Group>
        <h1>Child</h1>
        <h1>Child</h1>
      </Promo.Group>
    );
    const threeChildren = mount(
      <Promo.Group>
        <h1>Child</h1>
        <h1>Child</h1>
        <h1>Child</h1>
      </Promo.Group>
    );
    const fourChildren = mount(
      <Promo.Group>
        <h1>Child</h1>
        <h1>Child</h1>
        <h1>Child</h1>
        <h1>Child</h1>
      </Promo.Group>
    );
    const fiveChildren = mount(
      <Promo.Group>
        <h1>Child</h1>
        <h1>Child</h1>
        <h1>Child</h1>
        <h1>Child</h1>
        <h1>Child</h1>
      </Promo.Group>
    );
    expect(
      oneChild.containsMatchingElement(
        <div className="nhsuk-grid-column-full nhsuk-promo-group__item">
          <h1>Child</h1>
        </div>
      )
    ).toBeTruthy();
    expect(
      twoChildren.containsMatchingElement(
        <div className="nhsuk-grid-column-one-half nhsuk-promo-group__item">
          <h1>Child</h1>
        </div>
      )
    ).toBeTruthy();
    expect(
      threeChildren.containsMatchingElement(
        <div className="nhsuk-grid-column-one-third nhsuk-promo-group__item">
          <h1>Child</h1>
        </div>
      )
    ).toBeTruthy();
    expect(
      fourChildren.containsMatchingElement(
        <div className="nhsuk-grid-column-one-quarter nhsuk-promo-group__item">
          <h1>Child</h1>
        </div>
      )
    ).toBeTruthy();
    expect(
      fiveChildren.containsMatchingElement(
        <div className="nhsuk-promo-group__item">
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
