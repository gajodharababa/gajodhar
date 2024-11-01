function startCracker() {
  const crackerAnimation = document.getElementById('crackerAnimation');
  crackerAnimation.classList.remove('hidden');

  // Reset previous sparkles
  const sparklesContainer = document.querySelector('.sparkles');
  sparklesContainer.innerHTML = '';  // Clear previous sparkles

  // Generate sparkles
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Random directions
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 50 + 50;
    sparkle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

    sparklesContainer.appendChild(sparkle);
  }

  // Hide the animation after 2 seconds
  setTimeout(() => {
    crackerAnimation.classList.add('hidden');
  }, 2000);
}
