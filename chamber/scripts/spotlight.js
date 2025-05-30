const spotlightCards = document.querySelector('#spotlight-cards');
const spotlightUrl = 'https://mjgifford3485.github.io/wdd231/chamber/data/members.json';

async function getSpotlightData() {
    const response = await fetch(spotlightUrl);
    const data = await response.json();
    displaySpotlightMembers(data.members);
};

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const displaySpotlightMembers = (members) => {
    const eligibleMembers = members.filter(member => member.level === "2" || member.level === "3");
    const randomMembers = getRandomMembers(eligibleMembers, 3);
    randomMembers.forEach((member) => {
        let spotlightCard = document.createElement("section");
        let cardTop = document.createElement("div");
        let cardBottom = document.createElement("div");
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let website = document.createElement("p");
        let stars = document.createElement("div");

        spotlightCard.classList.add('card')
        cardTop.classList.add('card-top');
        cardBottom.classList.add('card-bottom');
        name.textContent = member.name;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', member.imagealt);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', '48');
        logo.setAttribute('width', '48');
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;
        number.innerHTML = `<strong>Number:</strong> ${member.phonenum}`;
        website.innerHTML = `<strong>Website:</strong> ${member.website}`;

        const level = parseInt(member.level);
        for (let i = 0; i < level; i++) {
            const star = document.createElement('span');
            star.textContent = '★';
            star.classList.add(`star-level-${level}`);
            stars.appendChild(star);
        }

        cardTop.appendChild(logo);
        cardTop.appendChild(name);
        cardBottom.appendChild(address);
        cardBottom.appendChild(number);
        cardBottom.appendChild(website);
        cardBottom.appendChild(stars);
        spotlightCard.appendChild(cardTop);
        spotlightCard.appendChild(cardBottom);
        spotlightCards.appendChild(spotlightCard);
    });
}

getSpotlightData();