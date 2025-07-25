// Module aliases
const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

// Create engine and world
const engine = Engine.create();
const { world } = engine;

// Create renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    background: '#f0f0f0',
    wireframes: false,
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Ground
const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 10, window.innerWidth, 20, {
  isStatic: true,
  render: { fillStyle: '#888' }
});
World.add(world, ground);

// Drop rocks on click
window.addEventListener('click', () => {
  const rock = Bodies.circle(Math.random() * window.innerWidth, 0, 30, {
    restitution: 0.6,
    friction: 0.8,
    render: {
      fillStyle: '#444'
    }
  });
  World.add(world, rock);
});

// Mouse drag (optional)
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: { visible: false }
  }
});
World.add(world, mouseConstraint);

// Keep canvas full-screen on resize
window.addEventListener('resize', () => {
  render.canvas.width = window.innerWidth;
  render.canvas.height = window.innerHeight;
});
