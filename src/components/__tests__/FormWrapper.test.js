import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import {
  Form,
  Checkboxes,
  DateInput,
  Input,
  InputBlock,
  Radios,
  Select,
  Textarea
} from '../form';
import Hint from '../hint';
import Button from '../button';

describe('FormWrapper', () => {
  it('matches snapshot', () => {
    const shallowMount = shallow(<Form>Child</Form>);
    expect(shallowMount).toMatchSnapshot();
    shallowMount.unmount();
  });
  it('registers the initial state', () => {
    const shallowMount = shallow(<Form>Child</Form>);
    expect(shallowMount.state()).toEqual({ formData: {} });
    shallowMount.instance().registerInitialValue('input', 'initial');
    expect(shallowMount.state()).toEqual({ formData: { input: 'initial' } });
    shallowMount.instance().valueCallback('input', 'newvalue');
    expect(shallowMount.state()).toEqual({ formData: { input: 'newvalue' } });
  });
  it('registers all new inputs into the state', () => {
    const fullFormMount = mount(
      <Form>
        <Checkboxes name="checkboxes">
          <Checkboxes.Box value="box">Box</Checkboxes.Box>
        </Checkboxes>
        <DateInput name="dateInput" />
        <Input name="normalInput" />
        <InputBlock>
          <InputBlock.Input name="inputBlock" />
        </InputBlock>
        <Radios name="radios">
          <Radios.Radio value="val">Option</Radios.Radio>
        </Radios>
        <Select name="select">
          <Select.Item value="val">Option</Select.Item>
        </Select>
        <Textarea name="textarea" />
      </Form>
    );
    expect(fullFormMount.state()).toEqual({
      formData: {
        checkboxes: [],
        dateInput: {
          day: '',
          month: '',
          year: ''
        },
        inputBlock: '',
        normalInput: '',
        radios: '',
        select: '',
        textarea: ''
      }
    });
    fullFormMount.unmount();
  });
  it('passes props to form-style children', () => {
    const fullFormMount = mount(
      <Form>
        <Checkboxes name="checkboxes">
          <Checkboxes.Box value="box">Box</Checkboxes.Box>
        </Checkboxes>
        <DateInput name="dateInput" />
        <Input name="normalInput" />
        <InputBlock>
          <InputBlock.Input name="inputBlock" />
        </InputBlock>
        <Radios name="radios">
          <Radios.Radio value="val">Option</Radios.Radio>
        </Radios>
        <Select name="select">
          <Select.Item value="val">Option</Select.Item>
        </Select>
        <Textarea name="textarea" />
      </Form>
    );
    // Checkboxes
    expect(Object.keys(fullFormMount.find(Checkboxes).props())).toContain(
      'valueCallback',
      'registerInitialValue',
      'style'
    );
    expect(fullFormMount.find(Checkboxes).props().valueCallback).not.toEqual(
      () => {}
    );
    expect(
      fullFormMount.find(Checkboxes).props().registerInitialValue
    ).not.toEqual(() => {});
    expect(fullFormMount.find(Checkboxes).props().style).not.toEqual({});

    // Input
    expect(Object.keys(fullFormMount.find(Input).props())).toContain(
      'valueCallback',
      'registerInitialValue',
      'style'
    );
    expect(fullFormMount.find(Input).props().valueCallback).not.toEqual(
      () => {}
    );
    expect(fullFormMount.find(Input).props().registerInitialValue).not.toEqual(
      () => {}
    );
    expect(fullFormMount.find(Input).props().style).not.toEqual({});

    // Radios
    expect(Object.keys(fullFormMount.find(Radios).props())).toContain(
      'valueCallback',
      'registerInitialValue',
      'style'
    );
    expect(fullFormMount.find(Radios).props().valueCallback).not.toEqual(
      () => {}
    );
    expect(fullFormMount.find(Radios).props().registerInitialValue).not.toEqual(
      () => {}
    );
    expect(fullFormMount.find(Radios).props().style).not.toEqual({});

    // InputBlock
    expect(Object.keys(fullFormMount.find(InputBlock).props())).toContain(
      'valueCallback',
      'registerInitialValue',
      'style'
    );
    expect(fullFormMount.find(InputBlock).props().valueCallback).not.toEqual(
      () => {}
    );
    expect(
      fullFormMount.find(InputBlock).props().registerInitialValue
    ).not.toEqual(() => {});
    expect(fullFormMount.find(InputBlock).props().style).not.toEqual({});

    // Select
    expect(Object.keys(fullFormMount.find(Select).props())).toContain(
      'valueCallback',
      'registerInitialValue',
      'style'
    );
    expect(fullFormMount.find(Select).props().valueCallback).not.toEqual(
      () => {}
    );
    expect(fullFormMount.find(Select).props().registerInitialValue).not.toEqual(
      () => {}
    );
    expect(fullFormMount.find(Select).props().style).not.toEqual({});

    // Textarea
    expect(Object.keys(fullFormMount.find(Textarea).props())).toContain(
      'valueCallback',
      'registerInitialValue',
      'style'
    );
    expect(fullFormMount.find(Textarea).props().valueCallback).not.toEqual(
      () => {}
    );
    expect(
      fullFormMount.find(Textarea).props().registerInitialValue
    ).not.toEqual(() => {});
    expect(fullFormMount.find(Textarea).props().style).not.toEqual({});
    fullFormMount.unmount();
  });
  it('catches error in child', () => {
    const fullMount = mount(
      <Form>
        <Input name="input" error="Please actually enter something" />
      </Form>
    );
    expect(
      fullMount.containsMatchingElement(
        <span className="nhsuk-error-message ">
          <span className="nhsuk-u-visually-hidden">Error: </span>Please
          actually enter something
        </span>
      )
    );
    fullMount.unmount();
  });
  it("doesn't attach props to non-form elements", () => {
    const fullMount = mount(
      <Form>
        <Hint>This form is to be filled out by your GP.</Hint>
      </Form>
    );
    expect(Object.keys(fullMount.find(Hint).props())).not.toContain(
      'valueCallback',
      'registerInitialValue'
    );
    fullMount.unmount();
  });
  it('submits on button press', () => {
    const onSubmit = sinon.spy();
    const fullMount = mount(
      <Form onSubmit={onSubmit}>
        <Input name="input" />
        <Button type="submit">Submit</Button>
      </Form>
    );
    fullMount.find(Button).simulate('submit');
    sinon.assert.called(onSubmit);
    expect(JSON.stringify(onSubmit.getCall(0).args[1])).toEqual(
      JSON.stringify({ input: '' })
    );
    fullMount.unmount();
  });
  it('renders with title when supplied', () => {
    const shallowMount = mount(
      <Form title="Test Title" titleSize="l">
        Child
      </Form>
    );
    expect(
      shallowMount.containsMatchingElement(
        <h2 className="nhsuk-heading-l ">Test Title</h2>
      )
    ).toBeTruthy();
    shallowMount.unmount();
  });
  it('handles onSubmit', () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <Form onChange={onChange} onSubmit={onSubmit}>
        Elements
      </Form>
    );
    const wrapperForAnonFunc = shallow(<Form>Elements</Form>);
    wrapper.instance().valueCallback('key', 'value');
    wrapperForAnonFunc.instance().valueCallback('key', 'value');
    expect(onChange).toHaveBeenCalled();
    expect(wrapper.state()).toEqual({ formData: { key: 'value' } });
    wrapper.find('form').simulate('submit');
    wrapperForAnonFunc.find('form').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});
