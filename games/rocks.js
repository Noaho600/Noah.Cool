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
    dx: 0,
    dy: 0
  };
}

function isInsideRock(x, y, rock) {
  const dx = x - rock.x;
  const dy = y - rock.y;
  return dx * dx + dy * dy <= rock.radius * rock.radius;
}

function resolveCollisions() {
  for (let i = 0; i < rocks.length; i++) {
    for (let j = i + 1; j < rocks.length; j++) {
      const a = rocks[i];
      const b = rocks[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy);
      const minDist = a.radius + b.radius;

      if (dist < minDist) {
        const overlap = minDist - dist;
        const nx = dx / dist;
        const ny = dy / dist;

        // Push rocks apart
        a.x -= nx * overlap / 2;
        a.y -= ny * overlap / 2;
        b.x += nx * overlap / 2;
        b.y += ny * overlap / 2;

        // Exchange velocity (very basic)
        const vxTotal = a.dx - b.dx;
        const vyTotal = a.dy - b.dy;

        a.dx -= vxTotal * 0.5;
        a.dy -= vyTotal * 0.5;
        b.dx += vxTotal * 0.5;
        b.dy += vyTotal * 0.5;
      }
    }
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let rock of rocks) {
    if (rock !== draggingRock) {
      rock.dy += gravity;
      rock.x += rock.dx;
      rock.y += rock.dy;

      // Bounce on floor
      if (rock.y + rock.radius > canvas.height) {
        rock.y = canvas.height - rock.radius;
        rock.dy *= -bounce;
      }

      // Bounce off walls
      if (rock.x - rock.radius < 0) {
        rock.x = rock.radius;
        rock.dx *= -bounce;
      } else if (rock.x + rock.radius > canvas.width) {
        rock.x = canvas.width - rock.radius;
        rock.dx *= -bounce;
      }
    }

    ctx.beginPath();
    ctx.arc(rock.x, rock.y, rock.radius, 0, Math.PI * 2);
    ctx.fillStyle = rock.color;
    ctx.fill();
  }

  resolveCollisions();
  requestAnimationFrame(update);
}

update();

// Add rock on click
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
      rock.dx = 0;
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

canvas.addEventListener("mousedown", onStart);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mouseup", onEnd);

canvas.addEventListener("touchstart", onStart);
canvas.addEventListener("touchmove", onMove);
canvas.addEventListener("touchend", onEnd);

document.getElementById("resetButton").addEventListener("click", () => {
  rocks = [];
});
