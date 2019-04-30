import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from '../src/components/panel';
import {
  Container,
  Row,
  MainWrapper,
  ReadingWidth
} from '../src/components/layout';

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
  ))
  .add('Main Wrapper', () => (
    <MainWrapper id="main">
      <p>Wrap main page content within here</p>
    </MainWrapper>
  ))
  .add('Reading Width', () => (
    <ReadingWidth>
      <p>
        Wrap long text in this component to have it automatically set it to a
        normal reading width.
      </p>
      <p>
        Bacon ipsum dolor amet alcatra spare ribs buffalo leberkas, tail t-bone
        turducken ground round picanha. T-bone spare ribs ground round picanha
        tri-tip sausage turkey meatball pork drumstick strip steak doner ham
        hock ball tip. Buffalo meatloaf shankle porchetta pork loin shank. Chuck
        frankfurter pork chop biltong shankle cupim. Sausage jowl rump, boudin
        biltong pancetta kevin meatloaf meatball pastrami t-bone bresaola.
        Tri-tip meatball pig turkey, pork loin turducken burgdoggen.
      </p>
    </ReadingWidth>
  ));
