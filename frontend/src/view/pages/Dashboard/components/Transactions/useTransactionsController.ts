import { useState } from "react";
import { useDashboard } from "../../../../../app/hooks/useDashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isLoading] = useState(false);

  return {
    areValuesVisible,
    isLoading
  }
}
