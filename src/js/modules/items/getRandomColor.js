export function getRandomLinearGradient() {
  const randomHue = Math.floor(Math.random() * 361);
  const randomSaturation = Math.floor(Math.random() * 101);
  const randomLightness = Math.floor(Math.random() * 101);

  const randomColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;
  return `background-image: linear-gradient(to right, white, ${randomColor});`;
}