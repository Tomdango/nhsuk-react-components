import React from 'react';
import { shallow, mount } from 'enzyme';
import Promo from '../promo';

describe('Promo', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<Promo>Child</Promo>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('adds small class', () => {
    const shallowMount = shallow(
      <Promo href="/test-href" small>
        Child
      </Promo>
    );
    expect(
      shallowMount.containsMatchingElement(
        <div className="nhsuk-promo nhsuk-promo--small">
          <a className="nhsuk-promo__link-wrapper" href="/test-href">
            <div className="nhsuk-promo__content">Child</div>
          </a>
        </div>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  describe('heading', () => {
    it('matches snapshot and element', () => {
      const shallowMount = shallow(<Promo.Heading>Hello</Promo.Heading>);
      expect(
        shallowMount.containsMatchingElement(
          <h3 className="nhsuk-promo__heading">Hello</h3>
        )
      ).toBeTruthy();
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
  });
  describe('content', () => {
    it('matches snapshot and element', () => {
      const shallowMount = shallow(<Promo.Content>Hello</Promo.Content>);
      expect(
        shallowMount.containsMatchingElement(
          <p className="nhsuk-promo__description">Hello</p>
        )
      ).toBeTruthy();
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
  });
  it('renders with and without image', () => {
    const shallowMountWithImg = shallow(
      <Promo imgUrl="#" imgAlt="alt">
        Child
      </Promo>
    );
    const shallowMountWithoutImg = shallow(<Promo>Child</Promo>);
    expect(
      shallowMountWithImg.containsMatchingElement(
        <img className="nhsuk-promo__img" src="#" alt="alt" />
      )
    ).toBeTruthy();
    expect(
      shallowMountWithoutImg.containsMatchingElement(
        <img className="nhsuk-promo__img" src="#" alt="alt" />
      )
    ).toBeFalsy();
  });
});

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
