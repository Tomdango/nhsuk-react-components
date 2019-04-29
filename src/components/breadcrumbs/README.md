# Breadcrumbs

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/158).

## Guidance

Find out more about the action link component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/breadcrumbs.

### JSX markup

```jsx
import Breadcrumbs from 'nhsuk-react-components/lib/components/breadcrumbs';
// [OR]
import { Breadcrumbs } from 'nhsuk-react-components';

const App = () => (
  <Breadcrumbs ariaLabel="breadcrumbs">
    <Breadcrumbs.Item href="#1">Crumb 1</Breadcrumbs.Item>
    <Breadcrumbs.Item href="#2">Crumb 2</Breadcrumbs.Item>
    <Breadcrumbs.Item href="#3">Crumb 3</Breadcrumbs.Item>
  </Breadcrumbs>
);
```

### Props

#### Container
The breadcrumbs container takes the following props:

| Name      | Type   | Required | Default | Description                                                                       |
| --------- | ------ | -------- | ------- | --------------------------------------------------------------------------------- |
| children  | Node   | Yes      |         | Breadcrumb items                                                                  |
| ariaLabel | String | No       | `""`    | Function fired when the component is clicked. Passes the event as first variable. |
| href      | String | No       | `#`     | The value of the link href attribute                                              |
| className | String | No       | `""`    | Custom className applied to component                                             |
| style     | Object | No       | `{}`    | Custom styles applied to component                                                |

#### Item
The breadcrumbs item takes the following props:

| Name      | Type     | Required | Default    | Description                                     |
| --------- | -------- | -------- | ---------- | ----------------------------------------------- |
| children  | Node     | Yes      |            | Text to be displayed within the item component. |
| href      | String   | No       | `#`        | The value of the link href attribute            |
| onClick   | Function | No       | `() => {}` | Function fired on click of item                 |
| className | String   | No       | `""`       | Custom className applied to component           |
| style     | Object   | No       | `{}`       | Custom styles applied to component              |