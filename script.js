// script.js
const buttons = document.querySelectorAll('.download-button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Replace with the actual document URL
        const documentUrl = `face spray.pdf`;
        const a = document.createElement('a');
        a.href = documentUrl;
        a.download = `face spray.pdf`;
        a.click();
    });
});