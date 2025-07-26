const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let rocks = [];
const gravity = 0.5;
const bounce = 0.7;

let draggingRock = null;
let offsetX = 0;
let offsetY = 0;

function createRock(x, y) {
  return {
    x,
    y,
    radius: 20 + Math.random() * 20,
    color: `hsl(${Math.random() * 360}, 50%, 60%)`,
    dy: 0
  };
}

function isInsideRock(x, y, rock) {
  const dx = x - rock.x;
  const dy = y - rock.y;
  return dx * dx + dy * dy <= rock.radius * rock.radius;
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let rock of rocks) {
    if (rock !== draggingRock) {
      rock.dy += gravity;
      rock.y += rock.dy;

      if (rock.y + rock.radius > canvas.height) {
        rock.y = canvas.height - rock.radius;
        rock.dy *= -bounce;
      }
    }

    ctx.beginPath();
    ctx.arc(rock.x, rock.y, rock.radius, 0, Math.PI * 2);
    ctx.fillStyle = rock.color;
    ctx.fill();
  }

  requestAnimationFrame(update);
}

update();

// Add new rock
canvas.addEventListener("click", (e) => {
  if (!draggingRock) {
    rocks.push(createRock(e.clientX, e.clientY));
  }
});

// Mouse/touch interaction
function getPointerPos(e) {
  return e.touches ? e.touches[0] : e;
}

function onStart(e) {
  const pointer = getPointerPos(e);
  for (let i = rocks.length - 1; i >= 0; i--) {
    const rock = rocks[i];
    if (isInsideRock(pointer.clientX, pointer.clientY, rock)) {
      draggingRock = rock;
      offsetX = pointer.clientX - rock.x;
      offsetY = pointer.clientY - rock.y;
      rock.dy = 0;
      break;
    }
  }
}

function onMove(e) {
  if (draggingRock) {
    const pointer = getPointerPos(e);
    draggingRock.x = pointer.clientX - offsetX;
    draggingRock.y = pointer.clientY - offsetY;
  }
}

function onEnd() {
  draggingRock = null;
}

// Support both mouse and touch
canvas.addEventListener("mousedown", onStart);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mouseup", onEnd);

canvas.addEventListener("touchstart", onStart);
canvas.addEventListener("touchmove", onMove);
canvas.addEventListener("touchend", onEnd);
