const API_URL = "https://websitebook-api.vercel.app/products";

async function callAPI(API_URL) {
    const response = await axios.get(API_URL);
    let data = response.data; 

    let dataFilter = data; 
    const filter = document.querySelector(".filter");

    showItem(dataFilter);
    
    filter.addEventListener('submit', function filterItem(event) {
        event.preventDefault();
        let valueFilter = event.target.elements;
        dataFilter = data.filter(item => {

            // Check author
            if (valueFilter.Author.value != '') {
                if (item.author != valueFilter.Author.value) {return false}
                return true;
            }

            // Check category
            if (valueFilter.category.value != '') {
                if (!item.categories.includes(valueFilter.category.value)) {return false;}
                return true;
            }

            // Check name book
            if (valueFilter.name.value != '') {
                if (!item.name.includes(valueFilter.name.value)) {return false}
                return true
            }

            // Check minprice
            if (valueFilter.minPrice.value != '') {
                if (item.price < valueFilter.minPrice.value) {return false}
                return true
            }

            // Check maxprice
            if (valueFilter.maxPrice.value != '') {
                if (item.price > valueFilter.maxPrice.value) {return false}
                return true
            }

            return true;
        });
        showItem(dataFilter);
        let resetFilter = document.getElementById("reset-filter");
        resetFilter.addEventListener('click', () => {location.reload()});
    });

}

function showItem(dataFilter) {
    let html = ``;
    let count = document.querySelector(".count");
    dataFilter.forEach((item) => {
        const IMG_PATH = "https://websitebook-api.vercel.app";
        html += `
        <a href="../pagehtml/detailProduct.html?id=${item.id}" class="item">
            <img src="${IMG_PATH}${item.image}" alt="">
            <p class="name">${item.name}</p>
            <p class="author">${item.author}</p>
            <p class="category" style="color:#A39D9D; font-size: 16px; font-family: 'Inter', sans-serif; text-align: center;">${item.categories}</p>
            <p class="price">${item.price}$</p>
        </a>
        `;
    });
    const list = document.querySelector("#list");
    list.innerHTML = html;
    count.innerHTML = dataFilter.length;    
};

callAPI(API_URL);


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