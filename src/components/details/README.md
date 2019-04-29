# Details

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/162).

## Guidance

Find out more about the details component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/details).

### JSX markup

```jsx
import Details from 'nhsuk-react-components/lib/components/details';
// [OR]
import { Details } from 'nhsuk-react-components';

const App = () => (
  <Details title="Where can I find my NHS number?">
    <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
    <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
    <ul>
      <li>prescriptions</li>
      <li>test results</li>
      <li>hospital referral letters</li>
      <li>appointment letters</li>
      <li>your NHS medical card</li>
    </ul>
    <p>Ask your GP practice for help if you can't find your NHS number.</p>
  </Details>
);
```

### Props

The details component takes the following props:

| Name      | Type    | Required | Default | Description                                                   |
| --------- | ------- | -------- | ------- | ------------------------------------------------------------- |
| children  | Node    | Yes      |         | Content to be displayed within component.                     |
| expander  | Boolean | No       | `false` | Whether the details component should be an "expander" element |
| title     | String  | Yes      |         | Title of the details component                                |
| className | String  | No       | `""`    | Custom className applied to component                         |
| style     | Object  | No       | `{}`    | Custom style applied to component                             |

#### Details.ExpanderGroup

The Details.ExpanderGroup component takes the following props:

| Name     | Type | Required | Default | Description                                 |
| -------- | ---- | -------- | ------- | ------------------------------------------- |
| children | Node | Yes      |         | Expanders to be displayed within component. |