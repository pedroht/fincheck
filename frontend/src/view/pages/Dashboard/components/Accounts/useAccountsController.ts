import { useState } from "react";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValueVisibility } = useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  })

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility
  }
}
