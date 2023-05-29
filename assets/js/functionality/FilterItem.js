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