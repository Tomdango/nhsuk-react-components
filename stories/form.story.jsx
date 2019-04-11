import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import {
  Form,
  Checkboxes,
  DateInput,
  Input,
  Radios,
  Select,
  Textarea,
  InputBlock,
  Button,
  Container,
  Row
} from '../src';
import Heading from '../src/components/typography/heading';

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
                console.log(data);
              }}
              onChange={data => this.setState({ formData: data.formData })}
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

storiesOf('Form', module).add('Combined Form', () => {
  return (
    <TestWrapper>
      <Heading size="m">Patient details</Heading>
      <Radios
        title="Title"
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
        <InputBlock.Input title="First names" name="first-name" width={10} />
        <InputBlock.Input title="Surname" name="surname" width={10} />
        <InputBlock.Input
          title="Previous surname/s"
          name="previous-surnames"
          width={10}
        />
      </InputBlock>
      <DateInput title="Date of birth" name="date-of-birth" autoFocus />
      <Input title="Postcode" name="postcode" width={5} />
      <Checkboxes
        title="If you are registering a child under 5"
        name="child-under-five"
      >
        <Checkboxes.Box value="true">
          I wish the child above to be registered with the doctor named overleaf
          for Child Health Surveillance
        </Checkboxes.Box>
      </Checkboxes>

      <Checkboxes
        title="If you need your doctor to dispense medicines and appliances*"
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
      <Textarea title="Patient signature" name="signature" />
      <Select
        title="Patient registered for:"
        name="patient-registered-for"
        hint="HA use only"
      >
        <Select.Item value="gms">GMS</Select.Item>
        <Select.Item value="chs">CHS</Select.Item>
        <Select.Item value="dispensing">Dispensing</Select.Item>
        <Select.Item value="rural-practice">Rural Practice</Select.Item>
      </Select>
      <Button type="submit">Submit</Button>
    </TestWrapper>
  );
});
