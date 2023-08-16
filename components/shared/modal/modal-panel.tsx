import { ComponentProps, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export function ModalPanel({ ref, ...rest }: ComponentProps<"div">) {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-150"
      enterFrom="opacity-0 -translate-y-10"
      enterTo="opacity-100 translate-y-0"
      leave="ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-10"
    >
      <div className="container z-10 absolute inset-0 top-20 flex justify-center items-start">
        <Dialog.Panel {...rest} />
      </div>
    </Transition.Child>
  );
}
