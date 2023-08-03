import { useDashboard } from "../../../../../app/hooks/useDashboard";

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  } = useDashboard();

  return {
    newTransactionType,
    isNewTransactionModalOpen,
    closeNewTransactionModal,
  };
}
