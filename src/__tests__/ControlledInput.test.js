import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ControlledInput from "./ControlledInput";

test("testing input", async () => {
  const { getByDisplayValue } = render(<ControlledInput />);
  getByDisplayValue("10.000");
});

test("value change after perform a blur", () => {
  const { getByDisplayValue } = render(<ControlledInput />);

  const input = getByDisplayValue("10.000");

  fireEvent.change(input, { target: { value: "5123,89" } });
  fireEvent.blur(input);

  getByDisplayValue("5.123,89");

  fireEvent.change(input, { target: { value: "1.324,89" } });
  fireEvent.blur(input);

  getByDisplayValue("1.324,89");
});
