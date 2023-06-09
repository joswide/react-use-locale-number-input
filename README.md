[![Node.js CI](https://github.com/joswide/react-use-locale-number-input/actions/workflows/node.js.yml/badge.svg)](https://github.com/joswide/react-use-locale-number-input/actions/workflows/node.js.yml)
[![npm version](https://badge.fury.io/js/react-use-locale-number-input.svg)](https://www.npmjs.com/package/react-use-locale-number-input)

# react-use-locale-number-input

### Description

`react-use-locale-number-input` is a React hook that formats and parses number inputs based on the provided locale.

### Example

```js
import React from "react";
import { useLocaleNumberInput } from "react-use-locale-number-input";

function ControlledInput() {
  const [value, onChange] = React.useState("10000");

  const {
    value: displayValue,
    handleBlur,
    handleChange,
  } = useLocaleNumberInput(value, "de-DE", onChange);

  return (
    <input onBlur={handleBlur} value={displayValue} onChange={handleChange} />
  );
}
```

### Tests

```bash
npm run test
```

### Docs

See [https://joswide.com](https://joswide.com) for more details
