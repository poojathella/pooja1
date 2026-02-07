let count = 3;

/* Countdown */
window.onload = function () {
  let timer = setInterval(() => {
    document.getElementById("countdown").innerText = count;
    count--;

    if (count < 0) {
      clearInterval(timer);
      nextPage(2);
    }
  }, 1000);
};

/* Switch Pages */
function nextPage(num) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });

  document.getElementById("page" + num).classList.add("active");
}

/* Start Surprise + Music */
function startSurprise() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play().catch((err) => {
    console.log("Music play blocked:", err);
  });

  nextPage(3);
}

/* Light Candle */
function lightCandle() {
  document.getElementById("flame").style.display = "block";
  document.getElementById("nextCake").style.display = "inline-block";

  // 🔴 Blast particles from candle
  blastParticles();

  // 🔴 Blast full-screen confetti from center
  fullScreenBlast();
}

/* Photo Slider */
let photos = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg"];
let index = 0;

function nextPhoto() {
  index++;
  if (index >= photos.length) index = 0;
  document.getElementById("photo").src = photos[index];
}

/* 🔴 CANDLE PARTICLE BLAST */
function blastParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0", "#c77dff"];
    p.style.background = colors[Math.floor(Math.random() * colors.length)];

    const x = (Math.random() - 0.5) * 140 + "px";
    const y = (Math.random() - 1) * 140 + "px";

    p.style.setProperty("--x", x);
    p.style.setProperty("--y", y);

    container.appendChild(p);

    setTimeout(() => p.remove(), 1000);
  }
}

/* 🔴 FULL SCREEN CENTER BLASTER */
function fullScreenBlast() {
  const container = document.getElementById("screenParticles");
  if (!container) return;

  const totalParticles = 300; // 💥 dense explosion
  const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0", "#c77dff"];

  for (let i = 0; i < totalParticles; i++) {
    const p = document.createElement("div");
    p.className = "screenParticle";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Explosion in all directions
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 400 + 200; // px distance from center

    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    p.style.setProperty("--x", x);
    p.style.setProperty("--y", y);

    container.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 1200);
  }
}
