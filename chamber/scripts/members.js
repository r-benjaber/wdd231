const jsonfile = 'data/members.json';
const cards = document.querySelector('#businessCards');
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

async function getMembersData() {
    const response = await fetch(jsonfile);
    const data = await response.json();
    return data.companies;
}

const displayMemberCards = (companies) => {
    companies.forEach(company => {
        //create member card
        let card = document.createElement('section');

        //create card parameters
        let companyName = document.createElement('h3');
        let logo = document.createElement('img');
        let data = document.createElement('p');
        let url = document.createElement("a");


        //populating heading, img and p
        companyName.innerHTML = company.name;
        logo.setAttribute('src', company.imageurl);
        logo.setAttribute('alt', `${company.name}'s logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        //logo.setAttribute('height', '440');
        data.innerHTML = `<strong>Address:</strong> ${company.address}.<br> <strong>Phone:</strong> ${company.phonenumber}.`
        url.setAttribute('href', company.url);
        url.innerHTML = company.url

        //appending all elements to the main "div" element
        card.append(companyName);
        card.append(logo);
        card.append(data);
        card.append(url);
        cards.append(card);

    });
}

const displayMembersList = (companies) => {
    const table = document.createElement('table');
    const heading = document.createElement('thead');
    const headingName = document.createElement('th');
    const headingAddress = document.createElement('th');
    const headingPhone = document.createElement('th');
    const headingUrl = document.createElement('th');

    headingName.innerHTML = "Company Name";
    headingAddress.innerHTML = "Address";
    headingPhone.innerHTML = "Phone Number";
    headingUrl.innerHTML = "Webpage";

    heading.appendChild(headingName);
    heading.appendChild(headingAddress);
    heading.appendChild(headingPhone);
    heading.appendChild(headingUrl);

    table.appendChild(heading);

    companies.forEach(company => {
        let row = document.createElement("tr");
        let name = document.createElement('td');
        let address = document.createElement('td');
        let phone = document.createElement('td');
        let urlcolumn = document.createElement('td');
        let urlLink = document.createElement('a');

        urlLink.setAttribute('href', company.url)

        name.innerHTML = company.name;
        address.innerHTML = company.address;
        phone.innerHTML = company.phonenumber;
        urlLink.innerHTML = company.url;

        row.appendChild(name);
        row.appendChild(address);
        row.appendChild(phone);

        urlcolumn.appendChild(urlLink);
        row.appendChild(urlcolumn);

        table.appendChild(row);
    });

    cards.appendChild(table);
}

getMembersData().then(companies => displayMemberCards(companies));

gridBtn.addEventListener('click', () => {
    cards.innerHTML = '';
    getMembersData().then((companies) => displayMemberCards(companies));

});

listBtn.addEventListener('click', () => {
    cards.innerHTML = '';
    getMembersData().then((companies) => displayMembersList(companies));
});