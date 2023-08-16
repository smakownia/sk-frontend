import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { NumberInputProps } from "./types";

export function useNumberInput(props: NumberInputProps) {
  const { value, onChange, min, max } = props;
  const [currentValue, setCurrentValue] = useState(value.toString());

  const isIncrementDisabled = useMemo(() => value === max, [value, max]);
  const isDecrementDisabled = useMemo(() => value === min, [value, min]);

  const updateValue = useCallback(
    (number: number) => {
      if (number < min || isNaN(number)) {
        setCurrentValue(min.toString());
        onChange(min);
      } else if (number >= min && number <= max) {
        setCurrentValue(number.toString());
        onChange(number);
      } else {
        setCurrentValue(max.toString());
        onChange(max);
      }
    },
    [onChange, max, min],
  );

  const incrementValue = useCallback(
    () => updateValue(value + 1),
    [updateValue, value],
  );

  const decrementValue = useCallback(
    () => updateValue(value - 1),
    [updateValue, value],
  );

  const inputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(e.currentTarget.value);
    },
    [setCurrentValue],
  );

  const inputBlurHandler = useCallback(() => {
    updateValue(parseInt(currentValue, 10));
  }, [updateValue, currentValue]);

  return {
    currentValue,
    isIncrementDisabled,
    isDecrementDisabled,
    incrementValue,
    decrementValue,
    inputChangeHandler,
    inputBlurHandler,
  };
}
