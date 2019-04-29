# Action Link

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/157).

## Guidance

Find out more about the action link component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/action-link).

### JSX markup

```jsx
import ActionLink from 'nhsuk-react-components/lib/components/action-link';
// [OR]
import { ActionLink } from 'nhsuk-react-components';

const App = () => (
  <ActionLink href="https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551">
    Find a minor injuries unit
  </ActionLink>
);
```

### Props

The action link takes the following props:

| Name            | Type     | Required | Default    | Description                                                                       |
| --------------- | -------- | -------- | ---------- | --------------------------------------------------------------------------------- |
| children        | Node     | Yes      |            | Text to be displayed within the action link component.                            |
| onClick         | Function | No       | `() => {}` | Function fired when the component is clicked. Passes the event as first variable. |
| href            | String   | No       | `#`        | The value of the link href attribute                                              |
| openInNewWindow | Boolean  | No       | `false`    | If true, the link will open in a new window/tab.                                  |
| className       | String   | No       | `""`       | Custom className applied to component                                             |
| style           | Object   | No       | `{}`       | Custom styles applied to component                                                |