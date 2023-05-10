// Search-icon 
const form = document.querySelector('.form');
const input = document.querySelector('#search-input');
const iconSearch = document.querySelector('.search-icon');

document.addEventListener('click', (event) => {
    const isClickInside = input.contains(event.target) || iconSearch.contains(event.target);
    if(!isClickInside) {input.classList.remove('active-search-icon');}
});
iconSearch.addEventListener('click', () => {
    input.classList.toggle("active-search-icon")
});


form.addEventListener('submit', () => {
    const valueInput = input.value;
    if (valueInput && valueInput !== '') {
        console.log(valueInput);
    } else {
        alert("Please enter name of books");
    }
});
// Them bam vao window thi dong search

// Header-scroll
const headerScroll = document.querySelector('.header');

window.addEventListener('scroll', () => {
    headerScroll.classList.add("active-header-scroll");
});

// Overlay-menu
const overlayMenu = document.querySelector('.overlay-menu');
const barIcon = document.querySelector('.bars-icon');
const closeOverlay = document.querySelector('.overlay-menu p');

barIcon.addEventListener('click', () => {
    overlayMenu.classList.add("active-overlay");
});

closeOverlay.addEventListener('click', ()=> {
    overlayMenu.classList.remove('active-overlay');
});

// product-slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        1000: {
            items:4
        },
        1200:{
            items:5
        }
    }
})