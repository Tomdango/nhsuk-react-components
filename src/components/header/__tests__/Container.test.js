import React from 'react';
import { shallow } from 'enzyme';
import Container from '../components/container';

describe('Header.Container', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Container>Child</Container>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
