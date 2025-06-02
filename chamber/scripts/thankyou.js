const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>First Name: ${myInfo.get('first')}</p>
<p>Last Name: ${myInfo.get('last')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Mobile Number: ${myInfo.get('number')}</p>
<p>Business Name: ${myInfo.get('business')}</p>
<p>Current Date: ${myInfo.get('timestamp')}</p>`