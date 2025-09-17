const body = document.body;

// Changing the background to the selected item
const pkmnBackground = document.querySelector('.pkmn-bg-container');
pkmnBackground.addEventListener('click', (event) => {
    if (event.target.classList.contains('carousel-item')) {
        const color = event.target.dataset.color;
        body.style.backgroundColor = color;
    }
});

// POKEMON FOR WEBSITE
// Once you get around to actually building this out using an API call, make sure you use https://pokeapi.co/docs/v2#pokemon-section as your reference point.

// Things we may want to include:
//  - id;
//  - name;
//  - sprites;
//  - type;

const pokemon = [
    { id: 586, name: "Sawsbuck" },
    { name: "Simipour", id: "#0586" },
    { name: "Alomomola", nationalDex: "#0586" },
    { name: "Whimsicott", nationalDex: "#0586" },
    { name: "Bouffalant", nationalDex: "#0586" },
    { name: "Klink", nationalDex: "#0586" },
    { name: "Crustle", nationalDex: "#0586" },
    { name: "Braviary", nationalDex: "#0586" },
    { name: "Gothorita", nationalDex: "#0586" },
    { name: "Lampent", nationalDex: "#0586" },
    { name: "Scolipede", nationalDex: "#0586" },
    { name: "Fraxure", nationalDex: "#0586" },
];


// MONTH NAVIGATION CAROUSEL
const items = [
    { id: "J", color: "#9FA19F", month: "January", pokemonName: pokemon[0].name },
    { id: "F", color: "#2980EF", month: "Feburary", pokemonName: pokemon[1].name },
    { id: "M", color: "#2980EF", month: "March", pokemonName: pokemon[2].name },
    { id: "A", color: "#3FA129", month: "April", pokemonName: pokemon[3].name },
    { id: "M", color: "#9FA19F", month: "May", pokemonName: pokemon[4].name },
    { id: "J", color: "#60A1B8", month: "June", pokemonName: pokemon[5].name },
    { id: "J", color: "#91A119", month: "July", pokemonName: pokemon[6].name },
    { id: "A", color: "#9FA19F", month: "August", pokemonName: pokemon[7].name },
    { id: "S", color: "#EF4179", month: "September", pokemonName: pokemon[8].name },
    { id: "O", color: "#704170", month: "October", pokemonName: pokemon[9].name },
    { id: "N", color: "#91A119", month: "November", pokemonName: pokemon[10].name },
    { id: "D", color: "#5060E1", month: "Devember", pokemonName: pokemon[11].name },
];
const carouselItemsContainer = document.querySelector('.carousel-items');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const textDisplay = document.getElementById('pokemon-name');

let startIndex = 0;

function renderCarousel() {

    carouselItemsContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const itemIndex = (startIndex + i) % items.length;
        const itemData = items[itemIndex];

        const item = document.createElement('button');
        item.classList.add('carousel-item');
        item.style.backgroundColor = itemData.color;

        item.dataset.color = itemData.color;
        item.dataset.month = itemData.month;
        item.dataset.pokemonName = itemData.pokemonName;
        item.textContent = itemData.id;

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

// CHANGE BUTTON COLOUR TO WHITE WHEN SELECTED AND ADD POKEMON NAME TO PAGE
carouselItemsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const allButtons = carouselItemsContainer.children;
        for (const button of allButtons) {
            const originalColor = button.dataset.color;
            button.style.backgroundColor = originalColor
        }
        event.target.style.backgroundColor = 'white';

        const clickedMonth = event.target.dataset.month;
        const clickedItem = items.find(item => item.month === clickedMonth);

        if (clickedItem) {
            textDisplay.textContent = clickedItem.pokemonName;
        }
        

    }
});



