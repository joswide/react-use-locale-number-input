import { useState } from "react";

const REGEX = /\p{Number}/gu;

const getSeparators = (locale: string) => {
  const format = Intl.NumberFormat(locale);

  return {
    thousandSeparator: format.format(11111).replace(REGEX, ""),
    decimalSeparator: format.format(1.1).replace(REGEX, ""),
  };
};

const stringToLocaleNumber = (stringNumber: string, locale: string) => {
  const { thousandSeparator, decimalSeparator } = getSeparators(locale);

  return parseFloat(
    stringNumber
      .replace(new RegExp("\\" + thousandSeparator, "g"), "")
      .replace(new RegExp("\\" + decimalSeparator), ".")
  );
};

export const numberToLocaleString = (number: number, locale: string) => {
  return new Intl.NumberFormat(locale, {}).format(number);
};

export const useLocaleNumberInput = (
  value: number,
  locale: string,
  onChange: (value: number) => void
) => {
  const [dirty, setDirty] = useState(numberToLocaleString(value, locale));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = stringToLocaleNumber(event.target.value, locale);

    setDirty(event.target.value);
    onChange(isNaN(number) ? 0 : number);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const number = stringToLocaleNumber(event.target.value, locale);

    if (isNaN(number)) {
      setDirty("0");
      onChange(0);
      return;
    }

    setDirty(numberToLocaleString(number, locale));
    onChange(number);
  };

  const stringValue = numberToLocaleString(value, locale);
  const display = stringValue === dirty ? stringValue : dirty;

  return {
    handleChange,
    handleBlur,
    value: display,
  };
};
