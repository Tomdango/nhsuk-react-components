import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import CareCard from '../src/components/care-card';

storiesOf('Care Card', module)
  .addDecorator(centered)
  .add('Non-Urgent', () => (
    <CareCard type="non-urgent" heading="Speak to a GP if:">
      <ul>
        <li>you&lsquo;re not sure it&lsquo;s chickenpox</li>
        <li>
          the skin around the blisters is red, hot or painful (signs of
          infection)
        </li>
        <li>
          your child is{' '}
          <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
        </li>
        <li>you&lsquo;re concerned about your child or they get worse</li>
      </ul>
      <p>
        Tell the receptionist you think it&lsquo;s chickenpox before going in.
        They may recommend a special appointment time if other patients are at
        risk.
      </p>
    </CareCard>
  ))
  .add('Urgent', () => (
    <CareCard type="urgent" heading="Ask for an urgent GP appointment if:">
      <ul>
        <li>you&lsquo;re an adult and have chickenpox</li>
        <li>
          you&lsquo;re pregnant and haven&lsquo;t had chickenpox before and
          you&lsquo;ve been near someone with it{' '}
        </li>
        <li>
          you have a weakened immune system and you&lsquo;ve been near someone
          with chickenpox
        </li>
        <li>you think your newborn baby has chickenpox</li>
      </ul>
      <p>
        In these situations, your GP can prescribe medicine to prevent
        complications. You need to take it within 24 hours of the spots coming
        out.
      </p>
    </CareCard>
  ))
  .add('Immediate', () => (
    <CareCard
      type="immediate"
      heading="Call 999 if you have sudden chest pain that:"
    >
      <ul>
        <li>spreads to your arms, back, neck or jaw</li>
        <li>makes your chest feel tight or heavy</li>
        <li>
          also started with shortness of breath, sweating and feeling or being
          sick
        </li>
      </ul>
      <p>
        You could be having a heart attack. Call 999 immediately as you need
        immediate treatment in hospital.
      </p>
    </CareCard>
  ))
  .add('With disabled hidden text', () => (
    <CareCard disableHiddenText>
      <ul>
        <li>spreads to your arms, back, neck or jaw</li>
        <li>makes your chest feel tight or heavy</li>
        <li>
          also started with shortness of breath, sweating and feeling or being
          sick
        </li>
      </ul>
      <p>
        You could be having a heart attack. Call 999 immediately as you need
        immediate treatment in hospital.
      </p>
    </CareCard>
  ))
  .add('With custom hidden text', () => (
    <CareCard hiddenText="Custom Text">
      <ul>
        <li>spreads to your arms, back, neck or jaw</li>
        <li>makes your chest feel tight or heavy</li>
        <li>
          also started with shortness of breath, sweating and feeling or being
          sick
        </li>
      </ul>
      <p>
        You could be having a heart attack. Call 999 immediately as you need
        immediate treatment in hospital.
      </p>
    </CareCard>
  ));
