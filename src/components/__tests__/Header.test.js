import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../header';
import Logo from '../header/components/logo';
import Search from '../header/components/search';

describe('Header', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('has valid defaultProps', () => {
    expect(Header.defaultProps.onSearch()).toBe(undefined);
    expect(Header.Link.defaultProps.onClick()).toBe(undefined);
  });
  it('handles search', () => {
    const onSearch = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = mount(<Header withSearch onSearch={onSearch} />);
    const wrapperForAnonFunc = mount(<Header withSearch />);
    wrapper.find('input').simulate('change', {
      target: { value: 'Inputted Value' }
    });
    wrapper.find('form').simulate('submit', { preventDefault });
    wrapperForAnonFunc.find('form').simulate('submit', { preventDefault });
    expect(onSearch).toHaveBeenCalled();
    expect(onSearch.mock.calls[0][0]).toBe('Inputted Value');
    wrapper.unmount();
  });
  it('toggles menu', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(
      <Header withNavigation>
        <Header.Link href="/" mobileOnly>
          Home
        </Header.Link>
        <Header.Link href="/conditions">Conditions</Header.Link>
      </Header>
    );
    expect(wrapper.state()).toEqual({
      expanded: false,
      searchToggle: false
    });
    wrapper.find('#toggle-menu').simulate('click', { preventDefault });
    expect(wrapper.state()).toEqual({
      expanded: true,
      searchToggle: false
    });
    wrapper.instance().toggleMenu({ preventDefault: () => {} });
    expect(wrapper.state()).toEqual({
      expanded: false,
      searchToggle: false
    });
    wrapper.unmount();
  });
  it('handles onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Header.Link onClick={onClick} />);
  });
  it('toggles search', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(<Header withSearch />);
    expect(wrapper.state()).toEqual({
      expanded: false,
      searchToggle: false
    });
    wrapper.find('#toggle-search').simulate('click', { preventDefault });
    expect(wrapper.state()).toEqual({
      expanded: false,
      searchToggle: true
    });
    wrapper.instance().toggleSearch();
    expect(wrapper.state()).toEqual({
      expanded: false,
      searchToggle: false
    });
    wrapper.unmount();
  });
  it('handles search', () => {
    const onSearch = jest.fn();
    const wrapper = mount(<Header onSearch={onSearch} />);
    wrapper.instance().handleSearch('test');
    expect(onSearch).toHaveBeenCalled();
    expect(onSearch.mock.calls[0][0]).toBe('test');
  });
  it('handles longServiceName', () => {
    const wrapper = mount(
      <Header
        transactional
        longServiceName
        serviceName="service"
        serviceNameUrl="/service"
      />
    );
    expect(
      wrapper.containsMatchingElement(
        <div className="nhsuk-header__transactional-service-name nhsuk-header__transactional-service-name--long">
          <a
            className="nhsuk-header__transactional-service-name--link"
            href="/service"
          >
            service
          </a>
        </div>
      )
    ).toBeTruthy();
    wrapper.unmount();
  });
});

describe('Transactional', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <Header
        transactional
        serviceName="Service"
        serviceNameUrl="/url"
        withSearch
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper.containsMatchingElement(
        <div className="nhsuk-header__transactional-service-name ">
          <a
            className="nhsuk-header__transactional-service-name--link"
            href="/url"
          >
            Service
          </a>
        </div>
      )
    ).toBeTruthy();
  });
});

describe('Logo', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<Logo />);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('removes white logo class', () => {
    const shallowMount = shallow(<Logo whiteLogo={false} />);
    expect(
      shallowMount.containsMatchingElement(
        <svg
          className="nhsuk-logo "
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
          focusable="false"
          viewBox="0 0 40 16"
        >
          <path fill="#fff" d="M0 0h40v16H0z" />
          <path
            fill="#005eb8"
            d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"
          />
          <image src="https://assets.nhs.uk/images/nhs-logo.png" xlinkHref="" />
        </svg>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
});

describe('Search', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<Search />);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('toggles search', () => {
    const shallowMount = shallow(<Search />);
    expect(shallowMount.state()).toEqual({
      searchToggle: false,
      currentSearch: ''
    });

    shallowMount.instance().handleSearchToggle();
    expect(shallowMount.state()).toEqual({
      searchToggle: true,
      currentSearch: ''
    });
    shallowMount.unmount();
  });
  it('handles input', () => {
    const shallowMount = shallow(<Search />);
    shallowMount.find('input').simulate('change', {
      target: { value: 'Inputted Value' }
    });
    expect(shallowMount.state()).toEqual({
      searchToggle: false,
      currentSearch: 'Inputted Value'
    });
    shallowMount.unmount();
  });
  it('handles onSubmit', () => {
    const onSubmit = jest.fn();
    const preventDefault = jest.fn();
    const shallowMount = shallow(<Search onSubmit={onSubmit} />);
    const shallowMountForAnonFunc = shallow(<Search />);
    shallowMount.find('input').simulate('change', {
      target: { value: 'Inputted Value' }
    });
    shallowMountForAnonFunc.find('input').simulate('change', {
      target: { value: 'Inputted Value' }
    });

    shallowMount.find('form').simulate('submit', { preventDefault });
    shallowMountForAnonFunc.find('form').simulate('submit', { preventDefault });
    expect(onSubmit).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toBe('Inputted Value');
    shallowMount.unmount();
  });
});
