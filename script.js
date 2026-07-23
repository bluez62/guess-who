const characters = [
    { name: "Kris", image: "images/Kris_overworld_static.png" },
    { name: "Susie", image: "images/Susie_overworld_eyes.png" },
    { name: "Ralsei", image: "images/Ralsei_overworld_hatless.png" },
    { name: "Noelle", image: "images/Noelle_overworld.png" },
    { name: "Lancer", image: "images/Lancer_overworld_static.png" },
    { name: "Rouxls Kaard", image: "images/Rouxls_Kaard_overworld.png" },
    { name: "King", image: "images/King_overworld_no_cape.png" },
    { name: "Queen", image: "images/Queen_overworld_static.png" },
    { name: "Tenna", image: "images/Tenna_overworld_podium.png" },
    { name: "Jevil", image: "images/Jevil_battle_static.png" },
    { name: "Spamton", image: "images/Spamton_battle_static.png" },
    { name: "Gerson", image: "images/Gerson_overworld.png" },
    { name: "Toriel", image: "images/Toriel_overworld.png" },
    { name: "Asriel", image: "images/Asriel_overworld_young_silhouette.png" },
    { name: "Undyne", image: "images/Undyne_overworld.png" },
    { name: "Berdly", image: "images/Berdly_overworld.png" },
    { name: "Rudolph (Rudy)", image: "images/Rudy_overworld.png" },
    { name: "December", image: "images/Dess_overworld_young_silhouette.png" },
    { name: "Asgore", image: "images/Asgore_overworld.png" },
    { name: "Sans", image: "images/Sans_overworld.png" },
    { name: "Carol", image: "images/Carol_overworld.png" },
    { name: "The Roaring Knight", image: "images/Knight_overworld_front.png" },
    { name: "FRIEND", image: "images/Friend_overworld_vision.gif" },
    { name: "Flowery", image: "images/Flowery_overworld.png" },
    { name: "Egg Man", image: "images/Man_overworld_tree.gif" },
    { name: "Annoying Dog", image: "images/Annoying_Dog_overworld.png" },
    { name: "Aqua", image: "images/Aqua_overworld.png" },
    { name: "Seth", image: "images/Seth_overworld.png" }
];

let secretCharacter = null;

const boardElement = document.getElementById("game-board");
const guessSelect = document.getElementById("character-guess");
const submitGuessBtn = document.getElementById("submit-guess-btn");
const randomGuessBtn = document.getElementById("random-guess-btn");
const restartBtn = document.getElementById("restart-btn");
const messageElement = document.getElementById("game-message");

function initGame() {
    boardElement.innerHTML = "";
    messageElement.textContent = "";

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
    });
}


restartBtn.addEventListener("click", initGame);

initGame();
