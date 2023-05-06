import './index.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';



slidersInit('.about__slider', {
    pagination:{
        el:'.about__slider-pagination',
    },
})
slidersInit('.career__slider', {
    pagination:{
        el:'.career__slider-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,            
        },
        1024: {            
            spaceBetween: 26,
        },
        1440: {   
            slidesPerView: 4,                     
            spaceBetween: 30,
        },
    },
})

const videoBg = document.querySelector('.video-bg');
videoBg.innerHTML = `
    <source src="video/video.webm" type="video/webm"></source>
    <source src="video/video.mp4" type="video/mp4"></source>
`;