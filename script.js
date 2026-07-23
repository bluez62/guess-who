// 1. Updated Dataset: Replace image filenames with your own paths (e.g., "images/alex.png")
const characters = [
    { name: "Alex", gender: "male", hair: "brown", accessories: "none", facialHair: "yes", image: "https://placeholder.com" },
    { name: "Anita", gender: "female", hair: "blonde", accessories: "none", facialHair: "no", image: "https://placeholder.com" },
    { name: "Bernard", gender: "male", hair: "black", accessories: "hat", facialHair: "no", image: "https://placeholder.com" },
    { name: "Claire", gender: "female", hair: "red", accessories: "glasses", facialHair: "no", image: "https://placeholder.com" },
    { name: "David", gender: "male", hair: "blonde", accessories: "none", facialHair: "yes", image: "https://placeholder.com" },
    { name: "Emma", gender: "female", hair: "brown", accessories: "glasses", facialHair: "no", image: "https://placeholder.com" },
    { name: "George", gender: "male", hair: "grey", accessories: "hat", facialHair: "no", image: "https://placeholder.com" },
    { name: "Maria", gender: "female", hair: "black", accessories: "none", facialHair: "no", image: "https://placeholder.com" }
];

let secretCharacter = null;

// DOM Elements
const boardElement = document.getElementById("game-board");
const guessSelect = document.getElementById("character-guess");
const submitGuessBtn = document.getElementById("submit-guess-btn");
const randomGuessBtn = document.getElementById("random-guess-btn"); // New Button
const restartBtn = document.getElementById("restart-btn");
const messageElement = document.getElementById("game-message");

// 2. Setup game matrix
function initGame() {
    boardElement.innerHTML = "";
    guessSelect.innerHTML = '<option value="" disabled selected>Choose a character...</option>';
    messageElement.textContent = "";
    
    // Pick a random secret character for the computer
    const randomIndex = Math.floor(Math.random() * characters.length);
    secretCharacter = characters[randomIndex];
    
    console.log("Secret Character is: ", secretCharacter.name);

    // Build the board cards dynamically using <img> tags instead of emojis
    characters.forEach(char => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.name = char.name;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${char.image}" alt="${char.name}" class="card-img">
                    <span class="name">${char.name}</span>
                </div>
                <div class="card-back"></div>
            </div>
        `;

        card.addEventListener("click", () => {
            card.classList.toggle("eliminated");
        });

        boardElement.appendChild(card);

        const option = document.createElement("option");
        option.value = char.name;
        option.textContent = char.name;
        guessSelect.appendChild(option);
    });
}

// 3. Logic to pick a random character from the remaining dropdown choices
function chooseRandomCharacter() {
    // Generate a random index based on available character choices (excluding placeholder)
    const availableOptions = Array.from(guessSelect.options).filter(opt => opt.value !== "");
    
    if (availableOptions.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableOptions.length);
    guessSelect.value = availableOptions[randomIndex].value;
    
    messageElement.style.color = "#1e293b";
    messageElement.textContent = `Selected ${guessSelect.value}! Click "Submit Guess" to check if you are right.`;
}

// 4. Game win/loss logic engine
function checkFinalGuess() {
    const selectedGuess = guessSelect.value;
    
    if (!selectedGuess) {
        messageElement.style.color = "#ef4444";
        messageElement.textContent = "Please select a character name first!";
        return;
    }

    if (selectedGuess === secretCharacter.name) {
        messageElement.style.color = "#10b981";
        messageElement.textContent = `🎉 Correct! The mystery identity was indeed ${secretCharacter.name}! You win!`;
    } else {
        messageElement.style.color = "#ef4444";
        messageElement.textContent = `❌ Wrong guess! That's not the secret identity. Try evaluating attributes again!`;
    }
}

// 5. Global Action Event Bindings
submitGuessBtn.addEventListener("click", checkFinalGuess);
randomGuessBtn.addEventListener("click", chooseRandomCharacter); // New Event Binding
restartBtn.addEventListener("click", initGame);

// Fire engine initial run execution
initGame();
