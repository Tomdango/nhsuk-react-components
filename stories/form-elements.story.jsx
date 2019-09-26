import React from 'react';
import { storiesOf } from '@storybook/react';
import { node } from 'prop-types';
import '../node_modules/nhsuk-frontend/packages/core/all.scss';
import './storybook.scss';
import {
  Form,
  Checkboxes,
  Radios,
  Input,
  Select,
  Textarea,
  DateInput
} from '../src/components/form';
import { Row } from '../src/components/layout';
import Button from '../src/components/button';

const FormWrapper = ({ children }) => {
  const [formState, setFormState] = React.useState({});
  const [submitState, setSubmitState] = React.useState({});
  const [errorState, setErrorState] = React.useState({});
  return (
    <Form
      style={{ margin: 30 }}
      onChange={formData => setFormState(formData)}
      onSubmit={(e, formData) => {
        e.preventDefault();
        setSubmitState(formData);
      }}
      onErrorChange={setErrorState}
    >
      <Row>
        <Row.Column width="one-half">{children}</Row.Column>
        <Row.Column width="one-half">
          <pre style={{ backgroundColor: '#ddd', padding: 10 }}>
            <strong>
              onChange
              <br />
            </strong>

            {JSON.stringify(formState, null, 2)}
            <br />
            <strong>
              onSubmit
              <br />
            </strong>
            {JSON.stringify(submitState, null, 2)}
            <br />
            <strong>
              errorState
              <br />
            </strong>
            {JSON.stringify(errorState, null, 2)}
          </pre>
        </Row.Column>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

FormWrapper.propTypes = {
  children: node.isRequired
};

storiesOf('Form Elements', module)
  .add('Checkboxes', () => (
    <>
      <FormWrapper>
        <Checkboxes
          name="normal-checkboxes"
          id="normal-checkboxes"
          label="Normal Checkboxes"
        >
          <Checkboxes.Box value="1">Value 1</Checkboxes.Box>
          <Checkboxes.Box value="2">Value 2</Checkboxes.Box>
          <Checkboxes.Box value="3">Value 3</Checkboxes.Box>
          <Checkboxes.Box value="4">Value 4</Checkboxes.Box>
        </Checkboxes>
      </FormWrapper>

      <FormWrapper>
        <Checkboxes
          name="errored-checkboxes"
          id="errored-checkboxes"
          error="Please select an option"
          label="Errored Checkboxes"
        >
          <Checkboxes.Box value="1">Value 1</Checkboxes.Box>
          <Checkboxes.Box value="2">Value 2</Checkboxes.Box>
          <Checkboxes.Box value="3">Value 3</Checkboxes.Box>
          <Checkboxes.Box value="4">Value 4</Checkboxes.Box>
        </Checkboxes>
      </FormWrapper>

      <FormWrapper>
        <Checkboxes
          name="hinted-checkboxes"
          id="hinted-checkboxes"
          hint="Please select two values."
          label="Hint Checkboxes"
        >
          <Checkboxes.Box value="1" hint="Value 1">
            Value 1
          </Checkboxes.Box>
          <Checkboxes.Box value="2" hint="Value 2">
            Value 2
          </Checkboxes.Box>
          <Checkboxes.Box value="3" hint="Value 3">
            Value 3
          </Checkboxes.Box>
          <Checkboxes.Box value="4" hint="Value 4">
            Value 4
          </Checkboxes.Box>
        </Checkboxes>
      </FormWrapper>

      <FormWrapper>
        <Checkboxes
          id="preselected-checkboxes"
          name="preselected-checkboxes"
          label="Preselected Checkboxes"
        >
          <Checkboxes.Box value="1" checked>
            Value 1
          </Checkboxes.Box>
          <Checkboxes.Box value="2">Value 2</Checkboxes.Box>
          <Checkboxes.Box value="3">Value 3</Checkboxes.Box>
          <Checkboxes.Box value="4">Value 4</Checkboxes.Box>
        </Checkboxes>
      </FormWrapper>

      <FormWrapper>
        <Checkboxes
          id="disabled-boxes"
          name="disabled-checkboxes"
          label="Disabled Checkboxes"
        >
          <Checkboxes.Box value="1" disabled>
            Value 1
          </Checkboxes.Box>
          <Checkboxes.Box value="2">Value 2</Checkboxes.Box>
          <Checkboxes.Box value="3">Value 3</Checkboxes.Box>
          <Checkboxes.Box value="4">Value 4</Checkboxes.Box>
        </Checkboxes>
      </FormWrapper>
    </>
  ))
  .add('Radios', () => (
    <>
      <FormWrapper>
        <Radios name="radios" id="normal" label="Normal Radios">
          <Radios.Radio value="1">Option 1</Radios.Radio>
          <Radios.Radio value="2">Option 2</Radios.Radio>
          <Radios.Divider>Or</Radios.Divider>
          <Radios.Radio value={3}>Option 3</Radios.Radio>
        </Radios>
      </FormWrapper>

      <FormWrapper>
        <Radios name="radios" inline id="inline" label="Inline Radios">
          <Radios.Radio value="1">Option 1</Radios.Radio>
          <Radios.Radio value="2">Option 2</Radios.Radio>
          <Radios.Radio value={3}>Option 3</Radios.Radio>
        </Radios>
      </FormWrapper>

      <FormWrapper>
        <Radios
          error="Please select a value."
          name="radios"
          id="errored"
          label="Errored Radios"
        >
          <Radios.Radio value="1">Option 1</Radios.Radio>
          <Radios.Radio value="2">Option 2</Radios.Radio>
          <Radios.Divider>Or</Radios.Divider>
          <Radios.Radio value={3}>Option 3</Radios.Radio>
        </Radios>
      </FormWrapper>

      <FormWrapper>
        <Radios
          hint="Please select a value."
          id="mmm-minted"
          name="radios"
          label="Hint Radios"
        >
          <Radios.Radio value="1" hint="Option 1 is a good option.">
            Option 1
          </Radios.Radio>
          <Radios.Radio value="2" hint="But maybe you'd prefer option 2?">
            Option 2
          </Radios.Radio>
          <Radios.Divider>Or</Radios.Divider>
          <Radios.Radio value={3} hint="Nobody likes the third option.">
            Option 3
          </Radios.Radio>
        </Radios>
      </FormWrapper>

      <FormWrapper>
        <Radios name="radios" label="Preselected Radios" id="preselected">
          <Radios.Radio value="1">Option 1</Radios.Radio>
          <Radios.Radio value="2">Option 2</Radios.Radio>
          <Radios.Divider>Or</Radios.Divider>
          <Radios.Radio value={3} selected>
            Option 3
          </Radios.Radio>
        </Radios>
      </FormWrapper>

      <FormWrapper>
        <Radios name="radios" label="Disabled Radios" id="disabled">
          <Radios.Radio value="1" disabled>
            Option 1
          </Radios.Radio>
          <Radios.Radio value="2">Option 2</Radios.Radio>
          <Radios.Divider>Or</Radios.Divider>
          <Radios.Radio value={3}>Option 3</Radios.Radio>
        </Radios>
      </FormWrapper>
    </>
  ))
  .add('Input', () => (
    <>
      <FormWrapper>
        <Input label="Normal Input" name="input" />
      </FormWrapper>

      <FormWrapper>
        <Input label="Input with specified size" width="2" name="input" />
      </FormWrapper>

      <FormWrapper>
        <Input
          label="Input with error"
          error="Nooo! Don't type that!"
          name="input"
        />
      </FormWrapper>

      <FormWrapper>
        <Input
          label="Input with hint"
          hint="Please use the input to input your input."
          name="input"
        />
      </FormWrapper>

      <FormWrapper>
        <Input
          label="Input with prefilled value"
          hint="Please use the input to input your input."
          value="This is my input."
          name="input"
        />
      </FormWrapper>

      <FormWrapper>
        <Input
          label="Input (disabled)"
          disabled
          value="This is my input."
          name="input"
        />
      </FormWrapper>
    </>
  ))
  .add('Select', () => (
    <>
      <FormWrapper>
        <Select name="select" label="Normal Select">
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
          <Select.Option value="3">Option 3</Select.Option>
        </Select>
      </FormWrapper>

      <FormWrapper>
        <Select name="select" label="Select with error" error="Wrong choice.">
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
          <Select.Option value="3">Option 3</Select.Option>
        </Select>
      </FormWrapper>

      <FormWrapper>
        <Select
          name="select"
          label="Select with hint"
          hint="Pick an option, any option."
        >
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
          <Select.Option value="3">Option 3</Select.Option>
        </Select>
      </FormWrapper>

      <FormWrapper>
        <Select
          name="select"
          label="Select with preselected value"
          hint="Pick an option, any option."
          value="3"
        >
          <Select.Option value="0" />
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
          <Select.Option value="3">Option 3</Select.Option>
        </Select>
      </FormWrapper>

      <FormWrapper>
        <Select
          name="select"
          label="Select (disabled)"
          hint="Pick an option, any option."
          value="2"
          disabled
        >
          <Select.Option value="0" />
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
          <Select.Option value="3">Option 3</Select.Option>
        </Select>
      </FormWrapper>
    </>
  ))
  .add('Textarea', () => (
    <>
      <FormWrapper>
        <Textarea label="Normal textarea" name="textarea" />
      </FormWrapper>

      <FormWrapper>
        <Textarea
          label="Textarea with error"
          error="Error! Error! Error!"
          name="textarea"
        />
      </FormWrapper>

      <FormWrapper>
        <Textarea
          label="Textarea with hint"
          hint="Hint! Hint! Hint!"
          name="textarea"
        />
      </FormWrapper>

      <FormWrapper>
        <Textarea label="Textarea with rows" rows={10} name="textarea" />
      </FormWrapper>

      <FormWrapper>
        <Textarea
          label="Textarea with prefilled value"
          value="Ooooh, look at me!"
          name="textarea"
        />
      </FormWrapper>

      <FormWrapper>
        <Textarea
          label="Disabled textarea"
          value="Ooooh, look at me! But don't change me!"
          name="textarea"
          disabled
        />
      </FormWrapper>
    </>
  ))
  .add('DateInput', () => (
    <>
      <FormWrapper>
        <DateInput label="Normal Dateinput" name="dateinput" />
      </FormWrapper>

      <FormWrapper>
        <DateInput label="As separate components" name="dateinput">
          <DateInput.Day />
          <DateInput.Year />
        </DateInput>
      </FormWrapper>

      <FormWrapper>
        <DateInput label="With error" error="Too old." name="dateinput" />
      </FormWrapper>

      <FormWrapper>
        <DateInput
          label="With errors on individual components"
          error="Please enter a valid day."
          name="dateinput"
        >
          <DateInput.Day error />
          <DateInput.Month />
          <DateInput.Year error />
        </DateInput>
      </FormWrapper>

      <FormWrapper>
        <DateInput
          label="With autoSelectNext"
          autoSelectNext
          name="dateinput"
        />
      </FormWrapper>

      <FormWrapper>
        <DateInput
          label="With autoSelectNext on individual elements"
          autoSelectNext
          name="dateinput"
        >
          <DateInput.Day />
          <DateInput.Month />
          <DateInput.Year />
        </DateInput>
      </FormWrapper>

      <FormWrapper>
        <DateInput
          label="With prepopulated fields"
          value={{ day: '20', year: '1998' }}
          name="dateinput"
        />
      </FormWrapper>

      <FormWrapper>
        <DateInput
          label="With prepopulated fields as individual components"
          name="dateinput"
        >
          <DateInput.Day value="20" />
          <DateInput.Month />
          <DateInput.Year value="1998" />
        </DateInput>
      </FormWrapper>

      <FormWrapper>
        <DateInput label="With hint" hint="Hinty McHintFace" name="dateinput" />
      </FormWrapper>

      <FormWrapper>
        <DateInput label="With disabled fields" name="dateinput">
          <DateInput.Day />
          <DateInput.Month disabled />
          <DateInput.Year disabled />
        </DateInput>
      </FormWrapper>
    </>
  ));
