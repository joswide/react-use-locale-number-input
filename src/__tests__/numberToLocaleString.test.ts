import { numberToLocaleString } from "../useLocaleNumberInput";

describe("numberToLocaleString", () => {
  it("should format de-DE location", async () => {
    expect(numberToLocaleString(1, "de-DE")).toBe("1");
    expect(numberToLocaleString(1000, "de-DE")).toBe("1.000");
    expect(numberToLocaleString(1000.01, "de-DE")).toBe("1.000,01");
  });
});
