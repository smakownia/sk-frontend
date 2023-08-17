import { useCallback } from "react";
import * as yup from "yup";
import { Form, Modal } from "@/components";
import { useRegisterMutation } from "@/features/identity";
import { useRegisterFormModal } from "../register-form-modal-context";

type RegisterFormValues = {
  email: string;
  password: string;
};

const defaultValues: RegisterFormValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email jest wymagany")
    .email("Email jest niepoprawny"),
  password: yup
    .string()
    .required("Hasło jest wymagane")
    .min(8, "Hasło musi składać się z przynajmniej 8 znaków"),
});

export function RegisterFormModal() {
  const registerFormModal = useRegisterFormModal();
  const { mutateAsync: register, isLoading, isError } = useRegisterMutation();

  const submitHandler = useCallback(
    async (values: RegisterFormValues) => {
      try {
        await register(values);
        registerFormModal.close();
      } catch {}
    },
    [register, registerFormModal],
  );

  return (
    <Modal
      className="w-[28rem] p-8 rounded bg-white"
      isOpen={registerFormModal.isOpen}
      onClose={registerFormModal.close}
    >
      <Form
        defaultValues={defaultValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <h2 className="text-4xl font-medium">Zarejestruj się</h2>

        <span className="text-sm text-neutral-600">
          Zaloguj się jako admin email: aruzo@aruzo.it hasło: aruzo123 następnie
          kliknij ikone użytkownika i &quotpanel admina&quot
        </span>

        <Form.GlobalErrorMessage show={isError}>
          Nie udało się zarejestrować (email może należeć do innego konta)
        </Form.GlobalErrorMessage>

        <Form.Fields>
          <Form.Field name="email" isRequired>
            <Form.Label>Email</Form.Label>
            <Form.Input placeholder="Email" autoComplete="email" />
            <Form.ErrorMessage />
          </Form.Field>

          <Form.Field name="password" isRequired>
            <Form.Label>Hasło</Form.Label>
            <Form.Input
              type="password"
              placeholder="Hasło"
              autoComplete="new-password"
            />
            <Form.ErrorMessage />
          </Form.Field>
        </Form.Fields>

        <Form.Submit size="lg" isLoading={isLoading}>
          Zarejestruj się
        </Form.Submit>
      </Form>
    </Modal>
  );
}
