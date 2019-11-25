# **Kiwi Kit**

Reading list:

- [TypeScript](https://www.typescriptlang.org/) (Provides living documentation)
- [TSDX](https://github.com/jaredpalmer/tsdx) (CLI for TypeScript packages)
- [Atomic Design](http://atomicdesign.bradfrost.com/) (Methodology for crafting design systems)
- [Styled System](https://styled-system.com/) (Used to build `quarks`)
- [React Use](https://github.com/streamich/react-use) (Lodash for React Hooks)

## **Components**

### **Grid layout**

Base components for creating layouts.

- **`Container`** - provide a means to center and horizontally pad your app’s contents. Comes with specified `max-width` that includes default `gutter` paddings.
- **`Row`** - Rows are wrappers for columns. Each column has horizontal padding (called a `gutter`) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side. Only `columns` may be immediate children of rows.
- **`Col`** inherit it's `gutter` from parent `Row`. It accept all `styled-system` props (_cought_ `width`) instead of predefined `12` or `24` magical numbers presented in bootstrap or material ui.

#### Example

```
<Container>
  <Row>
    <Col width={0.5}> ... </Col>
    <Col width={1/2}> ... </Col>
  </Row>
  <Row>
    <Col width={6/12}> ... </Col>
    <Col width={12/24}> ... </Col>
  </Row>
  <Row>
    <Col width="calc(50% - 300px)"> ... </Col>
    <Col width="300px"> ... </Col>
  </Row>
  <Row>
    <Col width={[1, 0.5, 0.75]}> ... </Col>
    <Col width={[1, 0.5, 0.25]}> ... </Col>
  </Row>
</Container>
```

### **Loader**

`Loader` component with three variants `DEFAULT` _(bluish)_, `LIGHT` and `DARK`.
Comes with predefined `absolute` set to `true` that is used to center him inside it's closest parent with `position:relative;`
