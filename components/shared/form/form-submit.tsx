import { ComponentProps, forwardRef } from "react";
import { Button } from "@/components";

type FormSubmitProps = ComponentProps<typeof Button>;

export const FormSubmit = forwardRef<HTMLButtonElement, FormSubmitProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Button ref={ref} type="submit" {...rest}>
        {children ? children : "Submit"}
      </Button>
    );
  },
);

FormSubmit.displayName = "Form.Submit";
