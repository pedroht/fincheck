import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DataPickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";

import { useNewTransactionModalController } from "./useNewTransactionModalController";

interface NewTransactionModalProps {
  x?: string;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  const {
    newTransactionType,
    isNewTransactionModalOpen,
    closeNewTransactionModal,
  } = useNewTransactionModalController();

  const isIncome = newTransactionType === "INCOME";

  console.log(props);

  return (
    <Modal
      title={isIncome ? "Nova Receita" : "Nova Despesa"}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-xs tracking-tighter text-gray-600">
            Valor {isIncome ? "da Receita" : "da Despesa"}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-lg tracking-tighter text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isIncome ? "Nome da Receita" : "Nome da Despesa"}
          />

          <Select
            placeholder="Categoria"
            options={[
              { label: "Conta Corrente", value: "CHECKING" },
              { label: "Investimentos", value: "INVESTIMENT" },
              { label: "Dinheiro Físico", value: "CASH" },
            ]}
          />

          <Select
            placeholder={isIncome ? "Receber com" : "Pagar com"}
            options={[
              { label: "Conta Corrente", value: "CHECKING" },
              { label: "Investimentos", value: "INVESTIMENT" },
              { label: "Dinheiro Físico", value: "CASH" },
            ]}
          />

          <DatePickerInput />
        </div>

        <Button type="submit" className="mt-6 w-full">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
