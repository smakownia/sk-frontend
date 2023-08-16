import { Dialog, Transition } from "@headlessui/react";
import { ComponentProps, Fragment, ReactNode } from "react";
import { ModalOverlay } from "./modal-overlay";
import { ModalPanel } from "./modal-panel";

type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
} & ComponentProps<"div">;

export function Modal({ isOpen, onClose, ...rest }: ModalProps) {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="z-20 fixed inset-0 w-full h-full"
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalPanel {...rest} />
      </Dialog>
    </Transition.Root>
  );
}
