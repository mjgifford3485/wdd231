const openButton = document.querySelector('#openButton');
const levelInfo = document.querySelector('#levelInfo');
const closeButton = document.querySelector('#closeButton');
const benefits = document.querySelector('#levelInfo ul');
const cost = document.querySelector('#levelInfo p');

function addBenefits(benefitList) {
    benefits.innerHTML = '';
    benefitList.forEach(benefit => {
        const benefitItem = document.createElement('li');
        benefitItem.textContent = benefit;
        benefits.appendChild(benefitItem);
    })
}

openButton1.addEventListener("click", () => {
    levelInfo.showModal()
    const npList = [
        'Quarterly Mixer',
        'Weekly Mailer'
    ]
    addBenefits(npList);
    cost.innerHTML = "Cost: Free"
});

openButton2.addEventListener("click", () => {
    levelInfo.showModal()
    const bronzeList = [
        'Quarterly Mixer',
        'Weekly Mailer',
        'Small Photo Ad in mailer'
    ]
    addBenefits(bronzeList);
    cost.innerHTML = "Cost: $100/month"
});

openButton3.addEventListener("click", () => {
    levelInfo.showModal()
    const silverList = [
        'Quarterly Mixer',
        'Weekly Mailer',
        'Half Page Ad in Mailer',
        'Spotlight on Chamber of Commerce Homepage'
    ]
    addBenefits(silverList);
    cost.innerHTML = "Cost: $200/month"
});

openButton4.addEventListener("click", () => {
    levelInfo.showModal()
    const goldList = [
        'Quarterly Mixer',
        'Weekly Mailer',
        'Full page Ad in Mailer',
        'Spotlight on Chamber of Commerce Homepage'
    ]
    addBenefits(goldList);
    cost.innerHTML = "Cost: $250/month"
});

closeButton.addEventListener("click", () => {
    levelInfo.close();
});