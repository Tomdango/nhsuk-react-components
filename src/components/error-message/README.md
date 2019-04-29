# Error Message

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/218).

## Guidance

Find out more about the error message component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/error-message).

### JSX markup

```jsx
import ErrorMessage from 'nhsuk-react-components/lib/components/error-message';
// [OR]
import { ErrorMessage } from 'nhsuk-react-components';

const App = () => (
    <ErrorMessage>Error</ErrorMessage>
);
```

### Props

The ErrorMessage component takes the following props:

| Name               | Type   | Required | Default   | Description                               |
| ------------------ | ------ | -------- | --------- | ----------------------------------------- |
| children           | Node   | Yes      |           | Content to be displayed within component. |
| visuallyHiddenText | String | No       | `Error: ` | Visually hidden text before content       |
| className          | String | No       | `""`      | Custom className applied to component     |
| style              | Object | No       | `{}`      | Custom style applied to component         |
