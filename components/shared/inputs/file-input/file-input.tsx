import { ComponentProps, forwardRef } from "react";

type FileInputProps = ComponentProps<"input">;

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (props, ref) => {
    return <input ref={ref} type="file" {...props} />;
  },
);

FileInput.displayName = "FileInput";
