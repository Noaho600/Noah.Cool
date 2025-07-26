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

function createRock(x, y) {
  return {
    x,
    y,
    radius: 20 + Math.random() * 20,
    color: `hsl(${Math.random() * 360}, 50%, 60%)`,
    dy: 0 // only vertical movement
  };
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let rock of rocks) {
    // Apply gravity
    rock.dy += gravity;
    rock.y += rock.dy;

    // Bounce on floor
    if (rock.y + rock.radius > canvas.height) {
      rock.y = canvas.height - rock.radius;
      rock.dy *= -bounce;
    }

    ctx.beginPath();
    ctx.arc(rock.x, rock.y, rock.radius, 0, Math.PI * 2);
    ctx.fillStyle = rock.color;
    ctx.fill();
  }

  requestAnimationFrame(update);
}

update();

// Add rock on click
canvas.addEventListener("click", (e) => {
  rocks.push(createRock(e.clientX, e.clientY));
});

// Add rock on touch (mobile)
canvas.addEventListener("touchend", (e) => {
  const touch = e.changedTouches[0];
  rocks.push(createRock(touch.clientX, touch.clientY));
});
