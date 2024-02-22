import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import style from'./MainSlider.module.scss'
import emptyCard from './emptyCard.jpeg'


export function MainSlider(){
    return(
        <Swiper
            modules={[Pagination]}
            slidesPerView={5}
            spaceBetween={50}
            centeredSlides={true}
            pagination={{clickable: true}}
            className={style.mySwiper}
        >

            <SwiperSlide><img src={emptyCard} alt="fds"/>1</SwiperSlide>
            <SwiperSlide><img src={emptyCard} alt="fds"/>2</SwiperSlide>
            <SwiperSlide><img src={emptyCard} alt="fds"/>3</SwiperSlide>
            <SwiperSlide><img src={emptyCard} alt="fds"/>4</SwiperSlide>
            <SwiperSlide><img src={emptyCard} alt="fds"/>5</SwiperSlide>
            <SwiperSlide><img src={emptyCard} alt="fds"/>6</SwiperSlide>
            <SwiperSlide><img src={emptyCard} alt="fds"/>7</SwiperSlide>
        </Swiper>
    )
}
