import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';

describe('Button', () => {
  it('matches the snapshot as a button', () => {
    const normalButton = shallow(<Button>Primary</Button>);
    const secondaryButton = shallow(<Button secondary>Secondary</Button>);
    const reverseButton = shallow(<Button reverse>Reverse</Button>);
    expect(normalButton).toMatchSnapshot();
    expect(secondaryButton).toMatchSnapshot();
    expect(reverseButton).toMatchSnapshot();
    normalButton.unmount();
    secondaryButton.unmount();
    reverseButton.unmount();
  });
  it('matches the snapshot as a link', () => {
    const normalButton = shallow(<Button href="/">Primary</Button>);
    const secondaryButton = shallow(
      <Button href="/" secondary>
        Secondary
      </Button>
    );
    const reverseButton = shallow(
      <Button href="/" reverse>
        Reverse
      </Button>
    );
    expect(normalButton).toMatchSnapshot();
    expect(secondaryButton).toMatchSnapshot();
    expect(reverseButton).toMatchSnapshot();
    normalButton.unmount();
    secondaryButton.unmount();
    reverseButton.unmount();
  });
  it('handles onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>Primary</Button>);
    const wrapperForAnonFunc = shallow(<Button>Test</Button>);
    wrapper.find('button').simulate('click');
    wrapperForAnonFunc.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
    wrapper.unmount();
    wrapperForAnonFunc.unmount();
  });
});
