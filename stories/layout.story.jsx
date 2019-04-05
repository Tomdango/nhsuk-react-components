import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Row, Panel } from '../src';

storiesOf('Layout', module)
  .add('Fixed Container', () => (
    <Container>
      <Panel label="Fixed Container">
        <p>Full-width panel in a fixed container</p>
      </Panel>
    </Container>
  ))
  .add('Fluid Container', () => (
    <Container fluid>
      <Panel label="Fluid Container">
        <p>Full-width panel in a fluid container</p>
      </Panel>
    </Container>
  ))
  .add('Rows in a fixed container', () => (
    <Container>
      <Row>
        <Row.Column width="full">
          <Panel label="Full Width">
            <p>full</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="three-quarters">
          <Panel label="Three Quarters">
            <p>three-quarters</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="two-thirds">
          <Panel label="Two Thirds">
            <p>two-thirds</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-third">
          <Panel label="One Third">
            <p>one-third</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="one-half">
          <Panel label="One Half">
            <p>one-half</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-half">
          <Panel label="One Half">
            <p>one-half</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="one-third">
          <Panel label="One Third">
            <p>one-third</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-third">
          <Panel label="One Third">
            <p>one-third</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-third">
          <Panel label="One Third">
            <p>one-third</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
      </Row>
    </Container>
  ))
  .add('Rows in a fluid container', () => (
    <Container fluid>
      <Row>
        <Row.Column width="full">
          <Panel label="Full Width">
            <p>full</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="three-quarters">
          <Panel label="Three Quarters">
            <p>three-quarters</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="two-thirds">
          <Panel label="Two Thirds">
            <p>two-thirds</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-third">
          <Panel label="One Third">
            <p>one-third</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="one-half">
          <Panel label="One Half">
            <p>one-half</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-half">
          <Panel label="One Half">
            <p>one-half</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="one-third">
          <Panel label="One Third">
            <p>one-third</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-third">
          <Panel label="One Third">
            <p>one-third</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-third">
          <Panel label="One Third">
            <p>one-third</p>
          </Panel>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
        <Row.Column width="one-quarter">
          <Panel label="One Quarter">
            <p>one-quarter</p>
          </Panel>
        </Row.Column>
      </Row>
    </Container>
  ));
