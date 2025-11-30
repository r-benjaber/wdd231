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