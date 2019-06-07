import React from 'react';
import { shallow } from 'enzyme';
import Image from '../image';

describe('Image', () => {
  it('matches snapshot and element', () => {
    const shallowMount = shallow(<Image src="imagesrc" alt="imagealt" />);
    expect(shallowMount).toMatchSnapshot();
    expect(
      shallowMount.containsMatchingElement(
        <figure className="nhsuk-image">
          <img className="nhsuk-image__img" alt="imagealt" src="imagesrc" />
        </figure>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  it('renders caption', () => {
    const shallowMount = shallow(
      <Image src="imagesrc" alt="imagealt" caption="Caption" />
    );
    expect(
      shallowMount.containsMatchingElement(
        <figcaption className="nhsuk-image__caption">Caption</figcaption>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
});
