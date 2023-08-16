import { FormRoot } from "./form-root";
import { FormField } from "./form-field";
import { FormLabel } from "./form-label";
import { FormFields } from "./form-fields";
import { FormInput } from "./form-input";
import { FormErrorMessage } from "./form-error-message";
import { FormSubmit } from "./form-submit";
import { FormGlobalErrorMessage } from "./form-global-error-message";

export const Form = Object.assign(FormRoot, {
  Field: FormField,
  Label: FormLabel,
  Fields: FormFields,
  Input: FormInput,
  ErrorMessage: FormErrorMessage,
  Submit: FormSubmit,
  GlobalErrorMessage: FormGlobalErrorMessage,
});
