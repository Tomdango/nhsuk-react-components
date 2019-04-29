# Do and don't list

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/164).

## Guidance

Find out more about the do and don't component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/do-and-dont-list).

### JSX markup

```jsx
import DoDontList from 'nhsuk-react-components/lib/components/do-dont-list';
// [OR]
import { DoDontList } from 'nhsuk-react-components';

const App = () => (
    <React.Fragment>
        <DoDontList type="tick">
            <DoDontList.Do>cover blisters that are likely to burst with a soft plaster or dressing</DoDontList.Do>
            <DoDontList.Do>wash your hands before touching a burst blister</DoDontList.Do>
            <DoDontList.Do>allow the fluid in a burst blister to drain before covering it with a plaster or dressing</DoDontList.Do>
        </DoDontList>
        <DoDontList type="cross">
            <DoDontList.Dont>do not burst a blister yourself</DoDontList.Dont>
            <DoDontList.Dont>do not peel the skin off a burst blister</DoDontList.Dont>
            <DoDontList.Dont>do not pick at the edges of the remaining skin</DoDontList.Dont>
            <DoDontList.Dont>do not wear the shoes or use the equipment that caused your blister until it heals</DoDontList.Dont>
        </DoDontList>
    </React.Fragment>
);
```

### Props

#### Do

The DoDontList.Do component takes the following props:

| Name      | Type   | Required | Default | Description                               |
| --------- | ------ | -------- | ------- | ----------------------------------------- |
| children  | Node   | Yes      |         | Content to be displayed within component. |
| className | String | No       | `""`    | Custom className applied to component     |
| style     | Object | No       | `{}`    | Custom style applied to component         |

#### Dont

The DoDontList.Dont component takes the following props:

| Name      | Type   | Required | Default | Description                               |
| --------- | ------ | -------- | ------- | ----------------------------------------- |
| children  | Node   | Yes      |         | Content to be displayed within component. |
| className | String | No       | `""`    | Custom className applied to component     |
| style     | Object | No       | `{}`    | Custom style applied to component         |

#### DoDontList

The DoDontList component takes the following props:

| Name      | Type                      | Required | Default | Description                                  |
| --------- | ------------------------- | -------- | ------- | -------------------------------------------- |
| children  | Node                      | Yes      |         | Do's and Don'ts to be displayed in component |
| title     | String                    | Yes      |         | Title of DoDontList                          |
| type      | One of `tick` and `cross` | Yes      |         | The type of the DoDontList                   |
| className | String                    | No       | `""`    | Custom className applied to component        |
| style     | Object                    | No       | `{}`    | Custom style applied to component            |
