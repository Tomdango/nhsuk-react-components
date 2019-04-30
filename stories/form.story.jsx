import React from 'react';
import { storiesOf } from '@storybook/react';
import { node } from 'prop-types';
import { action } from '@storybook/addon-actions';
import {
  Form,
  Checkboxes,
  DateInput,
  Input,
  Radios,
  Select,
  Textarea,
  InputBlock
} from '../src/components/form';
import Fieldset from '../src/components/fieldset';
import Button from '../src/components/button';
import { Container, Row } from '../src/components/layout';

const submitAction = action('formSubmit');
const onChangeAction = action('formChange');

class TestWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  render() {
    const { children } = this.props;
    const { formData } = this.state;
    return (
      <Container fluid style={{ paddingTop: 40 }}>
        <Row>
          <Row.Column width="one-half">
            <Form
              onSubmit={(e, data) => {
                e.preventDefault();
                submitAction(e, data);
              }}
              onChange={data => {
                this.setState({ formData: data.formData });
                onChangeAction(data);
              }}
              title="Family doctor services registration"
              titleSize="l"
              elementMargin={30}
            >
              {children}
            </Form>
          </Row.Column>
          <Row.Column width="one-half">
            <pre style={{ padding: 15, backgroundColor: '#fff' }}>
              {JSON.stringify(formData, null, 2)}
            </pre>
          </Row.Column>
        </Row>
      </Container>
    );
  }
}

TestWrapper.propTypes = {
  children: node.isRequired
};

storiesOf('Form', module)
  .add('Combined Form', () => (
    <TestWrapper>
      <Fieldset title="Patient Details">
        <Radios
          label="Title"
          hint="Please enter the title that you prefer to be referred to as."
          name="title"
          inline
        >
          <Radios.Radio value="Mr">Mr</Radios.Radio>
          <Radios.Radio value="Mrs">Mrs</Radios.Radio>
          <Radios.Radio value="Miss">Miss</Radios.Radio>
          <Radios.Radio value="Ms">Ms</Radios.Radio>
        </Radios>
        <InputBlock>
          <InputBlock.Input label="First names" name="first-name" width={10} />
          <InputBlock.Input label="Surname" name="surname" width={10} />
          <InputBlock.Input
            label="Previous surname/s"
            name="previous-surnames"
            width={10}
          />
        </InputBlock>
        <Input label="Postcode" name="postcode" width={5} />
        <DateInput label="Date of birth" name="date-of-birth" autoFocus />
        <Checkboxes
          label="If you are registering a child under 5"
          name="child-under-five"
        >
          <Checkboxes.Box value="true">
            I wish the child above to be registered with the doctor named
            overleaf for Child Health Surveillance
          </Checkboxes.Box>
        </Checkboxes>

        <Checkboxes
          label="If you need your doctor to dispense medicines and appliances*"
          hint="*Not all doctors are authorised to dispense medicines"
          name="doctor-dispense-reason"
        >
          <Checkboxes.Box value="distance-over-one-mile">
            I live more than 1 mile in a straight line from the nearest chemist
          </Checkboxes.Box>
          <Checkboxes.Box value="severe-difficulty-getting-from-chemist">
            I would have serious difficulty in getting them from a chemist
          </Checkboxes.Box>
        </Checkboxes>
        <Textarea label="Patient signature" name="signature" />
        <Select
          label="Patient registered for:"
          name="patient-registered-for"
          hint="HA use only"
        >
          <Select.Item value="gms">GMS</Select.Item>
          <Select.Item value="chs">CHS</Select.Item>
          <Select.Item value="dispensing">Dispensing</Select.Item>
          <Select.Item value="rural-practice">Rural Practice</Select.Item>
        </Select>
      </Fieldset>
      <Button type="submit">Submit</Button>
    </TestWrapper>
  ))
  .add('Combined Form with error in components', () => (
    <TestWrapper>
      <Fieldset title="Patient Details">
        <Radios
          error="Invalid selection"
          label="Title"
          hint="Please enter the title that you prefer to be referred to as."
          name="title"
          inline
        >
          <Radios.Radio value="Mr">Mr</Radios.Radio>
          <Radios.Radio value="Mrs">Mrs</Radios.Radio>
          <Radios.Radio value="Miss">Miss</Radios.Radio>
          <Radios.Radio value="Ms">Ms</Radios.Radio>
        </Radios>
        <InputBlock heading="Name Information" headingSize="s">
          <InputBlock.Input
            error="Required Input"
            label="First names"
            name="first-name"
            width={10}
          />
          <InputBlock.Input label="Surname" name="surname" width={10} />
          <InputBlock.Input
            label="Previous surname/s"
            name="previous-surnames"
            width={10}
          />
        </InputBlock>
        <Input label="Postcode" name="postcode" width={5} />
        <DateInput label="Date of birth" name="date-of-birth" autoFocus />
        <Checkboxes
          label="If you are registering a child under 5"
          name="child-under-five"
        >
          <Checkboxes.Box value="true">
            I wish the child above to be registered with the doctor named
            overleaf for Child Health Surveillance
          </Checkboxes.Box>
        </Checkboxes>

        <Checkboxes
          label="If you need your doctor to dispense medicines and appliances*"
          hint="*Not all doctors are authorised to dispense medicines"
          name="doctor-dispense-reason"
        >
          <Checkboxes.Box value="distance-over-one-mile">
            I live more than 1 mile in a straight line from the nearest chemist
          </Checkboxes.Box>
          <Checkboxes.Box value="severe-difficulty-getting-from-chemist">
            I would have serious difficulty in getting them from a chemist
          </Checkboxes.Box>
        </Checkboxes>
        <Textarea error="Error" label="Patient signature" name="signature" />
        <Select
          label="Patient registered for:"
          name="patient-registered-for"
          hint="HA use only"
        >
          <Select.Item value="gms">GMS</Select.Item>
          <Select.Item value="chs">CHS</Select.Item>
          <Select.Item value="dispensing">Dispensing</Select.Item>
          <Select.Item value="rural-practice">Rural Practice</Select.Item>
        </Select>
      </Fieldset>
      <Button type="submit">Submit</Button>
    </TestWrapper>
  ));
