import React from 'react';
import { shallow } from 'enzyme';
import { Radios } from '../form';

describe('Radios', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Radios name="radios" />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});

describe('Radio', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Radios.Radio value="1">1</Radios.Radio>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});

describe('Divider', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Radios.Divider>Or</Radios.Divider>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
