# Form

The FormWrapper renders only a basic wrapper for the form, but it contains functions that are automatically passed to other form components. This allows the Form object to act as a central state store for the form, and exposing the onSubmit and onChange functions centrally for the whole form. All NHSUK React Form components will automatically "call-back" and register with the central form object, updating it's state. They also automatically pass down changes to the central form object, so everything should work fairly intuitively.

## Technical Documentation

When the Form renders, it maps over it's children and checks for any NHSUK React Form components. If it finds them, it creates a clone of that component, with the additional `valueCallback` and `registerInitialValue` functions, as well as some helpers such as `elementMargin` which sets up spacing for the components. The NHSUK React Form components then call the `registerInitialValue` function with the form element name and the initial value of that element. On every change, they call the `valueCallback` function, again with the name and initial value.