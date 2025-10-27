const hamburgerActiveMenu = document.querySelector('.hamburger-active-menu');
const homeElement = document.querySelector('.js-home');
let htmlGen = '';

for (let i = 0; i < countryList.length && countryISO.length; i++) {
  const countryListIndex = countryList[i];
  let countryISOIndex = countryISO[i];
  countryISOIndex = countryISOIndex.toLowerCase();

  htmlGen += `<div class="country-card">
  <img src="https://flagcdn.com/w320/${countryISOIndex}.png" alt="${countryISOIndex}-flag" class="country-flag ${countryISOIndex}"></img>
  <p class="country-name">${countryListIndex}</p>
  </div>`;
}

homeElement.innerHTML += htmlGen;

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  hamburgerActiveMenu.style.opacity = '1';
  hamburgerActiveMenu.style.left = '80%';
});

document.querySelector('.close-icon').addEventListener('click', () => {
  hamburgerActiveMenu.style.opacity = '0';
  hamburgerActiveMenu.style.left = '100%';
});
