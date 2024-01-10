import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';


// init Swiper:
const swiper = new Swiper('.swiper__examples', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    }
});

const swiperReview = new Swiper('.swiper-review', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    }
});
// let screenwidth = window.innerWidth;
// console.log(screenwidth);
