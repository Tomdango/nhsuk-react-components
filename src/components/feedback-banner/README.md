# Error Summary

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/167).

## Guidance

### JSX markup

```jsx
import FeedbackBanner from 'nhsuk-react-components/lib/components/feedback-banner';
// [OR]
import { FeedbackBanner } from 'nhsuk-react-components';

const App = () => (
    <FeedbackBanner title="Help us make the NHS website better" label="Take our short survey">
        Your feedback helps us improve the NHS website.
    </FeedbackBanner>
);
```

### Props

The FeedbackBanner component takes the following props:

| Name               | Type     | Required | Default                 | Description                                   |
| ------------------ | -------- | -------- | ----------------------- | --------------------------------------------- |
| children           | Node     | Yes      |                         | Content to be displayed within component.     |
| id                 | String   | No       | `nhsuk-feedback-banner` | ID of the banner                              |
| timeout            | Number   | No       | `3000`                  | Banner timeout (time it takes to show)        |
| title              | String   | No       | `""`                    | Banner Title                                  |
| label              | Node     | No       | `""`                    | Label for the banner                          |
| href               | String   | No       | `#`                     | Href value for the link                       |
| onClick            | Function | No       | `() => {}`              | Function to be fired when the link is clicked |
| visuallyHiddenText | String   | No       | ` feedback invite`      | Visually hidden text after the close button   |
| className          | String   | No       | `""`                    | Custom className applied to component         |
| style              | Object   | No       | `{}`                    | Custom style applied to component             |
