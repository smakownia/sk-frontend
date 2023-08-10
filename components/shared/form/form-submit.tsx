import { ComponentProps } from "react";
import { Button } from "@/components";

type FormSubmitProps = ComponentProps<typeof Button>;

export function FormSubmit({ children, ...rest }: FormSubmitProps) {
  return (
    <Button type="submit" {...rest}>
      {children ? children : "Submit"}
    </Button>
  );
}
