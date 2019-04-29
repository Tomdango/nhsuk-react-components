# Error Summary

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/219).

## Guidance

Find out more about the error summary component and when to use it in the [NHS digital service manual](https://nhsuk.github.io/nhsuk-frontend/components/error-summary/index.html).

### JSX markup

```jsx
import ErrorSummary from 'nhsuk-react-components/lib/components/error-summary';
// [OR]
import { ErrorSummary } from 'nhsuk-react-components';

const App = () => (
    <ErrorSummary>
        <ErrorSummary.Item>Error 1</ErrorSummary.Item>
        <ErrorSummary.Item>Error 2</ErrorSummary.Item>
    </ErrorSummary>
);
```

### Props

#### ErrorSummary

The ErrorSummary component takes the following props:

| Name        | Type   | Required | Default | Description                               |
| ----------- | ------ | -------- | ------- | ----------------------------------------- |
| children    | Node   | Yes      |         | Content to be displayed within component. |
| title       | String | Yes      |         | Title of ErrorSummary                     |
| description | String | No       | `""`    | Description in ErrorSummary               |
| role        | String | No       | `alert` | HTML Role of ErrorSummary                 |
| className   | String | No       | `""`    | Custom className applied to component     |
| style       | Object | No       | `{}`    | Custom style applied to component         |

#### ErrorSummary.Item

The ErrorSummary component takes the following props:

| Name      | Type     | Required | Default    | Description                               |
| --------- | -------- | -------- | ---------- | ----------------------------------------- |
| children  | Node     | Yes      |            | Content to be displayed within component. |
| href      | String   | No       | `#`        | Href value of item                        |
| onClick   | Function | No       | `() => {}` | Function fired on item click              |
| className | String   | No       | `""`       | Custom className applied to component     |
| style     | Object   | No       | `{}`       | Custom style applied to component         |
