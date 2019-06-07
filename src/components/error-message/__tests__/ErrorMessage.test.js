import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '../error-message';

describe('ErrorMessage', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<ErrorMessage>Error Message</ErrorMessage>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
});
