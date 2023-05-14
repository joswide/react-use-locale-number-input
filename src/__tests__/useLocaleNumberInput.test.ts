import { renderHook } from "@testing-library/react";
import { useLocaleNumberInput } from "../useLocaleNumberInput";

describe("useLocaleNumberInput", () => {
  it("should return the hook params", async () => {
    const { result } = renderHook(() =>
      useLocaleNumberInput(1000.59, "de-DE", () => {})
    );

    expect(typeof result.current.handleBlur).toBe("function");
    expect(typeof result.current.handleBlur).toBe("function");
    expect(typeof result.current.value).toBe("string");
  });

  it("should return the hook params for de-DE", async () => {
    const { result } = renderHook(() =>
      useLocaleNumberInput(1000.59, "de-DE", () => {})
    );

    expect(result.current.value).toBe("1.000,59");
  });

  it("should return the hook params for en-US", async () => {
    const { result } = renderHook(() => useLocaleNumberInput(1000.59, 'en-US', () => {}));

    expect(result.current.value).toBe('1,000.59');
  });
});
