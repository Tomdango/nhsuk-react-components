import React from 'react';
import { shallow } from 'enzyme';
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
  it('has good defaultProps', () => {
    expect(Promo.defaultProps.onClick()).toBe(undefined);
  });
});
