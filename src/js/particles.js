// src/js/particles.js
(() => {
  const canvas = document.getElementById("bgParticles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resize() {
    // tamanho do canvas sempre igual à janela
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize(); // MUITO IMPORTANTE: setar tamanho na carga

  // cria partículas
  const particles = [];
  const N = 110;

  class Particle {
    constructor() {
      this.reset();
      this.r = 2;
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
    }
    move() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "#D94444";
      ctx.fill();
    }
  }

  for (let i = 0; i < N; i++) particles.push(new Particle());

  // interação com o mouse (atração leve)
  const mouse = { x: -9999, y: -9999 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // linhas entre partículas próximas
    ctx.lineWidth = 1;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 110 * 110) {
          const a = 1 - Math.sqrt(d2) / 110;
          ctx.strokeStyle = `rgba(217,68,68,${0.15 * a})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // atração sutil ao mouse
    for (const p of particles) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist2 = dx * dx + dy * dy;
      if (dist2 < 200 * 200) {
        p.vx += (dx / Math.sqrt(dist2 + 0.001)) * 0.02;
        p.vy += (dy / Math.sqrt(dist2 + 0.001)) * 0.02;
      }
      p.move();
      p.draw();
    }

    requestAnimationFrame(animate);
  }

  animate(); // MUITO IMPORTANTE: inicia a animação
})();
