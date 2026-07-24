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
    { name: "FRIEND", image: "images/FRIEND_overworld_vision.gif" },
    { name: "Flowery", image: "images/Flowery_overworld.png" },
    { name: "Egg Man", image: "images/Man_overworld_tree.gif" },
    { name: "Annoying Dog", image: "images/Annoying_Dog_overworld.gif" },
    { name: "Aqua", image: "images/Aqua_overworld.png" },
    { name: "Seth", image: "images/Seth_overworld.png" },
    { name: "Yellow", image: "images/Yellow_overworld.png" },
    { name: "Green", image: "images/Green_overworld.png" },
    { name: "Blue", image: "images/Blue_overworld.png" },
    { name: "Pink", image: "images/Pink_overworld.png" },
    { name: "Orange", image: "images/Orange_overworld.png" },
    { name: "Titan", image: "images/Titan_battle_idle.gif" },
    { name: "Alphys", image: "images/Alphys_overworld.png" },
    { name: "Kikky", image: "images/Kikky_battle.png" },
    { name: "Temmie", image: "images/Temmie_overworld.png" },
    { name: "Shadowguy", image: "images/Shadowguy_battle_idle.gif" },
    { name: "Water Cooler", image: "images/Watercooler_battle_idle.png" },
    { name: "Nubert", image: "images/Nubert_overworld.png" },
    { name: "Catty", image: "images/Catty_overworld.png" },
    { name: "Dad Cat", image: "images/Dad_Cat_overworld.png" },
    { name: "Bratty", image: "images/Bratty_overworld.png" },
    { name: "Froggit", image: "images/Froggit_overworld.png" },
    { name: "Politics Bear", image: "images/Politics_Bear_overworld.png" },
    { name: "QC", image: "images/QC_overworld.png" },
    { name: "Catti", image: "images/Catti_overworld_waitress.png" },
    { name: "Monster Kid", image: "images/Monster_Kid_overworld.png" },
    { name: "Jockington", image: "images/Jockington_overworld.png" },
    { name: "Snowy", image: "images/Snowy_overworld.png" },
    { name: "Onion", image: "images/Onion_overworld.gif" },
    { name: "Normal NPC", image: "images/Normal_NPC_overworld.png" }
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

function randomSel() {
    const randomIndex = Math.floor(Math.random() * characters.length);

    alert(characters[randomIndex].name);
}

initGame();
