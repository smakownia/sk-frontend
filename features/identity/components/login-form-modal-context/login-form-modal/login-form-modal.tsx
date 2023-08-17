import { useCallback } from "react";
import * as yup from "yup";
import { Form, Modal } from "@/components";
import { useLoginMutation } from "@/features/identity";
import { useLoginFormModal } from "../login-form-modal-context";

type LoginFormValues = {
  email: string;
  password: string;
};

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().required("Email jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});

export function LoginFormModal() {
  const loginFormModal = useLoginFormModal();
  const { mutateAsync: login, isLoading, isError } = useLoginMutation();

  const submitHandler = useCallback(
    async (values: LoginFormValues) => {
      try {
        await login(values);
        loginFormModal.close();
      } catch {}
    },
    [login, loginFormModal],
  );

  return (
    <Modal
      className="w-[28rem] p-8 rounded bg-white"
      isOpen={loginFormModal.isOpen}
      onClose={loginFormModal.close}
    >
      <Form
        defaultValues={defaultValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <h2 className="text-4xl font-medium">Zaloguj się</h2>

        <span className="text-sm text-neutral-600">
          Zaloguj się jako admin email: aruzo@aruzo.it hasło: aruzo123 następnie
          kliknij ikone użytkownika i &quotpanel admina&quot
        </span>

        <Form.GlobalErrorMessage show={isError}>
          Nie udało się zalogować
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
              placeholder="Min. 8 znaków"
              autoComplete="current-password"
            />
            <Form.ErrorMessage />
          </Form.Field>
        </Form.Fields>

        <Form.Submit size="lg" isLoading={isLoading}>
          Zaloguj się
        </Form.Submit>
      </Form>
    </Modal>
  );
}
