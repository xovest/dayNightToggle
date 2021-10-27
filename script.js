const sunMoonCont = document.querySelector('.sun-moon-container');

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const currentRot = parseInt(getComputedStyle(sunMoonCont).getPropertyValue('--rotation'));
  sunMoonCont.style.setProperty('--rotation', currentRot + 180);
});