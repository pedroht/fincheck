import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";

const schema = z.object({
  initialBalance: z.string().nonempty("Saldo inicial é obrigatório"),
  name: z.string().nonempty("Nome da conta é obrigatório"),
  type: z.enum(["INVESTMENT", "CHECKING", "CASH"]),
  color: z.string().nonempty("Cor é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();
  const { isLoading, mutateAsync } = useMutation(bankAccountsService.create);

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });

      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });

      toast.success("Conta cadastrada com sucesso!");
      closeNewAccountModal();
      reset();
    } catch {
      toast.error("Erro ao cadastrar a conta!");
    }
  });

  return {
    isNewAccountModalOpen,
    errors,
    control,
    isLoading,
    closeNewAccountModal,
    register,
    handleSubmit,
  };
}
