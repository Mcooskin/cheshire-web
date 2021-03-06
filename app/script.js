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

// Burger menu 

document.querySelector('.burger_menu').addEventListener('click', function() {

    let menuClose = document.querySelector('.menu_close');
    let menuOpen = document.querySelector('.menu_open');
    let mobileMenu = document.querySelector('.mobile_menu');
    
    if (menuClose.classList.contains('active')) {
        menuClose.classList.remove('active'); 
        menuOpen.classList.add('active');
        mobileMenu.classList.remove('visible');
    }
    else {
        menuClose.classList.add('active'); 
        menuOpen.classList.remove('active');
        mobileMenu.classList.add('visible');
    }
});

let mobileMenuLines = document.querySelectorAll('.mobile_menu_line');

for (let i = 0; i < mobileMenuLines.length; i++) {
    mobileMenuLines[i].addEventListener('click', function() {

        let mobileMenu = document.querySelector('.mobile_menu');
        mobileMenu.classList.remove('visible');

        let menuClose = document.querySelector('.menu_close');
        menuClose.classList.remove('active');

        let menuOpen = document.querySelector('.menu_open');
        menuOpen.classList.add('active');
    }
)};
    
// Subscription and contact form validation

function removeAlert(input) {
    input.classList.remove('alerted');    
    input.nextElementSibling.innerHTML = "";
}

function addAlert(input, text) {
    input.classList.add('alerted');
    input.nextElementSibling.innerHTML = text;
}

function validate(event) {

    event.preventDefault();

    let subscriptionForm = event.target;

    let firstName = subscriptionForm.querySelector('input[name=first_name]');
    let lastName = subscriptionForm.querySelector('input[name=last_name]');
    let phoneNumber = subscriptionForm.querySelector('input[name=phone_number]');

    removeAlert(firstName);
    removeAlert(lastName);
    removeAlert(phoneNumber);

    if (firstName.value.trim() === "") {
        addAlert(firstName, "Please, enter your first name");
    }

    if (lastName.value.trim() === "") {
        addAlert(lastName, "Please, enter your last name");
    }

    if (isNaN(phoneNumber.value) || phoneNumber.value.trim() === "") {
        addAlert(phoneNumber, "Please, enter your phone number");
    }
    else {
        firstName.value = "";
        lastName.value = "";
        phoneNumber.value = "";
    }
}

document.querySelector('.subscription_form').addEventListener('submit', validate);

document.querySelector('.contact_form').addEventListener('submit', validate);


