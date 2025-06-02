const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();
const timestamp = document.getElementById("timestamp");
timestamp.value = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;