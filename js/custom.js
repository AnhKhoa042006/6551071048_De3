const toggleBtn = document.getElementById('toggleServiceBtn');
const serviceContainer = document.getElementById('serviceContainer');

toggleBtn.addEventListener('click', () => {
  if (serviceContainer.style.display === 'none' || serviceContainer.style.opacity === '0') {
    serviceContainer.style.display = 'flex';
    serviceContainer.style.opacity = '0';
    let opacity = 0;
    const fadeIn = setInterval(() => {
      opacity += 0.1;
      serviceContainer.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fadeIn);
    }, 30);
  } else {
    let opacity = 1;
    const fadeOut = setInterval(() => {
      opacity -= 0.1;
      serviceContainer.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(fadeOut);
        serviceContainer.style.display = 'none';
      }
    }, 30);
  }
});