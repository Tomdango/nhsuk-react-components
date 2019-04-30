import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import ActionLink from '../src/components/action-link';
import './storybook.scss';

const clickAction = action('actionLinkClicked');
storiesOf('Action Link', module)
  .addDecorator(centered)
  .add('Action Link', () => (
    <ActionLink href="https://nhs.uk/">Find a minor injuries unit</ActionLink>
  ))
  .add('With openInNewWindow attribute', () => (
    <ActionLink href="https://nhs.uk/" openInNewWindow>
      Find a minor injuries unit
    </ActionLink>
  ))
  .add('With onClick attribute', () => (
    <ActionLink
      onClick={e => {
        e.preventDefault();
        clickAction(e);
      }}
    >
      Find a minor injuries unit
    </ActionLink>
  ));
