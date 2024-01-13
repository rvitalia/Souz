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


function burger(){
    const buttonBurger = document.querySelector('[data-burger]');
    const menuBurger = document.querySelector('[data-menu]');
    const menuLi = document.querySelectorAll('[data-animation]');

    buttonBurger.addEventListener('click', ()=>{
        if(menuBurger.classList.contains('active')){
            menuBurger.classList.remove('active');
            setTimeout(() => {
                menuLi.forEach(element => {
                    element.style.opacity = '0';
                });
            }, 300);
        }
        else{
            menuBurger.classList.add('active');
            setTimeout(() => {
                menuLi.forEach(element => {
                    element.style.opacity = '1';
                });
            }, 300);
        }
    })
    menuLi.forEach(element => {
        element.addEventListener('click', ()=>{
            menuBurger.classList.remove('active');
            setTimeout(() => {
                menuLi.forEach(element => {
                    element.style.opacity = '0';
                });
            }, 300);
        })
    });
}


burger();