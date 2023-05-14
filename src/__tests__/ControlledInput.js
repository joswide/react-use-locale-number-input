import React from "react";
import { useLocaleNumberInput } from "../useLocaleNumberInput";

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

export default ControlledInput;
