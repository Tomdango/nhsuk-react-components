# nhsuk-react-components

> NHS.UK Frontend components ported to React

[![NPM](https://img.shields.io/npm/v/nhsuk-react-components.svg)](https://www.npmjs.com/package/nhsuk-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
MIT © NHS.UK styles and components ported from [NHS.UK frontend](https://www.npmjs.com/package/nhsuk-frontend).
