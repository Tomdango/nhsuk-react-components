import React from 'react';
import { shallow, mount } from 'enzyme';
import Hero from '../hero';

describe('Hero', () => {
  describe('Heading', () => {
    it('matches snapshot and element', () => {
      const shallowMount = shallow(<Hero.Heading>Heading</Hero.Heading>);
      expect(shallowMount).toMatchSnapshot();
      expect(
        shallowMount.containsMatchingElement(
          <h1 className="nhsuk-u-margin-bottom-3">Heading</h1>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  describe('Content', () => {
    it('matches snapshot and element', () => {
      const shallowMount = shallow(<Hero.Content>Content</Hero.Content>);
      expect(shallowMount).toMatchSnapshot();
      expect(
        shallowMount.containsMatchingElement(
          <p className="nhsuk-body-l nhsuk-u-margin-bottom-0">Content</p>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  it('matches snapshot and element', () => {
    const shallowMount = shallow(<Hero />);
    expect(shallowMount).toMatchSnapshot();
    expect(
      shallowMount.containsMatchingElement(
        <section className="nhsuk-hero  " style={{ backgroundImage: 'none' }} />
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  it('matches snapshot and element as image', () => {
    const shallowMount = shallow(<Hero imageURL="image" />);
    expect(shallowMount).toMatchSnapshot();
    expect(
      shallowMount.containsMatchingElement(
        <section
          className="nhsuk-hero nhsuk-hero--image "
          style={{ backgroundImage: `url('image')` }}
        />
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  it('matches snapshot and element as image with children', () => {
    const fullMount = mount(
      <Hero imageURL="image">
        <Hero.Heading>Heading</Hero.Heading>
        <Hero.Content>Content</Hero.Content>
      </Hero>
    );
    expect(fullMount).toMatchSnapshot();
    expect(
      fullMount.containsMatchingElement(
        <h1 className="nhsuk-u-margin-bottom-3">Heading</h1>
      )
    ).toBeTruthy();
    expect(
      fullMount.containsMatchingElement(
        <p className="nhsuk-body-l nhsuk-u-margin-bottom-0">Content</p>
      )
    ).toBeTruthy();
    fullMount.unmount();
  });
  it('matches snapshot and element with children', () => {
    const fullMount = mount(
      <Hero>
        <Hero.Heading>Heading</Hero.Heading>
        <Hero.Content>Content</Hero.Content>
      </Hero>
    );
    expect(fullMount).toMatchSnapshot();
    expect(
      fullMount.containsMatchingElement(
        <h1 className="nhsuk-u-margin-bottom-3">Heading</h1>
      )
    ).toBeTruthy();
    expect(
      fullMount.containsMatchingElement(
        <p className="nhsuk-body-l nhsuk-u-margin-bottom-0">Content</p>
      )
    ).toBeTruthy();
    fullMount.unmount();
  });
});
