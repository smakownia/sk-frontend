import { ComponentProps, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Overlay } from "./overlay";
import { Panel } from "./panel";

type DrawerProps = ComponentProps<"aside"> & {
  isOpen: boolean;
  onClose: () => void;
};

export function Drawer({ isOpen, onClose, ...rest }: DrawerProps) {
  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="z-20 fixed inset-0 w-full h-full"
        onClose={onClose}
      >
        <Overlay />
        <Panel {...rest} />
      </Dialog>
    </Transition>
  );
}
