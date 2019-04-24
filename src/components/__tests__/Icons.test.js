import React from 'react';
import { shallow } from 'enzyme';
import * as icons from '../icons';

describe('Icons', () => {
  it('all icons match snapshot', () => {
    Object.values(icons).forEach(Icon => {
      const shallowMount = shallow(<Icon />);
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
  });
});
