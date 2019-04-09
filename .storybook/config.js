import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import NHSTheme from './theme';

import '../node_modules/nhsuk-frontend/packages/core/all.scss';
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(
  withInfo({
    header: false,
    source: false,
    propTablesExclude: ['Story', 'ReadmeContent']
  })
);
addParameters({
  options: {
    theme: NHSTheme
  }
});

const req = require.context('./', true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
