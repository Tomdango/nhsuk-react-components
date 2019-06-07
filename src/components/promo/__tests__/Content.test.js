import React from 'react';
import { shallow } from 'enzyme';
import Promo from '../promo';

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
