import { useState } from "react";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useTransactions } from "../../../../../app/hooks/useTransactions";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const { transactions, isLoading, isInitialLoading  } = useTransactions()

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isFiltersModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
  };
}
