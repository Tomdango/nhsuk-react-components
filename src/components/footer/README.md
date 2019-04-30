# Footer

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/168).

## Guidance

Find out more about the fieldset component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/footer).

### JSX markup

```jsx
import Footer from 'nhsuk-react-components/lib/components/footer';
// [OR]
import { Footer } from 'nhsuk-react-components';

const App = () => (
    <Footer>
        <Footer.Link href="https://www.nhs.uk/Pages/nhs-sites.aspx">NHS sites</Footer.Link>
        <Footer.Link href="https://www.nhs.uk/about-us">About us</Footer.Link>
        <Footer.Link href="https://www.nhs.uk/contact-us/">Contact us</Footer.Link>
        <Footer.Link href="https://www.nhs.uk/about-us/sitemap/">Sitemap</Footer.Link>
        <Footer.Link href="https://www.nhs.uk/our-policies/">Our policies</Footer.Link>
        <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
    </Footer>
);
```

### Props

#### Footer Props

The Footer component takes the following props:

| Name                    | Type   | Required | Default         | Description                                                   |
| ----------------------- | ------ | -------- | --------------- | ------------------------------------------------------------- |
| children                | Node   | Yes      |                 | Content to be displayed within component.                     |
| id                      | String | No       | `nhsuk-footer`  | The ID of the footer element                                  |
| role                    | String | No       | `contentinfo`   | The HTML role of the footer element                           |
| linksVisuallyHiddenText | String | No       | `Support links` | The visually hidden text before the links (if links provided) |
| className               | String | No       | `""`            | Custom className applied to component                         |
| style                   | Object | No       | `{}`            | Custom style applied to component                             |

The Footer.Link component takes the following props:

| Name            | Type     | Required | Default    | Description                                           |
| --------------- | -------- | -------- | ---------- | ----------------------------------------------------- |
| children        | Node     | Yes      |            | Content to be displayed within component.             |
| href            | String   | No       | `#`        | Href value of link                                    |
| onClick         | Function | No       | `() => {}` | Function called on link click                         |
| openInNewWindow | Boolean  | No       | `false`    | If set to `true`, the link will open a new tab/window |
| className       | String   | No       | `""`       | Custom className applied to component                 |
| style           | Object   | No       | `{}`       | Custom style applied to component                     |

The Footer.Copyright component takes the following props:

| Name      | Type   | Required | Default | Description                               |
| --------- | ------ | -------- | ------- | ----------------------------------------- |
| children  | Node   | Yes      |         | Content to be displayed within component. |
| className | String | No       | `""`    | Custom className applied to component     |
| style     | Object | No       | `{}`    | Custom style applied to component         |
