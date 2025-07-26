// planet.js - Draw a Planet with stamps, saving, sharing, undo/redo

const canvas = document.getElementById("planetCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;

let stamps = [];
let redoStack = [];
let currentStamp = "🌲";

const stampOptions = ["🌲", "☁️", "💧"];

// Setup stamp buttons
document.getElementById("treeBtn").addEventListener("click", () => currentStamp = "🌲");
document.getElementById("cloudBtn").addEventListener("click", () => currentStamp = "☁️");
document.getElementById("waterBtn").addEventListener("click", () => currentStamp = "💧");
document.getElementById("randomBtn").addEventListener("click", generateRandomPlanet);
document.getElementById("resetBtn").addEventListener("click", () => {
  stamps = [];
  redoStack = [];
  draw();
});

document.getElementById("undoBtn").addEventListener("click", () => {
  if (stamps.length > 0) {
    const last = stamps.pop();
    redoStack.push(last);
    draw();
  }
});

document.getElementById("redoBtn").addEventListener("click", () => {
  if (redoStack.length > 0) {
    const last = redoStack.pop();
    stamps.push(last);
    draw();
  }
});

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 200;

  const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
  if (dist <= radius) {
    stamps.push({ x, y, stamp: currentStamp });
    redoStack = []; // clear redo when new stamp added
    draw();
  }
});

function draw() {
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 200;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#3a7bd5";
  ctx.fill();

  for (let s of stamps) {
    ctx.font = "30px sans-serif";
    ctx.fillText(s.stamp, s.x, s.y);
  }
}

draw();

function generateRandomPlanet() {
  stamps = [];
  redoStack = [];
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const stamp = stampOptions[Math.floor(Math.random() * stampOptions.length)];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
    const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

    if (dist <= radius) {
      stamps.push({ x, y, stamp });
    }
  }
  draw();
}

// Save as image
document.getElementById("saveBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "my_planet.png";
  link.href = canvas.toDataURL();
  link.click();
});

// Share tools
function getCurrentURL() {
  return window.location.href.split('?')[0];
}

function copyLink() {
  const url = getCurrentURL();
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard!");
  });
}

function shareToTwitter() {
  const text = encodeURIComponent("I just created a planet! 🌎 Check it out:");
  const url = encodeURIComponent(getCurrentURL());
  const shareURL = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(shareURL, "_blank");
}

function shareToFacebook() {
  const url = encodeURIComponent(getCurrentURL());
  const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(shareURL, "_blank");
}

document.getElementById("copyLinkBtn").addEventListener("click", copyLink);
document.getElementById("twitterBtn").addEventListener("click", shareToTwitter);
document.getElementById("facebookBtn").addEventListener("click", shareToFacebook);
