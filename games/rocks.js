// rocks.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let rocks = [];

function createRock(x, y) {
  return {
    x,
    y,
    radius: 20 + Math.random() * 20,
    color: `hsl(${Math.random() * 360}, 50%, 60%)`,
    dx: (Math.random() - 0.5) * 4,
    dy: (Math.random() - 0.5) * 4,
  };
}

for (let i = 0; i < 30; i++) {
  rocks.push(createRock(Math.random() * canvas.width, Math.random() * canvas.height));
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let rock of rocks) {
    rock.x += rock.dx;
    rock.y += rock.dy;

    // Bounce off walls
    if (rock.x - rock.radius < 0 || rock.x + rock.radius > canvas.width) rock.dx *= -1;
    if (rock.y - rock.radius < 0 || rock.y + rock.radius > canvas.height) rock.dy *= -1;

    ctx.beginPath();
    ctx.arc(rock.x, rock.y, rock.radius, 0, Math.PI * 2);
    ctx.fillStyle = rock.color;
    ctx.fill();
  }
  requestAnimationFrame(update);
}

update();

// Touch support for dragging rocks
let draggingRock = null;
canvas.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  for (let rock of rocks) {
    const dx = x - rock.x;
    const dy = y - rock.y;
    if (Math.sqrt(dx * dx + dy * dy) < rock.radius) {
      draggingRock = rock;
      break;
    }
  }
});

canvas.addEventListener("touchmove", (e) => {
  if (draggingRock) {
    const touch = e.touches[0];
    draggingRock.x = touch.clientX;
    draggingRock.y = touch.clientY;
  }
});

canvas.addEventListener("touchend", () => {
  draggingRock = null;
});
