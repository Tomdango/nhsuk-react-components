import React from 'react';
import { shallow } from 'enzyme';
import Checkboxes from '..';

describe('Checkboxes', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Checkboxes></Checkboxes>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
