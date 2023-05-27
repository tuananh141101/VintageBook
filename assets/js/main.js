// callAPi
// const API_URL = "https://websitebook-api.vercel.app/products";
// async function callAPI(API_URL) {
//     const response = await axios.get(API_URL);
//     const data = response.data;

//     showItem(data);
// };
// function showItem(data) {
//     data.sort(() => Math.random() - 0.5);
//     let html = ``;
//     const IMG_PATH = `https://websitebook-api.vercel.app`;

//     const cardItem = document.querySelectorAll('.cardItem');
//     data.forEach((item) => {
//         html += `
//         <div class="owl-item">
//         <a href="./pagehtml/detailProduct.html" class="cardItem">
//                     <div class="item card">
//                         <div class="img-item">
//                             <img src="${IMG_PATH}${item.image}" alt="">
//                     </div>
//                     <div class="title-item">
//                         <h2 class="name">${item.name}</h2>
//                         <p class="price">${item.price}$</p>
//                         <p class="author">${item.author}<p>
//                     </div>
//             </div>
//         </a>
//         </div>
//         `;
//     });
//     const owlStage = document.querySelector('.owl-stage');
//     console.log(owlStage);
//     owlStage.innerHTML = html;
// };

// callAPI(API_URL);



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
const productCarousel = $('.products__container > .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay:false,
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
});

// EventPage product
const eventCarousel = $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});


