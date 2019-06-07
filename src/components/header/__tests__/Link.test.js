import React from 'react';
import { shallow } from 'enzyme';
import Link from '../components/link';

describe('Header.Link', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Link href="/target">Child</Link>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('sets mobileOnly', () => {
    const wrapper = shallow(
      <Link mobileOnly href="/target">
        Child
      </Link>
    );
    expect(wrapper.props().className).toBe(
      'nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile'
    );
    wrapper.unmount();
  });
});
