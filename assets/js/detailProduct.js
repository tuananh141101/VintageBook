const API_URL = "https://websitebook-api.vercel.app/products";
async function callAPI(API_URL) {
    const response = await axios.get(API_URL);
    let data = response.data;
    
    showDetail(data);
    showMoreInFo(data);
    showNameBook(data);
    showMoreBook(data);
};
callAPI(API_URL);

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

function showDetail(data) {
    let html = ``;
    data.forEach((item) => {
        const IMG_PATH = "https://websitebook-api.vercel.app";
        if (item.id == id) {
            html += `
            <div class="view-media">
                <div class="img-media">
                    <img src="${IMG_PATH}${item.image}" alt="">
                </div>
            </div>
    
            <div class="view-detail">
                <div class="content-detail">
                    <h1>${item.name}</h1>
                    <p class="description">${item.description}</p>
                    <p class="author"><span>Author:</span>${item.author}</p>
                    <p class="category"><span>Category:</span>${item.categories}</p>
                    <p class="price">$${item.price}</p>
                    <form action="" class="card">
                        <div class="quantity">
                            <label for="quantity_input"></label>
                            <input type="number" name="" id="quantity_input" value="1" autocomplete="off" min="1" max step="1">
                        </div>
                        <button type="submit" name="add-to-cart" class="addCart">Add to Cart</button>
                    </form>
                    <p class="share">Share this book:</p>
                    <ul class="share-media">
                        <li><a href="#">FaceBook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Linkedln</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </div>
            </div>
            `;
        }
    });

    document.querySelector(".product-view__container").innerHTML = html;
}
function showMoreInFo(data) {
    let html = ``;
    data.forEach((item) => {
        if (item.id == id) {
            html += `
            <tr>
                <td>Author</td>
                <td>
                    <p>${item.author}</p>
                </td>
            </tr>
            <tr>
                <td>Language</td>
                <td>
                    <p>${item.language}</p>
                </td>
            </tr>
            <tr>
                <td>Page</td>
                <td>
                    <p>${item.pages}</p>
                </td>
            </tr>
            <tr>
                <td>Publisher</td>
                <td>
                    <p>${item.author}</p>
                </td>
            </tr>
            <tr>
                <td>Year Published</td>
                <td>
                    <p>${item.year_published}</p>
                </td>
            </tr>
            `;
        }
    });
    document.getElementById("tBody").innerHTML = html;
}
function showNameBook(data) {
    let html = ``;
    data.forEach((item) => {
        if (item.id == id) {
            html +=
            `
            <a href="" class="name-book">${item.name}</a>
            `;
        };
        document.getElementById("nameBook").innerHTML = html;
    });
}
function showMoreBook(data) {
    data.sort(() => Math.random() - 0.5);
    const IMG_PATH = `https://websitebook-api.vercel.app`;
    let count = 0;

    const owlItems = document.querySelectorAll('.productDetailPage .owl-item');

    data.forEach((item, index) => {
        if (count === 20) {
            return; // Kết thúc vòng lặp sau khi chạy 10 lần
        }
        console.log(index);

        const owlItem = owlItems[index];
        const html = `
        <a href="./detailProduct.html?id=${item.id}" class="cardItem">
            <div class="item card">
                <div class="img-item">
                    <img src="${IMG_PATH}${item.image}" alt="">
                </div>
                <div class="title-item">
                    <h2 class="name">${item.name}</h2>
                    <p class="price">${item.price}$</p>
                    <p class="author">${item.author}</p>
                </div>
            </div>
        </a>
        `;

        owlItem.innerHTML = html;
        count++;
    });
};


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