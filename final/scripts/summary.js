import { summaries } from "../data/summaries.mjs";

const summaryCards = document.querySelector('#summaryCards');
const modalTitle = document.querySelector('#modalTitle');
const modalSummary = document.querySelector('#modalSummary');
const closeButton = document.querySelector('#closeButton');

summaries.forEach(summary => {
    const button = document.querySelector(`#${summary.id}`);

    if (button) {
        button.addEventListener('click', () => {
            modalTitle.textContent = summary.title;
            modalSummary.textContent = summary.summary_info;
            summaryCards.showModal();
        });
    }
});

closeButton.addEventListener('click', () => {
    summaryCards.close();
});
