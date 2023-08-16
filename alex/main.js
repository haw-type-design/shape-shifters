document.addEventListener("DOMContentLoaded", () => {
    let displayBox = document.getElementById("selectedLetter");
    let currentLetter = '';
});

function displayLetter(button) {
    var letter = button.innerText;
    document.getElementById("selectedLetter").innerText = letter; }


function updateFontProperties() {
    const slntValue = document.getElementById('slnt').value;
    const wdthValue = document.getElementById('wdth').value;
    const hgltValue = document.getElementById('hglt').value;
    let displayBox = document.getElementById("selectedLetter");
    displayBox.style.fontVariationSettings = `"slnt" ${slntValue}, "wdth" ${wdthValue}, "hglt" ${hgltValue}`;
}

function displayLetter(element) {
    let displayBox = document.getElementById("selectedLetter");
    const selectedLetter = element.textContent;
    currentLetter = selectedLetter;
    displayBox.textContent = selectedLetter;
}

function updateSelectedLetter() {
    let displayBox = document.getElementById("selectedLetter");
    displayBox.textContent = currentLetter;
}


function toggleHighlight() {
    var highlightedWord = document.getElementById("highlightedWord");
    var highlightSwitch = document.getElementById("highlightSwitch");

    if (highlightSwitch.checked) {
        highlightedWord.classList.add("highlighted");
    } else {
        highlightedWord.classList.remove("highlighted");
    }
}


