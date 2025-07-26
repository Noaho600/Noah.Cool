const canvas = document.getElementById("planetCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let brushColor = "#00ffcc";
let currentStamp = null;

// Start rotating canvas
let angle = 0;
function rotateCanvas() {
  requestAnimationFrame(rotateCanvas);
  angle += 0.002;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(angle);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);
  ctx.putImageData(imageData, 0, 0);
  ctx.restore();
}
rotateCanvas();

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dx = x - canvas.width / 2;
  const dy = y - canvas.height / 2;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > canvas.width / 2) return;

  if (currentStamp) {
    ctx.font = "20px Arial";
    ctx.fillText(currentStamp, x - 10, y + 10);
  } else {
    ctx.fillStyle = brushColor;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function setStamp(stamp) {
  currentStamp = stamp;
}

function changeColor(event) {
  brushColor = event.target.value;
}

document.getElementById("colorPicker").addEventListener("change", changeColor);

function savePlanet() {
  const link = document.createElement('a');
  link.download = 'my_planet.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function generateRandomPlanet() {
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    const dx = x - canvas.width / 2;
    const dy = y - canvas.height / 2;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > canvas.width / 2) continue;

    ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 60%)`;
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
    ctx.fill();
  }

  function getCurrentURL() {
  return window.location.href.split('?')[0]; // Clean URL
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
}
