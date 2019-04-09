import React from 'react';
import { shallow } from 'enzyme';
import BackLink from '../back-link';

describe('BackLink', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<BackLink />);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
});
