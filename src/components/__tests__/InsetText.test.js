import React from 'react';
import { shallow } from 'enzyme';
import InsetText from '../inset-text';

describe('InsetText', () => {
  it('matches snapshot and element', () => {
    const shallowMount = shallow(<InsetText>Text</InsetText>);
    expect(shallowMount.text()).toEqual('Information: Text');
    expect(
      shallowMount.containsMatchingElement(
        <div className="nhsuk-inset-text">
          <span className="nhsuk-u-visually-hidden">Information: </span>
          Text
        </div>
      )
    ).toBeTruthy();
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
});
