import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "./MainSlider.css";
// import style from "./MainSlider.module.scss";
import emptyCard from "./emptyCard.jpeg";

export function MainSlider() {
  return (
    <Swiper
      modules={[FreeMode, Pagination]}
      slidesPerView={3.5}
      spaceBetween={30}
      //   centeredSlides={true}
      pagination={{ clickable: true }}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={emptyCard} alt='fds' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={emptyCard} alt='fds' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={emptyCard} alt='fds' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={emptyCard} alt='fds' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={emptyCard} alt='fds' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={emptyCard} alt='fds' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={emptyCard} alt='fds' />
      </SwiperSlide>
    </Swiper>
  );
}
