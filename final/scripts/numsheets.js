const showNumSheets = document.querySelector("#numsheets");
let numSheets = localStorage.getItem("numSheets");

numSheets = numSheets ? parseInt(numSheets) : 0;

numSheets++
let message = "";

if (numSheets === 1) {
    message = "Congratulations!  You made your first character!"
} else {
    message = `You have made ${numSheets} character sheets.`
}

showNumSheets.innerHTML = message;

localStorage.setItem("numSheets", numSheets.toString());