import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Checkboxes } from '../form';

describe('Checkboxes', () => {
  it('box matches snapshot', () => {
    const shallowMount = shallow(
      <Checkboxes.Box name="checkboxes" _id="id" value="option">
        Option
      </Checkboxes.Box>
    );
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('box renders hint', () => {
    const fullMount = mount(
      <Checkboxes.Box name="checkboxes" _id="id" value="option" hint="hint">
        Option
      </Checkboxes.Box>
    );
    expect(
      fullMount.containsMatchingElement(
        <span className="nhsuk-hint nhsuk-checkboxes__hint">hint</span>
      )
    ).toBeTruthy();
    fullMount.unmount();
  });
  it('box disables when prop supplied', () => {
    const shallowMount = shallow(
      <Checkboxes.Box name="checkboxes" disabled _id="id" value="option">
        Option
      </Checkboxes.Box>
    );
    expect(shallowMount.find('input').props().disabled).toBe(true);
    shallowMount.unmount();
  });
  it('box handles onClick', () => {
    const onClick = sinon.spy();
    const fullMount = mount(
      <Checkboxes.Box
        name="checkboxes"
        _id="id"
        _onClick={onClick}
        value="option"
        hint="hint"
      >
        Option
      </Checkboxes.Box>
    );
    const fullMountForAnonFunc = mount(
      <Checkboxes.Box name="checkboxes" _id="id" value="option" hint="hint">
        Option
      </Checkboxes.Box>
    );
    fullMount.find('input').simulate('click');
    fullMountForAnonFunc.find('input').simulate('click');
    sinon.assert.called(onClick);
    fullMount.unmount();
  });
  it('wrapper matches snapshot', () => {
    const fullMount = mount(
      <Checkboxes name="name">
        <Checkboxes.Box value="box">Box</Checkboxes.Box>
      </Checkboxes>
    );
    expect(fullMount).toMatchSnapshot();
    fullMount.unmount();
  });
  it('wrapper catches details from boxes', () => {
    const props = {
      registerInitialValue: sinon.spy(),
      valueCallback: sinon.spy(),
      name: 'name'
    };
    const fullMount = mount(
      <Checkboxes {...props}>
        <Checkboxes.Box value="box">Box</Checkboxes.Box>
        <Checkboxes.Box value="box2">Box2</Checkboxes.Box>
      </Checkboxes>
    );
    const fullMountForAnonFunc = mount(
      <Checkboxes name="name">
        <Checkboxes.Box value="box">Box</Checkboxes.Box>
        <Checkboxes.Box value="box2">Box2</Checkboxes.Box>
      </Checkboxes>
    );
    expect(fullMount.state()).toEqual({ currentValue: [] });
    sinon.assert.calledOnce(props.registerInitialValue);
    sinon.assert.notCalled(props.valueCallback);
    fullMount.find('#name-1').simulate('click');
    fullMountForAnonFunc.find('#name-1').simulate('click');
    sinon.assert.calledOnce(props.valueCallback);
    expect(fullMount.state()).toEqual({ currentValue: ['box'] });
    fullMount.find('#name-2').simulate('click');
    sinon.assert.calledTwice(props.valueCallback);
    expect(fullMount.state()).toEqual({ currentValue: ['box', 'box2'] });
    fullMount.find('#name-1').simulate('click');
    sinon.assert.calledThrice(props.valueCallback);
    expect(fullMount.state()).toEqual({ currentValue: ['box2'] });
    fullMount.find('#name-2').simulate('click');
    sinon.assert.callCount(props.valueCallback, 4);
    expect(fullMount.state()).toEqual({ currentValue: [] });
    sinon.assert.calledOnce(props.registerInitialValue);
    fullMount.unmount();
  });
  it('returns other children normally', () => {
    const fullMount = mount(
      <Checkboxes name="name">
        <p>Hello</p>
      </Checkboxes>
    );
    expect(fullMount).toMatchSnapshot();
    fullMount.unmount();
  });
  it('renders with hint and error', () => {
    const mountwithError = mount(
      <Checkboxes name="name" error="error">
        <Checkboxes.Box value="box">Box</Checkboxes.Box>
        <Checkboxes.Box value="box2">Box2</Checkboxes.Box>
      </Checkboxes>
    );
    const mountwithHint = mount(
      <Checkboxes name="name" hint="hint">
        <Checkboxes.Box value="box">Box</Checkboxes.Box>
        <Checkboxes.Box value="box2">Box2</Checkboxes.Box>
      </Checkboxes>
    );
    expect(
      mountwithHint.containsMatchingElement(
        <span className="nhsuk-hint">hint</span>
      )
    ).toBeTruthy();

    expect(
      mountwithError.containsMatchingElement(
        <span className="nhsuk-error-message">
          <span className="nhsuk-u-visually-hidden">Error: </span>error
        </span>
      )
    ).toBeTruthy();
  });
});
