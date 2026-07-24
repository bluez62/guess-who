const characters = [
    { name: "Kris", image: "images/Kris_overworld_static.png", description: `"Kris Dreemurr" (Lightner)\nThe main character of DELTARUNE.\n\nFirst Appearence: Chapter 1.` },
    { name: "Susie", image: "images/Susie_overworld_eyes.png", description: `"Susie" (Lightner)\nThe second character of DELTARUNE.\n\nFirst Appearence: Chapter 1.` },
    { name: "Ralsei", image: "images/Ralsei_overworld_hatless.png", description: `"Ralsei" (Darkner)\nThe third character of DELTARUNE.\n\nFirst Appearence: Chapter 1.` },
    { name: "Noelle", image: "images/Noelle_overworld.png", description: `"Noelle Holiday" (Lightner)\nThe youngest of the Holiday family.\n\nFirst Appearence: Chapter 1.` },
    { name: "Lancer", image: "images/Lancer_overworld_static.png", description: `"Lancer" (Darkner)\nKing's Son, one of the first darkners in the game.\n\nFirst Appearence: Chapter 1.` },
    { name: "Rouxls Kaard", image: "images/Rouxls_Kaard_overworld.png", description: `"Rouxls Kaard" (Darkner)\nLikes to make puzzles, and speaks in old english.\n\nFirst Appearence: Chapter 1.` },
    { name: "King", image: "images/King_overworld_no_cape.png", description: `"King" (Darkner)\nThe final boss of Chapter 1. Lancer's dad.\n\nFirst Appearence: Chapter 1.` },
    { name: "Queen", image: "images/Queen_overworld_static.png", description: `"Queen" (Darkner)\nThe final boss of Chapter 2. Lancer's mom.\n\nFirst Appearence: Chapter 2.` },
    { name: "Tenna", image: "images/Tenna_overworld_podium.png", description: `"Tenna" (Darkner)\nThe final boss of Chapter 3. The only 3D character in the game.\n\nFirst Appearence: Chapter 3.` },
    { name: "Jevil", image: "images/Jevil_battle_static.png", description: `"Jevil" (Darkner)\nThe shadow boss of Chapter 1.\n\nFirst Appearence: Chapter 1.` },
    { name: "Spamton", image: "images/Spamton_battle_static.png", description: `"Spamton" (Darkner)\nThe shadow boss of Chapter 2.\n\nFirst Appearence: Chapter 2.` },
    { name: "Gerson", image: "images/Gerson_overworld.png", description: `"Gerson Boom" (Lightner/Darkner)\nThe shadow boss of Chapter 4. Lightner who's ashes became a darkner.\n\nFirst Appearence: Chapter 4.` },
    { name: "Toriel", image: "images/Toriel_overworld.png", description: `"Toriel Dreemurr" (Lightner)\nKris's mom, the mother of the Dreemurr Family.\n\nFirst Appearence: Chapter 1.` },
    { name: "Asriel", image: "images/Asriel_overworld_young_silhouette.png", description: `"Asriel Dreemurr" (Lightner)\nKris's brother. Not yet seen in the game besides for a flashback in Chapter 3.\n\nFirst Appearence: Chapter 3.` },
    { name: "Undyne", image: "images/Undyne_overworld.png", description: `"Undyne" (Lightner)\nThe new police chief of Hometown. Captured by The Knight in Chapter 3's ending.\n\nFirst Appearence: Chapter 1.` },
    { name: "Berdly", image: "images/Berdly_overworld.png", description: `"Berdly" (Lightner)\nNerd Berd at school.\n\nFirst Appearence: Chapter 1.` },
    { name: "Rudolph (Rudy)", image: "images/Rudy_overworld.png", description: `"Rudolph Holiday" (Lightner)\nNoelle's dad. Has an unknown illness.\n\nFirst Appearence: Chapter 1.` },
    { name: "December", image: "images/Dess_overworld_young_silhouette.png", description: `"December Holiday" (Lightner)\nWent missing before the events of Chapter 1. Only seen in a flashback from Chapter 3.\n\nFirst Appearence: Chapter 3.` },
    { name: "Asgore", image: "images/Asgore_overworld.png", description: `"Asgore Dreemurr" (Lightner)\nKris's dad. Fired from being the police chief for something unknown from long before Chapter 1.\n\nFirst Appearence: Chapter 1.` },
    { name: "Sans", image: "images/Sans_overworld.png", description: `"Sans" (Lightner)\nPossibly a time traveler.\n\nFirst Appearence: Chapter 1.` },
    { name: "Carol", image: "images/Carol_overworld.png", description: `"Carol Holiday" (Lightner)\nNoelle's mom, possibly The Knight or working with The Knight.\n\nFirst Appearence: Chapter 4.` },
    { name: "The Roaring Knight", image: "images/Knight_overworld_front.png", description: `"The Roaring Knight" (Unknown)\nThe shadow boss of Chapter 3. One of the biggest mysteries in Deltarune.\n\nFirst Appearence: Chapter 3.` },
    { name: "FRIEND", image: "images/FRIEND_overworld_vision.gif", description: `"IMAGE_FRIEND" (Darkner?)\nMystery creature titled IMAGE_FRIEND in the game files. Has no official name and is only seen for a total of 0.099 seconds in the entire game excluding the Nightmare/eRAM Bossfight.\n\nFirst Appearence: Chapter 2.` },
    { name: "Flowery", image: "images/Flowery_overworld.png", description: `"Flowery" (Darkner)\nThe only character who speaks instead of just text. Ralsei also hates Flowery because Flowery does not care about the prophecy and does whatever.\n\nFirst Appearence: Chapter 5.` },
    { name: "Egg Man", image: "images/Man_overworld_tree.gif", description: `"Egg Man" (Darkner?)\nThe man is behind the tree. -Text when inspecting the tree.\n\nFirst Appearence: Chapter 1.` },
    { name: "Annoying Dog", image: "images/Annoying_Dog_overworld.gif", description: `"Annoying Dog" (Lightner/Darkner?)\nRepresentation of Toby Fox.\n\nFirst Appearence: Chapter 1.` },
    { name: "Aqua", image: "images/Aqua_overworld.png", description: `"Aqua" (Darkner)\nOne of the 7 colored flowers.\n\nFirst Appearence: Chapter 5.` },
    { name: "Seth", image: "images/Seth_overworld.png", description: `"Seth" (Darkner)\nOne of the 7 colored flowers.\n\nFirst Appearence: Chapter 5.` },
    { name: "Yellow", image: "images/Yellow_overworld.png", description: `"Yellow" (Darkner)\nOne of the 7 colored flowers.\n\nFirst Appearence: Chapter 5.` },
    { name: "Green", image: "images/Green_overworld.png", description: `"Green" (Darkner)\nOne of the 7 colored flowers.\n\nFirst Appearence: Chapter 5.` },
    { name: "Blue", image: "images/Blue_overworld.png", description: `"Blue" (Darkner)\nOne of the 7 colored flowers.\n\nFirst Appearence: Chapter 5.` },
    { name: "Pink", image: "images/Pink_overworld.png", description: `"Pink" (Darkner)\nOne of the 7 colored flowers. The shadow boss of Chapter 5.\n\nFirst Appearence: Chapter 5.` },
    { name: "Orange", image: "images/Orange_overworld.png", description: `"Orange" (Darkner)\nOne of the 7 colored flowers.\n\nFirst Appearence: Chapter 5.` },
    { name: "Titan", image: "images/Titan_battle_idle.gif", description: `"Titan" (Darker than Darkner)\nThe final boss of Chapter 4. Formed by a Dark Fountain being opened inside a Dark Fountain.\n\nFirst Appearence: Chapter 4. (or Chapter 2 if you count Ralsei recounting what might happen in the future and shows a depiction of the Titan.)` },
    { name: "Alphys", image: "images/Alphys_overworld.png", description: `"Alphys" (Lightner)\nTeaches the classroom that Kris, Susie, and Noelle go to.\n\nFirst Appearence: Chapter 1.` },
    { name: "Kikky", image: "images/Kikky_battle.png", description: `"Kikky Fox" (Darkner?)\nToby Fox's cat. Appears in a secret minigame in Chapter 5.\n\nFirst Appearence: Chapter 5.` },
    { name: "Temmie", image: "images/Temmie_overworld.png", description: `"Temmie" (Lightner)\nRepresentation of Temmie Chang. Also attends the same classroom as Kris, Susie, and Noelle.\n\nFirst Appearence: Chapter 1.` },
    { name: "Shadowguy", image: "images/Shadowguy_battle_idle.gif", description: `"Shadowguy" (Darkner)\nShadowguys are the people who live in TV World.\n\nFirst Appearence: Chapter 3.` },
    { name: "Water Cooler", image: "images/Watercooler_battle_idle.png", description: `"Water Cooler" (Darkner)\nA living water cooler. What else is there to say?\n\nFirst Appearence: Chapter 3.` },
    { name: "Nubert", image: "images/Nubert_overworld.png", description: `"Nubert" (Darkner)\nNubert is a worm thing. He thinks everyone loves him.\n\nFirst Appearence: Chapter 2.` },
    { name: "Catty", image: "images/Catty_overworld.png", description: `"Catty Cattenheimer" (Lightner)\nCatti's mom. Lives in Hometown.\n\nFirst Appearence: Chapter 1.` },
    { name: "Dad Cat", image: "images/Dad_Cat_overworld.png", description: `"Dad Cat" (Lightner)\nCatti's dad. Lives in Hometown.\n\nFirst Appearence: Chapter 1.` },
    { name: "Bratty", image: "images/Bratty_overworld.png", description: `"Bratty Cattenheimer" (Lightner)\nCatti's sister. Lives in Hometown.\n\nFirst Appearence: Chapter 1.` },
    { name: "Froggit", image: "images/Froggit_overworld.png", description: `"Froggit" (Lightner)\nNot that important of a character. Just lives in Hometown because they are a very famous enemy from UNDERTALE.\n\nFirst Appearence: Chapter 1.` },
    { name: "Politics Bear", image: "images/Politics_Bear_overworld.png", description: `"Politics Bear" (Lightner)\nRandom bear that hangs out in Town Hall.\n\nFirst Appearence: Chapter 1.` },
    { name: "QC", image: "images/QC_overworld.png", description: `"QC" (Lightner)\nOwns QC's Diner. Is very nice to Kris and their family because they have history.\n\nFirst Appearence: Chapter 1.` },
    { name: "Catti", image: "images/Catti_overworld_waitress.png", description: `"Catti" (Lightner)\nPossibly summoned a demon that made December go missing.\n\nFirst Appearence: Chapter 1.` },
    { name: "Monster Kid", image: "images/Monster_Kid_overworld.png", description: `"Monster Kid" (Lightner)\nKid who is in the same class as Kris, Susie, and Noelle.\n\nFirst Appearence: Chapter 1.` },
    { name: "Jockington", image: "images/Jockington_overworld.png", description: `"Jockington" (Lightner)\nAttends the same class as Kris, Susie, and Noelle. Is best friend's with Catti.\n\nFirst Appearence: Chapter 1.` },
    { name: "Snowy", image: "images/Snowy_overworld.png", description: `"Snowy" (Lightner)\nRandom Guy who attends the same class as Kris, Susie, and Noelle.\n\nFirst Appearence: Chapter 1.` },
    { name: "Onion", image: "images/Onion_overworld.gif", description: `"Onion" (Lightner)\nLives in the lake. Went missing after going to investigate a mysterious song coming from under the lake.\n\nFirst Appearence: Chapter 1.` },
    { name: "Normal NPC", image: "images/Normal_NPC_overworld.png", description: `"Normal NPC" (Lightner)\nMysterious character who may be related to Gaster.\n\nFirst Appearence: Chapter 1.` }
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

  // Left-click to eliminate
  card.addEventListener("click", () => {
    card.classList.toggle("eliminated");
  });

  // Right-click to show info
  card.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Stops the standard browser right-click menu
    showCharacterInfo(char);
  });

  boardElement.appendChild(card);
});

}

function showCharacterInfo(char) {
  // Check if a modal already exists, remove it if it does
  const existingModal = document.getElementById("info-modal");
  if (existingModal) existingModal.remove();

  // Create modal layout
  const modal = document.createElement("div");
  modal.id = "info-modal";
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal-content">
      <h2>${char.name}</h2>
      <img src="${char.image}" alt="${char.name}">
      <p>${char.description || "No description available."}</p> 
      <button id="close-modal-btn">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Close button logic
  document.getElementById("close-modal-btn").addEventListener("click", () => {
    modal.remove();
  });

  // Optional: Close modal if clicking outside the content box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}


restartBtn.addEventListener("click", initGame);

function randomSel() {
    const randomIndex = Math.floor(Math.random() * characters.length);

    alert(characters[randomIndex].name);
}

initGame();
