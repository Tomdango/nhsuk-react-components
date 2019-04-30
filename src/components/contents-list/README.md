# Contents List

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/161).

## Guidance

Find out more about the contents list component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/contents-list).

### JSX markup

```jsx
import ContentsList from 'nhsuk-react-components/lib/components/contents-list';
// [OR]
import { ContentsList } from 'nhsuk-react-components';

const App = () => (
  <ContentsList>
    <ContentsList.Item>Item</ContentsList.Item>
  </ContentsList>
);
```

### Props

#### ContentsList

The contents list component takes the following props:

| Name               | Type   | Required | Default               | Description                                       |
| ------------------ | ------ | -------- | --------------------- | ------------------------------------------------- |
| children           | Node   | Yes      |                       | ContentsList.Item elements                        |
| visuallyHiddenText | String | No       | `Contents`            | Visually hidden text to be read by screen readers |
| role               | String | No       | `navigation`          | The role of the ContentsList nav element          |
| ariaLabel          | String | No       | `Pages in this guide` | The `aria-label` of the nav element               |
| className          | String | No       | `""`                  | Custom className to be applied to component       |
| style              | Object | No       | `{}`                  | Custom style to be applied to component           |

#### Item

The contents list item component takes the following props:

| Name        | Type     | Required | Default    | Description                                            |
| ----------- | -------- | -------- | ---------- | ------------------------------------------------------ |
| children    | Node     | Yes      |            | Text to be displayed within the action link component. |
| href        | String   | No       | `#`        | Href value of item                                     |
| current     | Boolean  | No       | `false`    | If the item is the "current" item (e.g. not a link)    |
| onClick     | Function | No       | `() => {}` | Function to handle click of item                       |
| ariaCurrent | String   | No       | `page`     | `aria-current` value of Item component                 |
| className   | String   | No       | `""`       | Custom className to be applied to component            |
| style       | Object   | No       | `{}`       | Custom style to be applied to component                |
