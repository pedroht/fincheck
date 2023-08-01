import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

import { PlusIcon } from '@radix-ui/react-icons';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { Spinner } from '../../../../components/Spinner';
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from "./useAccountsController";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading,
    accounts
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isLoading && (
        <div className='h-full w-full grid place-items-center'>
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className="text-white tracking-[-0.5px] block">Saldo total</span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-[-1px] text-white",
                  !areValuesVisible && "blur-md"
                )}
              >
                {formatCurrency(1000)}
              </strong>

              <button
                className="flex items-center justify-center w-8 h-8"
                onClick={toggleValueVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            {accounts.length === 0 && (
              <>
                <div className="mb-4">
                  <strong className="text-white tracking-[-1px] text-lg font-bold">
                    Minhas contas
                  </strong>
                </div>

                <button
                  className='h-52 border-2 border-dashed border-teal-600 rounded-2xl flex flex-col items-center justify-center gap-4 text-white hover:bg-teal-950/5 transition-colors'
                >
                  <div className='w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center'>
                    <PlusIcon className='w-6 h-6' />
                  </div>

                  <span className="font-medium tracking-[-0.5px] w-32 text-center block">
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
                  onSlideChange={swiper => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd
                    })
                  }}
                >
                  <div slot="container-start" className="flex items-center justify-between mb-4">
                    <strong className="text-white tracking-[-1px] text-lg font-bold">
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
  )
}
