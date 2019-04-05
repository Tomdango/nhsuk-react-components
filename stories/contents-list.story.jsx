import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ContentsList } from '../src';

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
  ));
