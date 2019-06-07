import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../components/search';

describe('Header.Search', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Search></Search>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('opens the search', () => {
    const wrapper = mount(<Search></Search>);
    expect(wrapper.find('.nhsuk-header__search-wrap').props().className).toBe(
      'nhsuk-header__search-wrap'
    );
    wrapper.find('#toggle-search').simulate('click');
    expect(wrapper.find('.nhsuk-header__search-wrap').props().className).toBe(
      'nhsuk-header__search-wrap js-show'
    );
    wrapper.find('#close-search').simulate('click');
    expect(wrapper.find('.nhsuk-header__search-wrap').props().className).toBe(
      'nhsuk-header__search-wrap'
    );
    wrapper.unmount();
  });
  it('has good defaultProps', () => {
    expect(Search.defaultProps.onSubmit()).toBe(undefined);
  });
});
