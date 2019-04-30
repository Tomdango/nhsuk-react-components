import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import NHSTheme from './theme';

addDecorator(withA11y);
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
