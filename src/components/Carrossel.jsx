import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carrossel({ caminho }) {
  return (
    <div className="w-full mx-auto max-w-md lg:py-8">
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
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide>
          <img
            src={caminho[0]}
            alt="Imagem 1"
            className="rounded-lg w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={caminho[1]}
            alt="Imagem 2"
            className="rounded-lg w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={caminho[2]}
            alt="Imagem 3"
            className="rounded-lg w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={caminho[3]}
            alt="Imagem 3"
            className="rounded-lg w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={caminho[4]}
            alt="Imagem 3"
            className="rounded-lg w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
