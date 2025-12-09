const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProhetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets)
    displayProphets(data.prophets);
}


const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        //create prophet card
        let card = document.createElement('section');

        //create card parameters
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birth = document.createElement('p');

        //populating heading, img and p
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `An image of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        birth.innerHTML = `<strong>Date of Birth:</strong> ${prophet.birthdate}.<br> <strong>Place of Birth:</strong> ${prophet.birthplace}.`

        //appending all elements to the main "div" element
        card.append(fullName);
        card.append(birth);
        card.append(portrait);
        cards.append(card);

    });
}
getProhetData();