const playerInfo = new URLSearchParams(window.location.search);
charName = playerInfo.get('char-name');
const gender = playerInfo.get('gender');
const pronoun = gender === 'female' ? 'She' : 'He';
const backstory = playerInfo.get('backstory');
const motivations = playerInfo.get('motivations');
const relationships = playerInfo.get('relationships');

document.querySelector('#charSheet').innerHTML = `
<h2>Thank you ${playerInfo.get('player-name')}</h2>
<p>Your character's name is ${charName}</p>
<p>${pronoun} is a ${playerInfo.get('race')} ${playerInfo.get('class')}</p>
${backstory ? `
    <p><strong>${charName}'s backstory:</strong></p>
    <p>${backstory}</p>` : ''}
${motivations ? `
    <p><strong>${charName}'s Motivations:</strong></p>
    <p>${motivations}</p>` : ''}
${relationships ? `
    <p><strong>${charName}'s relationships:</strong></p>
    <p>${relationships}<p/>` : ''}
`; 
