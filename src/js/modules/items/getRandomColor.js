export function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 25) + 75;
  const lightness = Math.floor(Math.random() * 25) + 50;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}