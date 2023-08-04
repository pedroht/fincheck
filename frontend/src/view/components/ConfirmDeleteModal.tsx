import { Button } from "./Button";
import { Modal } from "./Modal";
import { TrashIcon } from "./icons/TrashIcon";

interface ConfirmDeleteModalProps {
  title: string;
  description?: string;
  isLoading: boolean;
  onClose(): void;
  onConfirm(): void;
}

export function ConfirmDeleteModal({
  onClose,
  onConfirm,
  title,
  description,
  isLoading,
}: ConfirmDeleteModalProps) {
  return (
    <Modal open title="Excluir" onClose={onClose}>
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-red-0">
          <TrashIcon className="h-6 w-6 text-red-900" />
        </div>

        <p className="w-[180px] font-bold tracking-tighter text-gray-800">
          {title}
        </p>

        {description && (
          <p className="tracking-tighter text-gray-800">{description}</p>
        )}
      </div>

      <div className="mt-10 space-y-4">
        <Button
          onClick={onConfirm}
          variant="danger"
          className="w-full"
          isLoading={isLoading}
        >
          Sim, desejo excluir
        </Button>

        <Button
          disabled={isLoading}
          onClick={onClose}
          variant="ghost"
          className="w-full"
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
