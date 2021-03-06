import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Footer from '../footer';

describe('Footer', () => {
  it('matches snapshot', () => {
    const linkShallowMount = shallow(<Footer.Link>Hello</Footer.Link>);
    const footerShallowMount = shallow(
      <Footer>
        <Footer.LinkList>
          <Footer.Link>Hello</Footer.Link>
        </Footer.LinkList>
        <Footer.Copyright>MIT License</Footer.Copyright>
      </Footer>
    );
    expect(linkShallowMount).toMatchSnapshot();
    expect(footerShallowMount).toMatchSnapshot();
    linkShallowMount.unmount();
    footerShallowMount.unmount();
  });
  it('renders links properly', () => {
    const linkShallowMount = shallow(
      <Footer.Link href="test-url">Test Link</Footer.Link>
    );
    expect(
      linkShallowMount.containsMatchingElement(
        <a className="nhsuk-footer__list-item-link" href="test-url">
          Test Link
        </a>
      )
    ).toBeTruthy();
    linkShallowMount.unmount();
  });
  it('handles onclick', () => {
    const onClick = sinon.spy();
    const shallowMount = shallow(
      <Footer.Link onClick={onClick}>Error item</Footer.Link>
    );
    const shallowMountForAnonFunc = shallow(
      <Footer.Link>Error item</Footer.Link>
    );
    shallowMount.find('a').simulate('click');
    shallowMountForAnonFunc.find('a').simulate('click');
    sinon.assert.called(onClick);
    shallowMount.unmount();
  });
  it('renders copyright notice', () => {
    const shallowMount = shallow(
      <Footer.Copyright>MIT License</Footer.Copyright>
    );
    expect(shallowMount).toMatchSnapshot();
    expect(shallowMount.text()).toEqual('MIT License');
    expect(
      shallowMount.containsMatchingElement(
        <p className="nhsuk-footer__copyright"> MIT License</p>
      )
    );
    shallowMount.unmount();
  });
  it('adds hidden text when supplied links', () => {
    const mountedFooterWithLinks = mount(
      <Footer>
        <Footer.LinkList>
          <Footer.Link>Test Link</Footer.Link>
        </Footer.LinkList>
        <Footer.Copyright>MIT License</Footer.Copyright>
      </Footer>
    );
    const mountedFooterWithoutLinks = mount(
      <Footer>
        <Footer.Copyright>MIT License</Footer.Copyright>
      </Footer>
    );
    expect(
      mountedFooterWithLinks.containsMatchingElement(
        <h2 className="nhsuk-u-visually-hidden">Support links</h2>
      )
    ).toBeTruthy();
    expect(
      mountedFooterWithoutLinks.containsMatchingElement(
        <h2 className="nhsuk-u-visually-hidden">Support links</h2>
      )
    ).toBeFalsy();
    mountedFooterWithLinks.unmount();
    mountedFooterWithoutLinks.unmount();
  });
});
