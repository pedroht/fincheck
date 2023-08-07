import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "../../../../../../app/utils/cn";
import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";
import { useFiltersModalController } from "./useFiltersModalController";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
  onApplyFilters(filters: {
    bankAccountId: string | undefined;
    year: number;
  }): void;
}

export function FiltersModal({
  open,
  onClose,
  onApplyFilters,
}: FiltersModalProps) {
  const {
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
    accounts,
  } = useFiltersModalController();

  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <div>
        <span className="text-lg font-bold tracking-tightest text-gray-800">
          Conta
        </span>

        <div className="mt-2 space-y-2">
          {accounts.map((account) => (
            <button
              key={account.id}
              onClick={() => handleSelectBankAccount(account.id)}
              className={cn(
                "w-full rounded-2xl p-2 text-left text-gray-800 transition-colors hover:bg-gray-50",
                account.id === selectedBankAccountId && "!bg-gray-200",
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className="text-lg font-bold tracking-tightest">Ano</span>

        <div className="mt-2 flex w-52 items-center justify-between">
          <button
            className="flex h-12 w-12 items-center justify-center"
            onClick={() => handleChangeYear(-1)}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-tighter">
              {selectedYear}
            </span>
          </div>

          <button
            className="flex h-12 w-12 items-center justify-center"
            onClick={() => handleChangeYear(1)}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Button
        className="mt-10 w-full"
        onClick={() =>
          onApplyFilters({
            bankAccountId: selectedBankAccountId,
            year: selectedYear,
          })
        }
      >
        Aplicar Filtros
      </Button>
    </Modal>
  );
}
