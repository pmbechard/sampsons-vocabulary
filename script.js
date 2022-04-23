// VOCABULARY WORDS GO HERE
const wordList = ['balcony', 'bathroom', 'bedroom', 'dining room', 'garage', 'garden', 'hall', 'kitchen', 'living room', 'stairs', 'armchair', 'bath', 'blankets', 'chest of drawers', 'cooker', 'cupboards', 'cushions', 'dishwasher', 'duvet', 'fridge', 'microwave', 'mirror', 'pillow', 'rug', 'sink', 'sofa', 'taps', 'toilet', 'towels', 'wardrobe', 'washing machine'];

// Function to get random word
let currentWord = '';
if (!currentWord) {
    getRandomWord();
}
function getRandomWord() {
    const randomIndex = Number.parseInt(Math.random() * wordList.length);
    while (currentWord === wordList[randomIndex]) {
        randomIndex = Number.parseInt(Math.random() * wordList.length);
    }
    currentWord = wordList[randomIndex];
}

// Create and Place Letter Buttons
const buttonGrid = document.querySelector('.button-grid');
for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const button = document.createElement('button');
    button.value = letter;
    button.textContent = letter;
    button.setAttribute('id', `button-${letter}`);
    buttonGrid.appendChild(button);
}
const restart = document.createElement('button');
restart.value = 'restart';
restart.textContent = 'Restart';
restart.setAttribute('id', 'button-restart');
buttonGrid.appendChild(restart);
restart.style.gridArea = '6 / 2 / 7 / 6';
restart.style.width = '60vw';