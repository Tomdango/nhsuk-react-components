# Button

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/203).

## Guidance

Find out more about the action link component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/buttons).

### JSX markup

```jsx
import Button from 'nhsuk-react-components/lib/components/button';
// [OR]
import { Button } from 'nhsuk-react-components';

const App = () => (
  <Button>
    Click Me
  </Button>
);
```

### Props

The button component takes the following props:

| Name      | Type                               | Required | Default    | Description                                            |
| --------- | ---------------------------------- | -------- | ---------- | ------------------------------------------------------ |
| children  | Node                               | Yes      |            | Text to be displayed within the action link component. |
| secondary | Boolean                            | No       | `false`    | Display as secondary button                            |
| reverse   | Boolean                            | No       | `false`    | Display as reverse button                              |
| disabled  | Boolean                            | No       | `false`    | Disable the button                                     |
| href      | String                             | No       | `#`        | Href value of button                                   |
| onClick   | Function                           | No       | `() => {}` | Function fired on button click                         |
| role      | String                             | No       | `button`   | HTML Button role                                       |
| type      | One of `button`, `submit`, `reset` | No       | `button`   | HTML Button type                                       |
| name      | String                             | No       | `""`       | Name of button                                         |
| value     | String                             | No       | `""`       | Value of button                                        |
| className | String                             | No       | `""`       | Custom className applied to component                  |
| style     | Object                             | No       | `{}`       | Custom style applied to component                      |
