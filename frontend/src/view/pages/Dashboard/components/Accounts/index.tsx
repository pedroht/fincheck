import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { PlusIcon } from "@radix-ui/react-icons";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Spinner } from "../../../../components/Spinner";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { SliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";

export function Accounts() {
  const {
    sliderState,
    windowWidth,
    areValuesVisible,
    isLoading,
    accounts,
    setSliderState,
    toggleValueVisibility,
    openNewAccountModal,
  } = useAccountsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      {isLoading && (
        <div className="grid h-full w-full place-items-center">
          <Spinner className="h-10 w-10 fill-white text-teal-950/50" />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className="block tracking-tighter text-white">
              Saldo total
            </span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-tightest text-white",
                  !areValuesVisible && "blur-md",
                )}
              >
                {formatCurrency(1000)}
              </strong>

              <button
                className="flex h-8 w-8 items-center justify-center"
                onClick={toggleValueVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
            {accounts.length === 0 && (
              <>
                <div className="mb-4">
                  <strong className="text-lg font-bold tracking-tightest text-white">
                    Minhas contas
                  </strong>
                </div>

                <button
                  className="flex h-52 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-teal-600 text-white transition-colors hover:bg-teal-950/5"
                  onClick={openNewAccountModal}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-white">
                    <PlusIcon className="h-6 w-6" />
                  </div>

                  <span className="block w-32 text-center font-medium tracking-tighter">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}
                >
                  <div
                    slot="container-start"
                    className="mb-4 flex items-center justify-between"
                  >
                    <strong className="text-lg font-bold tracking-tightest text-white">
                      Minhas contas
                    </strong>

                    <SliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>

                  <div>
                    <SwiperSlide>
                      <AccountCard
                        name="Nubank"
                        color="#ffcc00"
                        balance={1000.23}
                        type="CHECKING"
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <AccountCard
                        name="XP"
                        color="#ffcc00"
                        balance={1000.23}
                        type="INVESTMENT"
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <AccountCard
                        name="Carteira"
                        color="#ffcc00"
                        balance={1000.23}
                        type="CASH"
                      />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
