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

// Drop a rock where clicked or tapped
canvas.addEventListener("click", (e) => {
  rocks.push(createRock(e.clientX, e.clientY));
});

canvas.addEventListener("touchend", (e) => {
  const touch = e.changedTouches[0];
  rocks.push(createRock(touch.clientX, touch.clientY));
});
