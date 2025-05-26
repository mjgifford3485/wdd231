const cards = document.querySelector('#cards');
const url = 'https://mjgifford3485.github.io/wdd231/chamber/data/members.json'

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    // displayBusinesses(data.businesses);
};

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let number = document.getElementById("p");
        let url = document.createElement("p");
        let level = document.createElement("p")

        // name.textContent = `${member.name}`;
    });
}

getMemberData();