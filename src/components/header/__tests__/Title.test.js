import React from 'react';
import { shallow } from 'enzyme';
import Title from '../components/title';

describe('Header.Title', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Title>Hello</Title>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('sets long service name', () => {
    const wrapper = shallow(<Title long>Hello</Title>);
    expect(
      wrapper.find('.nhsuk-header__transactional-service-name').props()
        .className
    ).toBe(
      'nhsuk-header__transactional-service-name nhsuk-header__transactional-service-name--long'
    );
    wrapper.unmount();
  });
  it('has good defaultProps', () => {
    expect(Title.defaultProps.onClick()).toBe(undefined);
  });
});
