// 1. Dataset of characters and their attributes
const characters = [
    { name: "Alex", gender: "male", hair: "brown", accessories: "none", facialHair: "yes", avatar: "🧔" },
    { name: "Anita", gender: "female", hair: "blonde", accessories: "none", facialHair: "no", avatar: "👩" },
    { name: "Bernard", gender: "male", hair: "black", accessories: "hat", facialHair: "no", avatar: "🎩" },
    { name: "Claire", gender: "female", hair: "red", accessories: "glasses", facialHair: "no", avatar: "👩‍🏫" },
    { name: "David", gender: "male", hair: "blonde", accessories: "none", facialHair: "yes", avatar: "👱‍♂️" },
    { name: "Emma", gender: "female", hair: "brown", accessories: "glasses", facialHair: "no", avatar: "👩‍⚕️" },
    { name: "George", gender: "male", hair: "grey", accessories: "hat", facialHair: "no", avatar: "👴" },
    { name: "Maria", gender: "female", hair: "black", accessories: "none", facialHair: "no", avatar: "👩‍💼" }
];

let secretCharacter = null;

// DOM Elements
const boardElement = document.getElementById("game-board");
const guessSelect = document.getElementById("character-guess");
const submitGuessBtn = document.getElementById("submit-guess-btn");
const restartBtn = document.getElementById("restart-btn");
const messageElement = document.getElementById("game-message");

// 2. Setup and populate the game matrix
function initGame() {
    boardElement.innerHTML = "";
    guessSelect.innerHTML = '<option value="" disabled selected>Choose a character...</option>';
    messageElement.textContent = "";
    
    // Pick a random secret character for the computer
    const randomIndex = Math.floor(Math.random() * characters.length);
    secretCharacter = characters[randomIndex];
    
    // Console log the answer for debugging/testing
    console.log("Secret Character is: ", secretCharacter.name);

    // Build the board cards and dropdown values dynamically
    characters.forEach(char => {
        // Create Card HTML Elements
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.name = char.name;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span class="avatar">${char.avatar}</span>
                    <span class="name">${char.name}</span>
                </div>
                <div class="card-back"></div>
            </div>
        `;

        // Card flip event listener
        card.addEventListener("click", () => {
            card.classList.toggle("eliminated");
        });

        boardElement.appendChild(card);

        // Populate guessing selection choices
        const option = document.createElement("option");
        option.value = char.name;
        option.textContent = char.name;
        guessSelect.appendChild(option);
    });
}

// 3. Game win/loss logic engine
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

// 4. Global Action Event Bindings
submitGuessBtn.addEventListener("click", checkFinalGuess);
restartBtn.addEventListener("click", initGame);

// Fire engine initial run execution
initGame();
