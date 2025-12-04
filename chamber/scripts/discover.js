import { places } from '../data/places.mjs';

const mainSection = document.querySelector("#placesCards");

places.forEach(place => {
    let placeCard = document.createElement("section");
    placeCard.classList.add("placeCard");

    let placeName = document.createElement("h2");
    placeName.innerHTML = place.name;

    let placeFig = document.createElement("figure");
    let placeImg = document.createElement("img");
    placeImg.setAttribute("src", `images/${place.photo}`);
    placeImg.setAttribute("alt", `A small image of ${place.name}`);
    placeFig.appendChild(placeImg);

    let placeDescription = document.createElement("p");
    placeDescription.innerHTML = place.description;

    let placeAddress = document.createElement("address");
    placeAddress.innerHTML = place.address;

    let learnBtn = document.createElement("button");
    learnBtn.innerHTML = "Learn More!";

    placeCard.appendChild(placeName);
    placeCard.appendChild(placeFig);
    placeCard.appendChild(placeDescription);
    placeCard.appendChild(placeAddress);
    placeCard.appendChild(learnBtn);

    mainSection.appendChild(placeCard);
});

const message = document.querySelector("#welcoming");
const lastVisited = localStorage.getItem("lastVisited");

let now = Date.now();

if (!lastVisited) {
    message.innerHTML = "Welcome! Let us know if you have any questions.";
}

else {
    const msToDays = 1000 * 60 * 60 * 24;
    let days = Math.floor((now - lastVisited) / msToDays);

    if (days < 1) {
        message.innerHTML = "Back so soon! Awesome!";
    }
    else {
        message.innerHTML = `You last visited ${days} days ago.`
    }
}

localStorage.setItem("lastVisited", now);
