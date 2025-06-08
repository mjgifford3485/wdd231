const showLastVisit = document.querySelector("#lastVisit")

const visit = new Date();
const lastVisit = localStorage.getItem("lastVisit")

let message = ""

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const lastDate = new Date(lastVisit);
    const timeDiff = visit.getTime() - lastDate.getTime()
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

    if (dayDiff === 0) {
        message = "Back so soon! Awesome!"
    } else {
        message = `You last visited ${dayDiff} days ago.`
    }
}

showLastVisit.innerText = message;

localStorage.setItem("lastVisit", visit.toString());