import React from 'react';
import { shallow } from 'enzyme';
import Promo from '../promo';

describe('Promo.Heading', () => {
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
