// Get reference to the text area
const textArea = document.getElementById('persistentTextArea');

// Retrieve and display saved data (if any) from localStorage when the page loads
window.onload = function () {
    const savedText = localStorage.getItem('textAreaContent');
    if (savedText) {
        textArea.value = savedText;
    }
};

// Save the data to localStorage whenever the user types in the text area
textArea.addEventListener('input', function () {
    localStorage.setItem('textAreaContent', textArea.value);
});
