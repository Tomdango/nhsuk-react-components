import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import ContentsList from '../src/components/contents-list';

const clicked = action('contentsListClick');

storiesOf('Contents List', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <ContentsList>
      <ContentsList.Item
        href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/"
        current
      >
        What is AMD?
      </ContentsList.Item>
      <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">
        Symptoms
      </ContentsList.Item>
      <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">
        Getting diagnosed
      </ContentsList.Item>
      <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">
        Treatments
      </ContentsList.Item>
      <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">
        Living with AMD
      </ContentsList.Item>
    </ContentsList>
  ))
  .add('With onClick on items', () => (
    <ContentsList>
      <ContentsList.Item current>What is AMD?</ContentsList.Item>
      <ContentsList.Item
        onClick={e => {
          e.preventDefault();
          clicked(e);
        }}
      >
        Symptoms
      </ContentsList.Item>
      <ContentsList.Item
        onClick={e => {
          e.preventDefault();
          clicked(e);
        }}
      >
        Getting diagnosed
      </ContentsList.Item>
      <ContentsList.Item
        onClick={e => {
          e.preventDefault();
          clicked(e);
        }}
      >
        Treatments
      </ContentsList.Item>
      <ContentsList.Item
        onClick={e => {
          e.preventDefault();
          clicked(e);
        }}
      >
        Living with AMD
      </ContentsList.Item>
    </ContentsList>
  ))
  .add('With custom visuallyHiddenText, role and ariaLabel', () => (
    <ContentsList
      visuallyHiddenText="Custom text"
      ariaLabel="label"
      role="navigation"
    >
      <ContentsList.Item current>What is AMD?</ContentsList.Item>
      <ContentsList.Item>Symptoms</ContentsList.Item>
    </ContentsList>
  ));
