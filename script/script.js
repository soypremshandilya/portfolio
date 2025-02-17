document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded!");

  // Animated Background
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  class Particle {
    constructor(x, y, size, color, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.speedX = speedX;
      this.speedY = speedY;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createParticles(e) {
    for (let i = 0; i < 5; i++) {
      let x = e.x;
      let y = e.y;
      let size = Math.random() * 5 + 2;
      let color = "#f39c12";
      let speedX = Math.random() * 3 - 1.5;
      let speedY = Math.random() * 3 - 1.5;

      particles.push(new Particle(x, y, size, color, speedX, speedY));
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
      particle.update();
      particle.draw();
      if (particle.size <= 0.2) {
        particles.splice(index, 1);
      }
    });

    requestAnimationFrame(animateParticles);
  }

  window.addEventListener("mousemove", createParticles);
  animateParticles();
});
