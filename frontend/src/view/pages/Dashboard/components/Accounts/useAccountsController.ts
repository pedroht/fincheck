import { useState } from "react";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValueVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const [isLoading] = useState(false);

  return {
    sliderState,
    windowWidth,
    areValuesVisible,
    isLoading,
    accounts: [],
    setSliderState,
    toggleValueVisibility,
    openNewAccountModal,
  };
}
