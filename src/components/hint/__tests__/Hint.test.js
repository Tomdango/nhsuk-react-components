import React from 'react';
import { shallow } from 'enzyme';
import Hint from '../hint';

describe('Hint', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Hint>Hint</Hint>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
