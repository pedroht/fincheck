import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";
import { cn } from "../../app/utils/cn";

interface ModalProps {
  open: boolean;
  onClose?(): void;
  children: React.ReactNode;
  title: string;
  rightAction?: React.ReactNode;
}

export function Modal({
  open,
  onClose,
  children,
  title,
  rightAction,
}: ModalProps) {
  return (
    <Dialog.Root onOpenChange={onClose} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm",
            "data-[state=open]:animate-overlay-show",
          )}
        />

        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 shadow-[0_11px_20px_rgba(0,0,0,0.1)] outline-none",
            "data-[state=open]:animate-content-show",
          )}
        >
          <header className="flex h-12 items-center justify-between text-gray-800">
            <button
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center outline-none"
            >
              <Cross2Icon className="h-6 w-6" />
            </button>

            <span className="text-lg font-bold tracking-tightest">{title}</span>

            <div className="flex h-12 w-12 items-center justify-center">
              {rightAction}
            </div>
          </header>

          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
