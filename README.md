# nhsuk-react-components

> NHS.UK Frontend components ported to React

[![Build](https://travis-ci.org/Tomdango/nhsuk-react-components.svg?branch=master)](https://travis-ci.org/Tomdango/nhsuk-react-components) [![NPM](https://img.shields.io/npm/v/nhsuk-react-components.svg)](https://www.npmjs.com/package/nhsuk-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript) ![Bundle Size](https://img.shields.io/bundlephobia/min/nhsuk-react-components.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/c0721cb48f794fc3b5f3080e078a4628)](https://www.codacy.com/app/Tomdango/nhsuk-react-components?utm_source=github.com&utm_medium=referral&utm_content=Tomdango/nhsuk-react-components&utm_campaign=Badge_Grade) [![Code Coverage](https://img.shields.io/codacy/coverage/c0721cb48f794fc3b5f3080e078a4628/master.svg)](https://app.codacy.com/project/Tomdango/nhsuk-react-components/dashboard)

## Notes

This package is developed by NHS Digital, but it is not from the NHS.UK redesign team. Some things may differ between the standard NHS.UK frontend library and this library, however we will try our best to keep this package maintained and up-to-date.

This package is still under development, so there may be breaking changes in minor and patch version updates. As of the `1.0.0` release, only major updates will make breaking changes.

## Install

```bash
npm install --save nhsuk-react-components

yarn add nhsuk-react-components
```

## Usage

```jsx
import React, { Component } from 'react';

// You can import from the global component
import { Panel } from 'nhsuk-react-components';

// // [RECOMENDED] Or import only the components you will use (this will reduce the total bundle size)
import Panel from 'nhsuk-react-components/lib/components/panel';

class Example extends Component {
  render() {
    return (
      <Panel label="TestPanel">
        <p>Hello!</p>
      </Panel>
    );
  }
}
```

## License

MIT © [Thomas Judd-Cooper](https://github.com/Tomdango)

NHS.UK styles and components ported from MIT © [NHS.UK frontend](https://www.npmjs.com/package/nhsuk-frontend).
