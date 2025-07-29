const bodyBackground = document.getElementById('bodyBackground');
const firstColor = document.getElementById('firstColor');
const secondColor = document.getElementById('secondColor');
const backgroundResult = document.getElementById('backgroundResult');
const resetBtn = document.getElementById('reset');
const deg45 = document.getElementById('deg45');
const deg90 = document.getElementById('deg90');
const deg180 = document.getElementById('deg180');

const getSelectedAngle = () => {
  if (deg45.checked) return deg45.value;
  if (deg90.checked) return deg90.value;
  if (deg180.checked) return deg180.value;
  return 90; // fallback default
};

const applyGradient = () => {
  const color1 = firstColor.value;
  const color2 = secondColor.value;
  const angle = getSelectedAngle();
  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  bodyBackground.style.background = gradient;
  backgroundResult.textContent = gradient;
};

const resetColors = () => {
  firstColor.value = '#008000';
  secondColor.value = '#ff0000';
  deg90.checked = true;
  applyGradient();
};

// Events
firstColor.addEventListener('input', applyGradient);
secondColor.addEventListener('input', applyGradient);
resetBtn.addEventListener('click', resetColors);
deg45.addEventListener('change', applyGradient);
deg90.addEventListener('change', applyGradient);
deg180.addEventListener('change', applyGradient);

// Initial call
applyGradient();
