import { games } from "../data/games.mjs";

const showGameCards = document.querySelector("#gameCards");

function createGameCards(games) {
    games.forEach(game => {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h2');
        const dice = document.createElement('p');
        const experience = document.createElement('p');
        const tone = document.createElement('p');
        const publisher = document.createElement('p');
        const setting = document.createElement('p');
        const button = document.createElement('button');

        card.classList.add("game-card")
        title.innerText = game.title;
        image.src = game.image.src;
        image.alt = game.image.alt;
        image.height = game.image.height;
        image.width = game.image.width;
        image.loading = "lazy";
        image.classList.add("cover");
        dice.innerHTML = `<strong>Dice:</strong> ${game.dice_used}`;
        dice.classList.add("dice");
        experience.innerHTML = `<strong>Experience Level: </strong> ${game.player_experience_level}`;
        experience.classList.add("experience");
        tone.innerHTML = `<strong>Tone: </strong> ${game.tone}`;
        tone.classList.add("tone");
        publisher.innerHTML = `<strong>Publisher: </strong> ${game.publisher}`;
        publisher.classList.add("publisher")
        setting.innerHTML = `<strong>Setting: </strong> ${game.setting}`;
        setting.classList.add("setting");
        button.innerText = `${game.title} Summary`;
        button.id = game.button_id;

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(dice);
        card.appendChild(experience);
        card.appendChild(tone);
        card.appendChild(publisher);
        card.appendChild(setting);
        card.appendChild(button);

        showGameCards.appendChild(card);
    })
}

createGameCards(games);