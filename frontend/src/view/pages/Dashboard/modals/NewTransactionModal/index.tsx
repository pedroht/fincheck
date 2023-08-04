import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DataPickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";

import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const {
    newTransactionType,
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    control,
    errors,
    register,
    handleSubmit,
    accounts,
    categories,
    isLoading,
  } = useNewTransactionModalController();

  const isIncome = newTransactionType === "INCOME";

  return (
    <Modal
      title={isIncome ? "Nova Receita" : "Nova Despesa"}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-xs tracking-tighter text-gray-600">
            Valor {isIncome ? "da Receita" : "da Despesa"}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-lg tracking-tighter text-gray-600">R$</span>

            <Controller
              control={control}
              defaultValue="0"
              name="value"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  onChange={onChange}
                  value={value}
                  error={errors.value?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder={isIncome ? "Nome da Receita" : "Nome da Despesa"}
            error={errors.name?.message}
            {...register("name")}
          />

          <Controller
            control={control}
            name="categoryId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Categoria"
                options={categories.map((category) => ({
                  value: category.id,
                  label: category.name,
                }))}
                onChange={onChange}
                value={value}
                error={errors.categoryId?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder={isIncome ? "Receber com" : "Pagar com"}
                options={accounts.map((account) => ({
                  value: account.id,
                  label: account.name,
                }))}
                onChange={onChange}
                value={value}
                error={errors.bankAccountId?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { onChange, value } }) => (
              <DatePickerInput
                onChange={onChange}
                value={value}
                error={errors.date?.message}
              />
            )}
          />
        </div>

        <Button isLoading={isLoading} type="submit" className="mt-6 w-full">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
