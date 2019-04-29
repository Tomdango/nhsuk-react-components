# Care Card

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/160).

## Guidance

Find out more about the care card component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/care-cards).

### JSX markup

```jsx
import CareCard from 'nhsuk-react-components/lib/components/care-card';
// [OR]
import { CareCard } from 'nhsuk-react-components';

const App = () => (
  <CareCard type="non-urgent" heading="Speak to a GP if:">
    <ul>
      <li>you're not sure it's chickenpox</li>
      <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
      <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
      <li>you're concerned about your child or they get worse</li>
    </ul>
    <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
  </CareCard>
);
```

### Props

The button component takes the following props:

| Name              | Type                                       | Required | Default | Description                                                                                            |
| ----------------- | ------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------ |
| children          | Node                                       | Yes      |         | Text to be displayed within the action link component.                                                 |
| type              | One of `non-urgent`, `urgent`, `immediate` | Yes      |         | Type of care card (colour)                                                                             |
| heading           | String                                     | Yes      |         | Heading of the care card                                                                               |
| disableHiddenText | Boolean                                    | No       | `false` | Disable the hidden text next to the title (e.g. `"Non-Urgent Advice: "` if the type if `"non-urgent"`) |
| hiddenText        | String                                     | No       | `""`    | Specify specific hidden text                                                                           |
| className         | String                                     | No       | `""`    | Custom className to be applied to component                                                            |
| style             | Object                                     | No       | `{}`    | Custom style to be applied to component                                                                |