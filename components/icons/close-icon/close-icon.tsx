import { ComponentProps } from "react";

export function CloseIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M1 13L13 1ZM1 1L13 13Z" fill="black" />
      <path
        d="M1 13L13 1M1 1L13 13"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
