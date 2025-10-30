const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.gear-section').offsetTop,
    behavior: 'smooth'
  });
});

// 🔥 パーティクル生成（画面右側3割に限定）
const createParticle = () => {
  const particle = document.createElement("div");
  particle.classList.add("fire-particle");

  const areaWidth = window.innerWidth;
  const startX = areaWidth * 0.85;        // 右側30%
  const endX = areaWidth - 60;           // 右端から20px内側まで
  const randomX = startX + Math.random() * (endX - startX);

  particle.style.left = `${randomX}px`;

  const size = Math.random() * 6 + 4;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const duration = Math.random() * 3 + 4; // 上昇スピード
  particle.style.animation = `rise ${duration}s linear forwards`;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
};

setInterval(createParticle, 150);

