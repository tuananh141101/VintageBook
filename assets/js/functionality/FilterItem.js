const API_URL = "https://websitebook-api.vercel.app/products";

async function callAPI(API_URL) {
    const response = await axios.get(API_URL);
    let data = response.data; //listproduct

    let dataFilter = data; //productfilter
    const filter = document.querySelector(".filter");
    
    filter.addEventListener('submit', function filterItem(event) {
        event.preventDefault();
        let valueFilter = event.target.elements;
        dataFilter = data.filter(item => {

            // Check author
            if (valueFilter.Author.value != '') {
                if (item.author != valueFilter.Author.value) {return false}
            }

            // // Check category
            // if (valueFilter.category.value != '') {
            //     if (!item.categories.includes(valueFilter.category.value)) {return false;}
            // }

            return true;
        });
        showItem(dataFilter);
    });

    showItem(dataFilter);
}

function showItem(dataFilter) {
    let html = ``;
    let count = document.querySelector(".count");
    dataFilter.forEach((item) => {
        const IMG_PATH = "https://websitebook-api.vercel.app";
        html += `
        <a href="#" class="item">
            <img src="${IMG_PATH}${item.image}" alt="">
            <p class="name">${item.name}</p>
            <p class="author">${item.author}</p>
            <p class="category">${item.categories}</p>
            <p class="price">${item.price}$</p>
        </a>
        `;
    });
    const list = document.querySelector("#list");
    list.innerHTML = html;
    count.innerHTML = dataFilter.length;    
};



callAPI(API_URL);