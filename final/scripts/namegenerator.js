const raceSelect = document.getElementById('race');
const genderSelect = document.getElementsByName('gender');
const charName = document.getElementById('charName');
const generateButton = document.getElementById('generateButton');
const errorMessage = document.getElementById('errorMessage');

async function generateName() {
    try {
        const response = await fetch('data/names.json');
        if (!response.ok) {
            throw new Error(await response.text());
        } 
        return await response.json()
    } catch (error) {
        console.log(error);
    }

}

function getGender() {
    for (const radio of genderSelect) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function getRandomName(names, race, gender) {
    const list = names[race]?.[gender];
    const index = Math.floor(Math.random() * list.length);
    return list[index]
}

generateButton.addEventListener('click', async () => {
    const race = raceSelect.value;
    const gender = getGender();

    if (!race) {
        errorMessage.innerHTML = '<Strong>Please select a race.</strong>'
        charName.value = ''
    } else if
        (!gender) {
        errorMessage.innerHTML = '<strong>Please select a gender.</strong>'
        charName.value = ''
    } else {
        errorMessage.textContent = ''
        const names = await generateName();
        const randomName = getRandomName(names, race, gender);
        charName.value = randomName;
    }

    
});

  