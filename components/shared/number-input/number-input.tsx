import { Button, MinusIcon, PlusIcon } from "@/components";
import { NumberInputProps } from "./types";
import { useNumberInput } from "./use-number-input";

export function NumberInput(props: NumberInputProps) {
  const {
    currentValue,
    isIncrementDisabled,
    isDecrementDisabled,
    incrementValue,
    decrementValue,
    inputChangeHandler,
    inputBlurHandler,
  } = useNumberInput(props);

  return (
    <div className="flex w-fit rounded divide-x divide-neutral-100 border border-neutral-100">
      <Button
        className="w-6 h-6 p-0 rounded-tr-none rounded-br-none"
        colorScheme="white"
        onClick={decrementValue}
        disabled={isDecrementDisabled}
      >
        <MinusIcon className="w-3 h-3" />
      </Button>
      <input
        className="w-6 h-6 text-center focus:outline-none"
        value={currentValue}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
      />
      <Button
        className="w-6 h-6 p-0 rounded-tl-none rounded-bl-none"
        colorScheme="white"
        onClick={incrementValue}
        disabled={isIncrementDisabled}
      >
        <PlusIcon className="w-3 h-3" />
      </Button>
    </div>
  );
}
