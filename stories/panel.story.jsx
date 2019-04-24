import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Panel } from '../src';

storiesOf('Panel', module)
  .addDecorator(centered)
  .add('Panel', () => (
    <Panel>
      <h3>Live well</h3>
      <p>
        Advice, tips and tools to help you make the best choices about your
        health and wellbeing
      </p>
    </Panel>
  ))
  .add('Panel with a Label', () => (
    <Panel label="Live well">
      <p>
        Advice, tips and tools to help you make the best choices about your
        health and wellbeing
      </p>
    </Panel>
  ))
  .add('Grey Panel', () => (
    <Panel grey>
      <h3>Live well</h3>
      <p>
        Advice, tips and tools to help you make the best choices about your
        health and wellbeing
      </p>
    </Panel>
  ))
  .add('Panel Group', () => (
    <div>
      <Panel.Group>
        <Panel>
          <h3>Live well</h3>
          <p>
            Advice, tips and tools to help you make the best choices about your
            health and wellbeing
          </p>
        </Panel>
        <Panel>
          <h3>Eat well</h3>
          <p>
            All you need to know about the major food groups and a healthy,
            balanced diet
          </p>
        </Panel>
      </Panel.Group>
      <Panel.Group>
        <Panel>
          <h3>Excercise</h3>
          <p>
            Programmes, workouts and tips to get you moving and improve your
            fitness and wellbeing
          </p>
        </Panel>
        <Panel>
          <h3>Sleep and tiredness</h3>
          <p>
            Find out how to sleep well and the common lifestyle factors that are
            making you tired
          </p>
        </Panel>
      </Panel.Group>
    </div>
  ));
