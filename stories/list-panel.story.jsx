import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ListPanel from '../src/components/list-panel';

storiesOf('List Panel', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <ListPanel>
      <ListPanel.Panel label="A" id="A">
        <ListPanel.Item href="/conditions/abdominal-aortic-aneurysm/">
          Abdominal aortic aneurysm
        </ListPanel.Item>
        <ListPanel.Item href="/conditions/abscess/">Abscess</ListPanel.Item>
      </ListPanel.Panel>
      <ListPanel.Panel label="B" id="B" disabled>
        There are currently no conditions listed
      </ListPanel.Panel>
      <ListPanel.Panel label="C" id="C" backToTop backToTopLink="#top">
        <ListPanel.Item href="/conditions/chest-pain/">
          Chest pain
        </ListPanel.Item>
        <ListPanel.Item href="/conditions/cold-sores/">
          Cold sore
        </ListPanel.Item>
      </ListPanel.Panel>
      <ListPanel.Panel label="D" id="D" backToTop backToTopLink="#top">
        <ListPanel.Item href="/conditions/dandruff/">Dandruff</ListPanel.Item>
        <ListPanel.Item href="/conditions/dementia/">Dementia</ListPanel.Item>
        <ListPanel.Item href="/conditions/toothache/">
          Dental pain
        </ListPanel.Item>
      </ListPanel.Panel>
    </ListPanel>
  ))
  .add('Single Panel', () => (
    <ListPanel.Panel label="A" id="A">
      <ListPanel.Item href="/conditions/abdominal-aortic-aneurysm/">
        Abdominal aortic aneurysm
      </ListPanel.Item>
      <ListPanel.Item href="/conditions/abscess/">Abscess</ListPanel.Item>
    </ListPanel.Panel>
  ));
