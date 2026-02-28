import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carrossel() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper
        style={{
          "--swiper-navigation-color": "#e1f3eb",
          "--swiper-pagination-color": "#e1f3eb",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} //
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <img
            src="./antes_depois.png"
            alt="Procedimento 1"
            className="rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="./antes_depois.png"
            alt="Procedimento 2"
            className="rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="./antes_depois.png"
            alt="Procedimento 3"
            className="rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
