let stars = 0;
let starsPerClick = 1;
let prestigeLevel = 0;
let achievements = new Set();

const starsDisplay = document.getElementById("stars");
const popup = document.getElementById("achievement-popup");
const achievementSound = document.getElementById("achievementSound");

/* CLICKING */
document.getElementById("main-star").onclick = () => {
  stars += starsPerClick;
  updateUI();
  checkUnlocks();
};

/* UI UPDATE */
function updateUI() {
  starsDisplay.textContent = `${stars} Stars`;
}

/* PLANETS (ORBITS) */
const planets = [
  { name: "Mercury", cost: 50, boost: 1, speed: 10 },
  { name: "Venus", cost: 200, boost: 5, speed: 18 },
  { name: "Earth", cost: 500, boost: 10, speed: 25 }
];

function unlockPlanet(planet) {
  const p = document.createElement("img");
  p.src = "assets/planet.png";
  p.className = "planet";
  p.style.animationDuration = planet.speed + "s";
  document.getElementById("orbit-system").appendChild(p);
  starsPerClick += planet.boost;
}

/* GALAXY MAP */
function unlockGalaxyMap() {
  document.getElementById("galaxy-map").classList.remove("hidden");
}

/* PRESTIGE */
document.getElementById("prestige-btn").onclick = () => {
  prestigeLevel++;
  stars = 0;
  starsPerClick = 1 + prestigeLevel;
  document.getElementById("orbit-system").innerHTML = "";
  showAchievement(`🌠 New Universe ${prestigeLevel}`);
};

/* RARE EVENTS */
function cosmicEvent() {
  const roll = Math.random();
  if (roll < 0.01) {
    stars += 1000;
    showAchievement("💥 Supernova!");
  }
  if (roll < 0.005) {
    starsPerClick *= 2;
    showAchievement("🕳️ Black Hole Surge");
  }
}
setInterval(cosmicEvent, 5000);

/* ACHIEVEMENTS */
function showAchievement(text) {
  if (achievements.has(text)) return;
  achievements.add(text);

  popup.textContent = text;
  popup.classList.add("show");
  achievementSound.play();

  setTimeout(() => popup.classList.remove("show"), 3000);
}

/* UNLOCK LOGIC */
function checkUnlocks() {
  planets.forEach(p => {
    if (stars >= p.cost && !p.unlocked) {
      p.unlocked = true;
      unlockPlanet(p);
      showAchievement(`🪐 ${p.name} Discovered`);
    }
  });

  if (stars >= 1000) {
    unlockGalaxyMap();
    document.getElementById("prestige-btn").classList.remove("hidden");
  }
}
