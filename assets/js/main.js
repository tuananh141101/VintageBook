// Search-icon 
const form = document.querySelector('.form');
const input = document.querySelector('#search-input');
const iconSearch = document.querySelector('.search-icon');

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