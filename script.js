const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.gear-section').offsetTop,
    behavior: 'smooth'
  });
});

// 🔥 パーティクル生成（炎の粒を自動で作成）
const fireContainer = document.getElementById('fire');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('fire-particle');
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${4.5 + Math.random()}s`;
  particle.style.opacity = Math.random();
  fireContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 2000);
}

setInterval(createParticle, 100);
