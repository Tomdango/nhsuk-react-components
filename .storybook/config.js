import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import NHSTheme from './theme';
import { fromEventPattern } from 'rxjs';

addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
  options: {
    theme: NHSTheme
  }
});

const req = require.context('../', true, /story\.jsx$/);

const loadStories = () => {
  req.keys().forEach(req);
};

configure(loadStories, module);
