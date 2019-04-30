# Form

The FormWrapper renders only a basic wrapper for the form, but it contains functions that are automatically passed to other form components. This allows the Form object to act as a central state store for the form, and exposing the onSubmit and onChange functions centrally for the whole form. All NHSUK React Form components will automatically "call-back" and register with the central form object, updating it's state. They also automatically pass down changes to the central form object, so everything should work fairly intuitively.

## Technical Documentation

When the Form renders, it maps over it's children and checks for any NHSUK React Form components. If it finds them, it creates a clone of that component, with the additional `valueCallback` and `registerInitialValue` functions, as well as some helpers such as `elementMargin` which sets up spacing for the components. The NHSUK React Form components then call the `registerInitialValue` function with the form element name and the initial value of that element. On every change, they call the `valueCallback` function, again with the name and initial value.

## Components

### Checkboxes

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/207).

#### Guidance

Find out more about the checkboxes component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/checkboxes).

#### Usage

```jsx
const App = () => (
    <Checkboxes name="test" describedBy="nationality-hint" label="What is your nationality?">
        <Checkboxes.Box value="british">British</Checkboxes.Box>
        <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
        <Checkboxes.Box value="other">citizen of another country</Checkboxes.Box>
    </Checkboxes>
)
```

#### Checkboxes Props

The Checkboxes component takes the following props:

| Name         | Type   | Required | Default | Description                                                                     |
| ------------ | ------ | -------- | ------- | ------------------------------------------------------------------------------- |
| children     | Node   | Yes      |         | Content to be displayed within component.                                       |
| name         | String | Yes      |         | The name of the form component. This is stored within the Form wrapper's state. |
| label        | String | No       | `""`    | The label to be displayed above the boxes                                       |
| labelHtmlFor | String | No       | `""`    | The htmlFor tag that is supplied to the label                                   |
| id           | String | No       | `""`    | The ID of the wrapper checkbox div                                              |
| error        | String | No       | `""`    | The error displayed under the label. This also bubbles up to the form wrapper.  |
| hint         | String | No       | `""`    | The hint displayed under the label                                              |
| className    | String | No       | `""`    | Custom className applied to component                                           |
| style        | Object | No       | `{}`    | Custom style applied to component                                               |

The Checkboxes.Box component takes the following props:

| Name      | Type    | Required | Default | Description                               |
| --------- | ------- | -------- | ------- | ----------------------------------------- |
| children  | Node    | Yes      |         | Content to be displayed within component. |
| value     | String  | Yes      |         | Value of the checkbox                     |
| hint      | String  | No       | `""`    | Hint to be displayed under the checkbox   |
| disabled  | Boolean | No       | `false` | If `true`, the button is disabled         |
| className | String  | No       | `""`    | Custom className applied to component     |
| style     | Object  | No       | `{}`    | Custom style applied to component         |

### Date Input

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/207).

#### Guidance

Find out more about the checkboxes component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/checkboxes).

#### Usage

```jsx
const App = () => (
    <DateInput name="dateofbirth" describedBy="dob-hint" label="What is your date of birth?" autoFocus />
)
```

##### Or as individual elements

```jsx
const App = () => (
    <DateInput name="dateofbirth" describedBy="dateofbirth-hint" label="What is your date of birth?" autoFocus>
        <DateInput.Day />
        <DateInput.Month />
        <DateInput.Year />
    </DateInput>
)
```

#### Props

The DateInput component takes the following props:

| Name         | Type    | Required | Default | Description                                     |
| ------------ | ------- | -------- | ------- | ----------------------------------------------- |
| children     | Node    | Yes      |         | Content to be displayed within component.       |
| label        | String  | No       | `""`    | Label above the component                       |
| labelHtmlFor | String  | No       | `""`    | htmlFor for the label                           |
| name         | String  | Yes      |         | The name of the component                       |
| required     | Boolean | No       | `false` | Toggle for if the component is a required field |
| autoFocus    | Boolean | No       | `false` | Automatically move the focus on input           |
| id           | String  | No       | `""`    | The ID of the DateInput component               |
| error        | String  | No       | `""`    | Error displayed under the label                 |
| hint         | String  | No       | `""`    | Hint displayed under the label                  |
| className    | String  | No       | `""`    | Custom className applied to component           |
| style        | Object  | No       | `{}`    | Custom style applied to component               |

The DateInput.Day, DateInput.Month and DateInput.Year components take the following props

| Name         | Type    | Required | Default          | Description                                   |
| ------------ | ------- | -------- | ---------------- | --------------------------------------------- |
| children     | Node    | Yes      |                  | Content to be displayed within component.     |
| required     | Boolean | No       | `false`          | Required toggle for that subcomponent         |
| label        | String  | No       | `Day|Month|Year` | Label for that component                      |
| autoComplete | String  | No       | `""`             | HTML autocomplete attribute for that element  |
| error        | Boolean | Yes      | `false`          | Toggle if there is an error in that component |
| className    | String  | No       | `""`             | Custom className applied to component         |
| style        | Object  | No       | `{}`             | Custom style applied to component             |

### Input

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/222).

#### Guidance

Find out more about the checkboxes component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/text-input).

#### Usage

```jsx
const App = () => (
    <Input name="ni-number" describedBy="national-insurance-hint" label="National Insurance Number" />
)
```

#### Props

The Input component takes the following props

| Name         | Type   | Required | Default     | Description                                          |
| ------------ | ------ | -------- | ----------- | ---------------------------------------------------- |
| children     | Node   | Yes      |             | Content to be displayed within component.            |
| id           | String | No       | `""`        | The ID of the input component                        |
| name         | String | No       | `""`        | The name of the input component                      |
| label        | String | No       | `""`        | The label displayed above the input                  |
| labelHtmLFor | String | No       | `""`        | A htmlFor for the label                              |
| autoComplete | String | No       | `""`        | HTML autocomplete attribute                          |
| placeholder  | String | No       | `""`        | Placeholder text shown on input                      |
| hint         | String | No       | `""`        | A hint displayed below the label                     |
| error        | String | No       | `""`        | An error displayed below the label                   |
| width        | Number | No       | `undefined` | The width of the input component (1 to 12 inclusive) |
| className    | String | No       | `""`        | Custom className applied to component                |
| style        | Object | No       | `{}`        | Custom style applied to component                    |

### InputBlock

The InputBlock is designed for when you have multiple input fields you want to group together.

#### Usage

```jsx
const App = () => (
    <InputBlock>
      <InputBlock.Input label="First names" name="first-name" width={10} />
      <InputBlock.Input label="Surname" name="surname" width={10} />
      <InputBlock.Input label="Previous surname/s" name="previous-surnames" width={10} />
    </InputBlock>
)
```

#### Props

The InputBlock component takes the following props:

| Name        | Type                             | Required | Default | Description                               |
| ----------- | -------------------------------- | -------- | ------- | ----------------------------------------- |
| children    | Node                             | Yes      |         | Content to be displayed within component. |
| heading     | String                           | No       | `""`    | The heading of the Input Block            |
| headingSize | One of `xs`, `s`, `m`, `l`, `xl` | No       | `m`     | The size of the heading (if provided)     |
| className   | String                           | No       | `""`    | Custom className applied to component     |
| style       | Object                           | No       | `{}`    | Custom style applied to component         |

The InputBlock.Input component takes the same props as the Input component.

### Radios

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/224).

#### Guidance

Find out more about the checkboxes component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/radios).

#### Usage

```jsx
const App = () => (
    <Radios
        name="radios-example"
        label="Have you changed your name?"
        hint="This includes changing your last name or spelling your name differently."
    >
        <Radios.Radio value="yes">Yes</Radios.Radio>
        <Radios.Divider>or</Radios.Divider>
        <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
)
```

#### Props

The Radios component takes the following props:

| Name         | Type    | Required | Default | Description                                                        |
| ------------ | ------- | -------- | ------- | ------------------------------------------------------------------ |
| children     | Node    | Yes      |         | Content to be displayed within component.                          |
| label        | String  | No       | `""`    | The label displayed above the component                            |
| labelHtmlFor | String  | No       | `""`    | The htmlFor for the label                                          |
| hint         | String  | No       | `""`    | The hint displayed beneath the label                               |
| error        | String  | No       | `""`    | The error displayed beneath the label                              |
| name         | String  | Yes      |         | The name of the component                                          |
| inline       | Boolean | No       | `false` | Toggle that changes whether the radio buttons are displayed inline |
| className    | String  | No       | `""`    | Custom className applied to component                              |
| style        | Object  | No       | `{}`    | Custom style applied to component                                  |

The Radios.Radio component takes the following props:

| Name      | Type    | Required | Default | Description                                   |
| --------- | ------- | -------- | ------- | --------------------------------------------- |
| children  | Node    | Yes      |         | Content to be displayed within component.     |
| disabled  | Boolean | No       | `false` | Toggles whether that radio button is disabled |
| hint      | String  | No       | `""`    | Hint displayed under the radio button text    |
| value     | String  | Yes      |         | Value of the Radio Button                     |
| className | String  | No       | `""`    | Custom className applied to component         |
| style     | Object  | No       | `{}`    | Custom style applied to component             |

The Radios.Divider component takes the following props:

| Name      | Type   | Required | Default | Description                               |
| --------- | ------ | -------- | ------- | ----------------------------------------- |
| children  | Node   | Yes      |         | Content to be displayed within component. |
| className | String | No       | `""`    | Custom className applied to component     |
| style     | Object | No       | `{}`    | Custom style applied to component         |

### Select

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/225).

#### Guidance

Find out more about the checkboxes component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/select).

#### Usage

```jsx
const App = () => (
    <Select name="select" label="Label text goes here">
        <Select.Item value={1}>NHS.UK frontend option 1</Select.Item>
        <Select.Item value={2} selected>
            NHS.UK frontend option 2
        </Select.Item>
        <Select.Item value={3} disabled>
            NHS.UK frontend option 3
        </Select.Item>
    </Select>
)
```

#### Props

The Select component takes the following props:

| Name         | Type    | Required | Default | Description                                                        |
| ------------ | ------- | -------- | ------- | ------------------------------------------------------------------ |
| children     | Node    | Yes      |         | Content to be displayed within component.                          |
| label        | String  | No       | `""`    | The label displayed above the component                            |
| labelHtmlFor | String  | No       | `""`    | The htmlFor for the label                                          |
| hint         | String  | No       | `""`    | The hint displayed beneath the label                               |
| error        | String  | No       | `""`    | The error displayed beneath the label                              |
| id           | String  | No       | `""`    | The ID of the select element                                       |
| inline       | Boolean | No       | `false` | Toggle that changes whether the radio buttons are displayed inline |
| className    | String  | No       | `""`    | Custom className applied to component                              |
| style        | Object  | No       | `{}`    | Custom style applied to component                                  |

The Select.Item component takes the following props:

| Name      | Type    | Required | Default | Description                                |
| --------- | ------- | -------- | ------- | ------------------------------------------ |
| children  | Node    | Yes      |         | Content to be displayed within component.  |
| disabled  | Boolean | No       | `false` | Toggles whether the item is disabled       |
| value     | String  | Yes      |         | Value of item                              |
| default   | Boolean | No       | `false` | Default selection for the Select component |
| className | String  | No       | `""`    | Custom className applied to component      |
| style     | Object  | No       | `{}`    | Custom style applied to component          |

### Textarea

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/226).

#### Guidance

Find out more about the textarea component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/textarea).

#### Usage

```jsx
const App = () => (
    <Textarea
        name="textarea-example"
        label="Can you provide more detail?"
        hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
    />
)
```

#### Props

The Textarea component takes the following props:

| Name         | Type   | Required | Default | Description                                       |
| ------------ | ------ | -------- | ------- | ------------------------------------------------- |
| children     | Node   | Yes      |         | Content to be displayed within component.         |
| label        | String | No       | `""`    | Label displayed above the component               |
| labelHtmlFor | String | No       | `""`    | htmlFor for the label                             |
| hint         | String | No       | `""`    | Hint displayed beneath the label                  |
| autoComplete | String | No       | `""`    | HTML autocomplete attribute                       |
| placeholder  | String | No       | `""`    | Placeholder text for the textarea                 |
| error        | String | No       | `""`    | Error displayed underneath the label              |
| rows         | Number | No       | `5`     | The number of rows that the textarea will take up |
| name         | String | Yes      |         | The name of the textarea element                  |
| id           | String | No       | `""`    | The ID of the textarea element                    |
| className    | String | No       | `""`    | Custom className applied to component             |
| style        | Object | No       | `{}`    | Custom style applied to component                 |