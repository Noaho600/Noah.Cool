let stars = 0;
let starsPerClick = 1;
let prestigeLevel = 0;

const starText = document.getElementById("stars");
const achievement = document.getElementById("achievement");
const prestigeBtn = document.getElementById("prestige");
const orbitSystem = document.getElementById("orbit-system");

const planets = [
  { name: "Mercury", cost: 50, boost: 1, speed: 12, unlocked: false },
  { name: "Venus", cost: 200, boost: 3, speed: 18, unlocked: false },
  { name: "Earth", cost: 500, boost: 5, speed: 25, unlocked: false }
];

/* CLICK STAR */
document.getElementById("star-area").onclick = () => {
  stars += starsPerClick;
  update();
  unlocks();
};

/* UPDATE UI */
function update() {
  starText.textContent = `${stars} Stars`;
}

/* PLANET UNLOCK */
function createPlanet(p) {
  const orbit = document.createElement("div");
  orbit.className = "orbit";
  orbit.style.animationDuration = p.speed + "s";

  const planet = document.createElement("div");
  planet.className = "planet";
  planet.textContent = "🪐";

  orbit.appendChild(planet);
  orbitSystem.appendChild(orbit);

  starsPerClick += p.boost;
  popup(`🪐 ${p.name} discovered`);
}

/* ACHIEVEMENT POPUP */
function popup(text) {
  achievement.textContent = text;
  achievement.style.opacity = 1;
  setTimeout(() => achievement.style.opacity = 0, 2500);
}

/* UNLOCK CHECKS */
function unlocks() {
  planets.forEach(p => {
    if (!p.unlocked && stars >= p.cost) {
      p.unlocked = true;
      createPlanet(p);
    }
  });

  if (stars >= 1000) {
    prestigeBtn.disabled = false;
  }
}

/* PRESTIGE */
prestigeBtn.onclick = () => {
  prestigeLevel++;
  stars = 0;
  starsPerClick = 1 + prestigeLevel;
  orbitSystem.innerHTML = "";
  planets.forEach(p => p.unlocked = false);
  prestigeBtn.disabled = true;
  popup(`🌠 New Universe ${prestigeLevel}`);
  update();
};

/* RARE EVENTS */
setInterval(() => {
  const roll = Math.random();
  if (roll < 0.01) {
    stars += 250;
    popup("💥 Supernova!");
    update();
  }
}, 4000);

