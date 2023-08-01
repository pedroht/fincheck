import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { useAccountsController } from "./useAccountsController";

export function Accounts() {
  const { sliderState, setSliderState, windowWidth } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <div>
        <span className="text-white tracking-[-0.5px] block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>

          <button className="flex items-center justify-center w-8 h-8">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
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

              <AccountsSliderNavigation
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
      </div>
    </div>
  )
}
