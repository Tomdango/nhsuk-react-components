import React from 'react';
import { shallow } from 'enzyme';
import Content from '../components/content';

describe('Header.Content', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Content>Child</Content>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
