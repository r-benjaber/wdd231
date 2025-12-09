import { fetchGames, urlBuilder } from "./games.mjs";

const gameSection = document.querySelector("#games");
const actionBtn = document.querySelector("#action");
const indieBtn = document.querySelector("#indie");
const adventureBtn = document.querySelector("#adventure");
const rpgBtn = document.querySelector("#rpg");
const strategyBtn = document.querySelector("#strategy");
const allGames = document.querySelector("#allGames");

let filter = "";
actionBtn.addEventListener("click", () => { filter = "action"; loadGames(filter); });
indieBtn.addEventListener("click", () => { filter = "indie"; loadGames(filter); });
adventureBtn.addEventListener("click", () => { filter = "adventure"; loadGames(filter); });
rpgBtn.addEventListener("click", () => { filter = "role-playing-games-rpg"; loadGames(filter); });
strategyBtn.addEventListener("click", () => { filter = "strategy"; loadGames(filter); });
allGames.addEventListener("click", () => { filter = ""; loadGames(filter); });

function gameCardBuilder(game) {
    let card = document.createElement("section");
    card.setAttribute("class", "gameCard");
    
    let img = document.createElement("img");
    img.setAttribute("src", game.background_image);
    img.setAttribute("alt", `Cover photo of ${game.name}`);
    img.setAttribute("loading", "lazy")
    img.setAttribute("class", "gameImg");
    img.setAttribute("width", "400")

    let gameTitle = document.createElement("h2");
    gameTitle.innerHTML = game.name;
    gameTitle.setAttribute("class", "gameTitle");

    let esrbRating = document.createElement("p");
    esrbRating.textContent = game.esrb_rating ? game.esrb_rating.name : "No rating";
    esrbRating.setAttribute("class", "esrb");

    let rating = document.createElement("P");
    rating.innerHTML = `${game.rating}/5 ⭐`
    rating.setAttribute("class", "gameRating");

    let genres = document.createElement("p");
    let genresString = "";
    game.genres.forEach(genre => {
        genresString += `${genre.name}, `;
    });
    genresString = genresString.slice(0, -2);
    genres.textContent = genresString + ".";
    genres.setAttribute("class", "gameGenres");

    card.appendChild(img);
    card.appendChild(gameTitle);
    card.appendChild(esrbRating);
    card.appendChild(rating);
    card.appendChild(genres);

    gameSection.appendChild(card);
}

function displayGames(games) {
    games.forEach(game => {
        gameCardBuilder(game);
    });
}

async function loadGames(filter) {
    gameSection.innerHTML = "";

    let url = urlBuilder(filter, "");
    let gamesData = await fetchGames(url);
    let games = gamesData.results;

    displayGames(games);
}

loadGames();