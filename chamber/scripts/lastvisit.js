const showLastVisit = document.querySelector("#lastVisit")

const today = new Date();
const lastVisit = localStorage.getItem("lastVisit")

let message = ""

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const lastDate = new Date(lastVisit);
    const timeDiff = today.getTime() - lastDate.getTime();
    const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60))
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

    if (dayDiff === 0) {
        message = "Welcome! Let us know if you have any questions.";
    } else if (hourDiff < 24) {
        message = "Back so soon! Awesome!"
    } else {
        message = `You last visited ${dayDiff} days ago.`
    }
}

showLastVisit.innerText = message;

localStorage.setItem("lastVisit", today.toString());