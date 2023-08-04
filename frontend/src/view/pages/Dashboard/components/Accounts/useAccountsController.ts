import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValueVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { data, isFetching } = useQuery({
    queryKey: ["bankAccounts"],
    queryFn: bankAccountsService.getAll,
  });

  const currentBalance = useMemo(() => {
    if (!data) return 0;

    return data.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);
  }, [data]);

  return {
    sliderState,
    windowWidth,
    areValuesVisible,
    isLoading: isFetching,
    accounts: data ?? [],
    currentBalance,
    setSliderState,
    toggleValueVisibility,
    openNewAccountModal,
  };
}
