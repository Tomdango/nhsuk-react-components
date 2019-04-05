import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';
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

const loadStories = () => {
  require('../stories/action-link.story');
  require('../stories/back-link.story');
  require('../stories/breadcrumb.story');
  require('../stories/button.story');
  require('../stories/care-card.story');
  // Checkboxes Here
  require('../stories/contents-list.story');
  // Date Input Here
  require('../stories/form.story');
  require('../stories/details.story');
  require('../stories/do-dont-list.story');
  require('../stories/emergency-alert.story');
  require('../stories/error-message.story');
  require('../stories/error-summary.story');
  require('../stories/feedback-banner.story');
  require('../stories/fieldset.story');
  require('../stories/footer.story');
  require('../stories/header.story');
  require('../stories/hero.story');
  require('../stories/hint.story');
  require('../stories/image.story');
  // Input Here
  require('../stories/inset-text.story');
  require('../stories/label.story');
  require('../stories/layout.story');
  require('../stories/list-panel.story');
  require('../stories/single-list-panel.story');
  require('../stories/nav-a-z.story');
  require('../stories/pagination.story');
  require('../stories/panel.story');
  require('../stories/promo.story');
  require('../stories/review-date.story');
  require('../stories/skip-link.story');
  require('../stories/summary-list.story');
  require('../stories/table.story');
  require('../stories/warning-callout.story');
};

configure(loadStories, module);
