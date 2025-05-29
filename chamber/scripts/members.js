const cards = document.querySelector('#cards');
const url = 'https://mjgifford3485.github.io/wdd231/chamber/data/members.json'

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
};

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let cardTop = document.createElement("div");
        let cardBottom = document.createElement("div");
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let website = document.createElement("p");
        let stars = document.createElement("div");

        card.classList.add('card')
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
        card.appendChild(cardTop);
        card.appendChild(cardBottom);
        cards.appendChild(card);
    });
}

getMemberData();