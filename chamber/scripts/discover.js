import { places } from "../data/places.mjs";

const showPlaceCards = document.querySelector("#placeCards");

function displayPlaceCards(places) {
    places.forEach(place => {
        const card = document.createElement('div')
        const photo = document.createElement('img')
        photo.src = place.image.src
        photo.alt = place.image.alt
        photo.loading = "lazy"
        photo.height = place.image.height
        photo.width = place.image.width
        card.appendChild(photo)
        const title = document.createElement('h2')
        title.innerText = place.title
        card.appendChild(title)
        const address = document.createElement('address')
        address.innerText = place.address
        card.appendChild(address)
        const description = document.createElement('p')
        description.innerText = place.description
        card.appendChild(description)
        const button = document.createElement('button')
        button.innerText = "Learn More"
        card.appendChild(button)

        showPlaceCards.appendChild(card)
    })
}

displayPlaceCards(places);