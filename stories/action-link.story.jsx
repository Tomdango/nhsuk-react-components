import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ActionLink } from '../src';
import './storybook.scss';

storiesOf('Action Link', module)
  .addDecorator(centered)
  .add('Action Link', () => (
    <ActionLink
      openInNewWindow={boolean('Open in new window', false)}
      href={text('Href', '#')}
    >
      {text('Link Text', 'Find a minor injuries unit')}
    </ActionLink>
  ))
  .add('With onClick attribute', () => (
    <ActionLink
      openInNewWindow={boolean('Open in new window', false)}
      onClick={e => {
        e.preventDefault();
        action('clicked');
      }}
    >
      {text('Link Text', 'Find a minor injuries unit')}
    </ActionLink>
  ));
