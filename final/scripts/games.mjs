const mykey = "be105e5ef4e74c758520b074e663bd57";
const url = `https://api.rawg.io/api/games?key=${mykey}`;


export function urlBuilder(filter = "", ordering = "") {
    let finalUrl = url;
    if (filter != "") {
        finalUrl += `&genres=${filter}`;
    }
    if (ordering != ""){
        finalUrl += `&ordering=${ordering}`;
    }
    console.log(finalUrl);
    return finalUrl;
}

export async function fetchGames(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            let games = await response.json();
            console.log(games);
            return games;
        }
        else {
            throw error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
    

//fetchGames(urlBuilder());