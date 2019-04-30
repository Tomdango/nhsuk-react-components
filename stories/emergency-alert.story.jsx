import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EmergencyAlert from '../src/components/emergency-alert';

const clicked = action('emergencyAlertClicked');

storiesOf('Emergency Alert', module)
  .add('Standard', () => (
    <EmergencyAlert id="flu-alert">
      <EmergencyAlert.Title>National Flu Outbreak</EmergencyAlert.Title>
      <EmergencyAlert.Message>
        There has been a national flu outbreak.
        <EmergencyAlert.Link href="https://www.nhs.uk">
          How does it affect me
        </EmergencyAlert.Link>
      </EmergencyAlert.Message>
      <EmergencyAlert.LastUpdated>
        Updated 23 mins ago
      </EmergencyAlert.LastUpdated>
    </EmergencyAlert>
  ))
  .add('Link with onClick', () => (
    <EmergencyAlert id="flu-alert">
      <EmergencyAlert.Title>National Flu Outbreak</EmergencyAlert.Title>
      <EmergencyAlert.Message>
        There has been a national flu outbreak.
        <EmergencyAlert.Link
          onClick={e => {
            e.preventDefault();
            clicked(e);
          }}
        >
          How does it affect me
        </EmergencyAlert.Link>
      </EmergencyAlert.Message>
      <EmergencyAlert.LastUpdated>
        Updated 23 mins ago
      </EmergencyAlert.LastUpdated>
    </EmergencyAlert>
  ));
