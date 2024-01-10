import Swiper from "swiper";
import { Navigation } from 'swiper/modules';


// init Swiper:
const swiper = new Swiper('.swiper__examples', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperReview = new Swiper('.swiper-review', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});