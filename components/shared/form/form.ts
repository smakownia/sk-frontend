import { FormRoot } from "./form-root";
import { FormField } from "./form-field";
import { FormLabel } from "./form-label";
import { FormInput } from "./form-input";
import { FormErrorMessage } from "./form-error-message";
import { FormSubmit } from "./form-submit";

export const Form = Object.assign(FormRoot, {
  Field: FormField,
  Label: FormLabel,
  Input: FormInput,
  ErrorMessage: FormErrorMessage,
  Submit: FormSubmit,
});
