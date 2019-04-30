# Fieldset

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/220).

## Guidance

Find out more about the fieldset component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/fieldset).

### JSX markup

```jsx
import Fieldset from 'nhsuk-react-components/lib/components/fieldset';
// [OR]
import { Fieldset } from 'nhsuk-react-components';

const App = () => (
    <Fieldset title="What is your address?">
        ...form elements
    </Fieldset>
);
```

### Props

The Fieldset component takes the following props:

| Name          | Type                             | Required | Default | Description                                |
| ------------- | -------------------------------- | -------- | ------- | ------------------------------------------ |
| children      | Node                             | Yes      |         | Content to be displayed within component.  |
| title         | String                           | No       | `""`    | Title of Fieldset                          |
| titleSize     | One of `xs`, `s`, `m`, `l`, `xl` | No       | `m`     | The size of the title                      |
| elementMargin | Number                           | No       | `0`     | The margin below elements in that fieldset |
| className     | String                           | No       | `""`    | Custom className applied to component      |
| style         | Object                           | No       | `{}`    | Custom style applied to component          |
