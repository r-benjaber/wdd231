import { fetchGames, urlBuilder } from "./games.mjs";

const url = urlBuilder("", "-suggested") + "&page_size=10";

const gamesData = await fetchGames(url);

const trending = document.querySelector("#trending");

const games = gamesData.results;

games.forEach(game => {
    const gameCard = document.createElement("section");
    gameCard.style.backgroundImage = `url(${game.background_image})`;

    const gameName = document.createElement("h3");
    gameName.innerHTML = game.name;

    gameCard.appendChild(gameName);
    trending.appendChild(gameCard);
});

