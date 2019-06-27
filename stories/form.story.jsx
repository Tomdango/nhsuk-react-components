import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import {
  Form,
  Textarea,
  Radios,
  DateInput,
  Input,
  Checkboxes,
  Select
} from '../src/components/form';
import { Container, Row } from '../src/components/layout';
import Button from '../src/components/button';
import Hint from '../src/components/hint';
import Fieldset from '../src/components/fieldset';

const FormWrapper = ({ children }) => {
  const [formData, setFormData] = useState({});
  return (
    <Row>
      <Row.Column width="one-half">
        <Form title="HC1" onChange={setFormData} style={{ margin: 75 }}>
          {children}
        </Form>
      </Row.Column>
      <Row.Column width="one-half">
        <pre
          style={{
            backgroundColor: '#ddd',
            margin: 75,
            padding: 35,
            width: '75%',
            heigth: '100%'
          }}
        >
          {JSON.stringify(formData, null, 2)}
        </pre>
      </Row.Column>
    </Row>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

storiesOf('Form', module).add('Combined Form', () => {
  return (
    <FormWrapper withErrors>
      <Fieldset title="Part 1 - About you and your partner">
        <Hint>
          If you are claiming a refund of health costs you have already paid,
          please tick which ones. Please read the notes to see what you need to
          send to make your refund claim.
        </Hint>
        <Checkboxes
          id="checkboxes"
          name="refund-items"
          style={{ marginBottom: 50 }}
        >
          <Container fluid>
            <Row>
              <Row.Column width="one-half">
                <Checkboxes.Box value="prescriptions">
                  NHS prescriptions
                </Checkboxes.Box>
                <Checkboxes.Box value="dental">
                  NHS dental treatment
                </Checkboxes.Box>
                <Checkboxes.Box value="sight-test">A sight test</Checkboxes.Box>
              </Row.Column>
              <Row.Column width="one-half">
                <Checkboxes.Box value="glasses">
                  Glasses or contact lenses
                </Checkboxes.Box>
                <Checkboxes.Box value="wigs">
                  NHS wigs or fabric supports
                </Checkboxes.Box>
                <Checkboxes.Box value="travel">
                  Travel to receive NHS treatment
                </Checkboxes.Box>
              </Row.Column>
            </Row>
          </Container>
        </Checkboxes>
        <Radios
          style={{ marginBottom: 30 }}
          name="has-partner"
          label="Do you have a partner?"
          hint="For an explanation of what we mean by 'partner', see page A."
          inline
        >
          <Radios.Radio
            value="no"
            hint="Please answer all the questions that apply to you."
          >
            No
          </Radios.Radio>
          <Radios.Radio
            value="yes"
            hint="Please answer all the questions that apply to you and your partner."
          >
            Yes
          </Radios.Radio>
        </Radios>
        <Input
          style={{ marginBottom: 10 }}
          label="Surname or family name"
          name="surname"
          id="surname"
          autoComplete="off"
          width={10}
        />
        <Input
          style={{ marginBottom: 10 }}
          label="First name"
          name="first-name"
          id="first-name"
          autoComplete="off"
          width={10}
        />
        <Input
          label="Mr, Mrs, Miss, Ms, other"
          name="title"
          id="title"
          style={{ marginBottom: 10 }}
          autoComplete="off"
          width={5}
        />
        <DateInput
          name="date-of-birth"
          style={{ marginBottom: 10 }}
          label="Date of birth"
          autoSelectNext
        />
        <Textarea label="Address" rows={4} name="address" />

        <Select
          name="method-of-contact"
          label="Preferred method of contact"
          style={{ marginBottom: 20 }}
        >
          <Select.Option value="telephone">Telephone</Select.Option>
          <Select.Option value="post">Post</Select.Option>
          <Select.Option value="email">Email</Select.Option>
        </Select>
      </Fieldset>
      <Button className="patient-search-form__button" type="submit">
        Submit
      </Button>
    </FormWrapper>
  );
});
