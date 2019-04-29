# Back Link

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/202).

## Guidance

Find out more about the action link component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/back-link).

### JSX markup

```jsx
import BackLink from 'nhsuk-react-components/lib/components/back-link';
// [OR]
import { BackLink } from 'nhsuk-react-components';

const App = () => (
  <BackLink href="https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551">
    Go back
  </BackLink>
);
```

### Props

The back link takes the following props:

| Name      | Type     | Required | Default    | Description                                                                       |
| --------- | -------- | -------- | ---------- | --------------------------------------------------------------------------------- |
| children  | Node     | Yes      |            | Text to be displayed within the back link component.                              |
| onClick   | Function | No       | `() => {}` | Function fired when the component is clicked. Passes the event as first variable. |
| href      | String   | No       | `#`        | The value of the link href attribute                                              |
| className | String   | No       | `""`       | Custom className applied to component                                             |
| style     | Object   | No       | `{}`       | Custom styles applied to component                                                |