const body = document.body;

// Changing the background to the selected item
const pkmnBackground = document.querySelector('.pkmn-bg-container');
pkmnBackground.addEventListener('click', (event) => {
    if (event.target.classList.contains('carousel-item')) {
        const color = event.target.dataset.itemID;
        body.style.backgroundColor = color;
    }
});


// MONTH NAVIGATION CAROUSEL
const items = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]; // Need to amend this to combine both month and colour into one line
const itemsColor = ["#9FA19F", "#2980EF", "#2980EF", "#3FA129", "#9FA19F", "#60A1B8", "#91A119", "#9FA19F", "#EF4179", "#704170", "#91A119", "#5060E1"];
const carouselItemsContainer = document.querySelector('.carousel-items');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let startIndex = 0;

function renderCarousel() {

    carouselItemsContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const itemIndex = (startIndex + i) % items.length;
        const item = document.createElement('button');

        item.dataset.itemID = itemsColor[itemIndex];

        item.textContent = items[itemIndex];
        item.classList.add('carousel-item');
        carouselItemsContainer.appendChild(item);
    }
};

rightArrow.addEventListener('click', () => {
    startIndex = startIndex + 1 % items.length;
    renderCarousel();
});

leftArrow.addEventListener('click', () => {
    startIndex = (startIndex - 1 + items.length) % items.length;
    renderCarousel();
});

renderCarousel();