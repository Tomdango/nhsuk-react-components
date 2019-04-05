import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Hint } from '../src';

storiesOf('Hint', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <Hint>
      It’s on your National Insurance card, benefit letter, payslip or P60. For
      example, ‘QQ 12 34 56 C’.
    </Hint>
  ));
