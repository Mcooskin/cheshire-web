'use strict';

// Initializing swiper for reviews section

var reviewSwiper = new Swiper ('.reviews-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 120,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})

// Gallery section slides

let navBlocks = document.querySelectorAll('.nav_block');
let gallerySlides = document.querySelectorAll('.gallery_slide');

for (let i = 0; i < navBlocks.length; i++) {
    navBlocks[i].addEventListener('click', function() {
        
        for (let z = 0; z < navBlocks.length; z++) {
            navBlocks[z].classList.remove('active');
        }
        
        this.classList.add('active');


        // Get data-target value
        let targetSlide = this.dataset.target; // 1, 2, 3

        // Select feature-block elements by data-slide value
        let slide = document.querySelector('.gallery_slide[data-slide="'+ targetSlide +'"]');


        for (let x = 0; x < gallerySlides.length; x++) {
            gallerySlides[x].classList.remove('active');
        }

        slide.classList.add('active');
        
    });
}

