# Emergency Alert

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/166).

## Guidance

### JSX markup

```jsx
import EmergencyAlert from 'nhsuk-react-components/lib/components/emergency-alert';
// [OR]
import { EmergencyAlert } from 'nhsuk-react-components';

const App = () => (
    <EmergencyAlert>
        <EmergencyAlert.Title>National flu outbreak</EmergencyAlert.Title>
        <EmergencyAlert.Message>
            There has been a national flu outbreak.
            <EmergencyAlert.Link href="https://www.nhs.uk">How does it affect me</EmergencyAlert.Link>
        </EmergencyAlert.Message>
        <EmergencyAlert.LastUpdated>Updated 23 mins ago</EmergencyAlert.LastUpdated>
    </EmergencyAlert>
);
```

### Props

#### EmergencyAlert

The EmergencyAlert component takes the following props:

| Name      | Type   | Required | Default              | Description                               |
| --------- | ------ | -------- | -------------------- | ----------------------------------------- |
| children  | Node   | Yes      |                      | Content to be displayed within component. |
| id        | String | No       | `nhsuk-global-alert` | ID of component                           |
| className | String | No       | `""`                 | Custom className applied to component     |
| style     | Object | No       | `{}`                 | Custom style applied to component         |

#### EmergencyAlert.Title

The EmergencyAlert.Title component takes the following props:

| Name               | Type   | Required | Default   | Description                                   |
| ------------------ | ------ | -------- | --------- | --------------------------------------------- |
| children           | Node   | Yes      |           | Content to be displayed within component.     |
| visuallyHiddenText | String | No       | `Alert: ` | Visually hidden text to the left of the title |
| className          | String | No       | `""`      | Custom className applied to component         |
| style              | Object | No       | `{}`      | Custom style applied to component             |

#### EmergencyAlert.Message

The EmergencyAlert.Message component takes the following props:

| Name      | Type   | Required | Default | Description                               |
| --------- | ------ | -------- | ------- | ----------------------------------------- |
| children  | Node   | Yes      |         | Content to be displayed within component. |
| className | String | No       | `""`    | Custom className applied to component     |
| style     | Object | No       | `{}`    | Custom style applied to component         |

#### EmergencyAlert.Link

The EmergencyAlert.Link component takes the following props:

| Name      | Type     | Required | Default    | Description                               |
| --------- | -------- | -------- | ---------- | ----------------------------------------- |
| children  | Node     | Yes      |            | Content to be displayed within component. |
| href      | String   | No       | `#`        | Href value of link component              |
| onClick   | Function | No       | `() => {}` | Function fired on link click              |
| className | String   | No       | `""`       | Custom className applied to component     |
| style     | Object   | No       | `{}`       | Custom style applied to component         |

#### EmergencyAlert.LastUpdated

The EmergencyAlert.LastUpdated component takes the following props:

| Name      | Type   | Required | Default | Description                               |
| --------- | ------ | -------- | ------- | ----------------------------------------- |
| children  | Node   | Yes      |         | Content to be displayed within component. |
| className | String | No       | `""`    | Custom className applied to component     |
| style     | Object | No       | `{}`    | Custom style applied to component         |
