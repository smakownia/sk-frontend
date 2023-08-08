import { ComponentProps, ReactNode } from "react";
import { ObjectSchema } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultValues, FormProvider, useForm } from "react-hook-form";
import { useMergedClassName } from "@/hooks";

type FormRootProps<T extends Record<string, any>> = {
  defaultValues: DefaultValues<T>;
  validationSchema: ObjectSchema<any, any, any, "">;
  onSubmit: (values: T) => void;
  children: ReactNode;
} & Omit<ComponentProps<"form">, "onSubmit">;

export function FormRoot<T extends Record<string, any>>(
  props: FormRootProps<T>,
) {
  const {
    children,
    className,
    defaultValues,
    validationSchema,
    onSubmit,
    ...rest
  } = props;

  const classNameMarged = useMergedClassName(
    "flex flex-col w-96 gap-4",
    className,
  );

  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      className={classNameMarged}
      onSubmit={form.handleSubmit(onSubmit)}
      {...rest}
    >
      <FormProvider {...form}>{children}</FormProvider>
    </form>
  );
}
