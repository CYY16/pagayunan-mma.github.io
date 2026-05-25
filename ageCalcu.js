/* jshint esversion: 6 */

const placeholderText = 'Put Your Age In the Textbox Above';

const planetData = {
  sun: { orbitTime: 'N/A', distance: '0 km', periodRatio: null },
  mercury: { orbitTime: '88 days', distance: '57.9 million km', periodRatio: 0.240794 },
  venus: { orbitTime: '0.61519726 Earth years', distance: '108.2 million km', periodRatio: 0.61519726 },
  earth: { orbitTime: '1 Earth years', distance: '149.6 million km', periodRatio: 1.0 },
  mars: { orbitTime: '1.8808158 Earth years', distance: '227.9 million km', periodRatio: 1.8808158 },
  jupiter: { orbitTime: '11.862615 Earth years', distance: '778.5 million km', periodRatio: 11.862615 },
  saturn: { orbitTime: '29.447498 Earth years', distance: '1.43 billion km', periodRatio: 29.447498 },
  uranus: { orbitTime: '84.016846 Earth years', distance: '2.87 billion km', periodRatio: 84.016846 },
  neptune: { orbitTime: '164.79132 Earth years', distance: '4.50 billion km', periodRatio: 164.79132 }
};

function formatPlanetValue(value) {
  return typeof value === 'number' ? value.toFixed(2) : value;
}

function updatePlanetStats(planetId, earthAge) {
  const section = document.getElementById(planetId);
  if (!section) return;

  const ageEl = section.querySelector('[data-stat="age"]');
  const revolutionsEl = section.querySelector('[data-stat="revolutions"]');
  const orbitTimeEl = section.querySelector('[data-stat="orbitTime"]');
  const distanceEl = section.querySelector('[data-stat="distance"]');

  if (!ageEl || !revolutionsEl || !orbitTimeEl || !distanceEl) return;

  const planet = planetData[planetId];
  if (!planet) return;

  if (earthAge > 0 && planet.periodRatio) {
    const planetAge = earthAge / planet.periodRatio;
    const revolutions = Math.floor(planetAge);

    ageEl.textContent = `${formatPlanetValue(planetAge)} years`;
    revolutionsEl.textContent = `${revolutions}`;
    orbitTimeEl.textContent = planet.orbitTime;
    distanceEl.textContent = planet.distance;
  } else if (planet.periodRatio === null) {
    ageEl.textContent = 'N/A';
    revolutionsEl.textContent = 'N/A';
    orbitTimeEl.textContent = planet.orbitTime;
    distanceEl.textContent = planet.distance;
  } else {
    ageEl.textContent = placeholderText;
    revolutionsEl.textContent = placeholderText;
    orbitTimeEl.textContent = placeholderText;
    distanceEl.textContent = placeholderText;
  }
}

function resetPlanetStats() {
  document.querySelectorAll('.planet-card').forEach(card => {
    const ageEl = card.querySelector('[data-stat="age"]');
    const revolutionsEl = card.querySelector('[data-stat="revolutions"]');
    const orbitTimeEl = card.querySelector('[data-stat="orbitTime"]');
    const distanceEl = card.querySelector('[data-stat="distance"]');

    if (ageEl) ageEl.textContent = placeholderText;
    if (revolutionsEl) revolutionsEl.textContent = placeholderText;
    if (orbitTimeEl) orbitTimeEl.textContent = placeholderText;
    if (distanceEl) distanceEl.textContent = placeholderText;
  });
}

function calculateAgeOnPlanets() {
  const input = document.getElementById('earthAgeInput');
  const rawValue = parseFloat(input.value);
  const validAge = Number.isFinite(rawValue) && rawValue > 0;

  if (!validAge) {
    resetPlanetStats();
    return;
  }

  Object.keys(planetData).forEach(planetId => {
    updatePlanetStats(planetId, rawValue);
  });
}

const calculateBtn = document.getElementById('calculateBtn');
const earthInput = document.getElementById('earthAgeInput');

if (calculateBtn && earthInput) {
  calculateBtn.addEventListener('click', calculateAgeOnPlanets);
  earthInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      calculateAgeOnPlanets();
    }
  });
}
