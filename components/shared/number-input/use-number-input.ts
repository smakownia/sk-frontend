import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { NumberInputProps } from "./types";

export function useNumberInput(props: NumberInputProps) {
  const { value, onChange, min, max } = props;
  const [currentValue, setCurrentValue] = useState(value.toString());

  const isIncrementDisabled = useMemo(() => value === max, [value, max]);
  const isDecrementDisabled = useMemo(() => value === min, [value, min]);

  const updateValue = useCallback(
    (number: number) => {
      if (number < min || isNaN(number)) onChange(min);
      else if (number >= min && number <= max) onChange(number);
      else onChange(max);
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
  }, [updateValue, currentValue, value]);

  useEffect(() => {
    setCurrentValue(value.toString());
  }, [setCurrentValue, value]);

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
