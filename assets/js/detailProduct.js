const API_URL = "https://websitebook-api.vercel.app/products";
async function callAPI(API_URL) {
    const response = await axios.get(API_URL);
    let data = response.data;
    
    showDetail(data);
    showMoreInFo(data);
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

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
callAPI(API_URL);