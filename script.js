const characters = [
    { name: "Kris", image: "images/Kris_overworld_static.jpg" },
    { name: "Susie", image: "images/Susie_overworld_eyes.jpg" },
];

let secretCharacter = null;

const boardElement = document.getElementById("game-board");
const guessSelect = document.getElementById("character-guess");
const submitGuessBtn = document.getElementById("submit-guess-btn");
const randomGuessBtn = document.getElementById("random-guess-btn");
const restartBtn = document.getElementById("restart-btn");
const messageElement = document.getElementById("game-message");

// 2. Setup game matrix
function initGame() {
    boardElement.innerHTML = "";
    guessSelect.innerHTML = '<option value="" disabled selected>Choose a character...</option>';
    messageElement.textContent = "";
    
    const randomIndex = Math.floor(Math.random() * characters.length);
    secretCharacter = characters[randomIndex];
    
    console.log("Secret Character is: ", secretCharacter.name);

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


restartBtn.addEventListener("click", initGame);

initGame();
