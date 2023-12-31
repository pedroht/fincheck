import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { ConfirmDeleteModal } from "../../../../components/ConfirmDeleteModal";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { TrashIcon } from "../../../../components/icons/TrashIcon";
import { useEditAccountModalController } from "./useEditAccountModalController";

export function EditAccountModal() {
  const {
    isEditAccountModalOpen,
    errors,
    control,
    isLoading,
    isDeleteModalOpen,
    isLoadingDelete,
    register,
    handleSubmit,
    closeEditAccountModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
  } = useEditAccountModalController();

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        isLoading={isLoadingDelete}
        title="Tem certeza que deseja excluir essa conta?"
        description="Ao excluir a conta, também serão excluídos todas os registros de
    receita e despesa relacionados."
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteAccount}
      />
    );
  }

  return (
    <Modal
      title="Editar Conta"
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
      rightAction={
        <button onClick={handleOpenDeleteModal}>
          <TrashIcon className="h-6 w-6 text-red-900" />
        </button>
      }
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-xs tracking-tighter text-gray-600">
            Saldo inicial
          </span>

          <div className="flex items-center gap-2">
            <span className="text-lg tracking-tighter text-gray-600">R$</span>

            <Controller
              control={control}
              name="initialBalance"
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  value={value}
                  onChange={onChange}
                  error={errors.initialBalance?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nome da Conta"
            error={errors.name?.message}
            {...register("name")}
          />

          <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Tipo"
                options={[
                  { label: "Conta Corrente", value: "CHECKING" },
                  { label: "Investimentos", value: "INVESTMENT" },
                  { label: "Dinheiro Físico", value: "CASH" },
                ]}
                value={value}
                onChange={onChange}
                error={errors.type?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                value={value}
                onChange={onChange}
                error={errors.color?.message}
              />
            )}
          />
        </div>

        <Button isLoading={isLoading} type="submit" className="mt-6 w-full">
          Salvar
        </Button>
      </form>
    </Modal>
  );
}
