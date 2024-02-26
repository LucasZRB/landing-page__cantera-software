export const getAverageCharacterWidth = ({ fontSize = '1rem', exampleCharacter = 'a' }) => {
  const testElement = document.createElement('span');
  testElement.style.fontSize = fontSize;
  testElement.textContent = exampleCharacter;
  document.body.appendChild(testElement);
  const width = testElement.offsetWidth;
  document.body.removeChild(testElement);
  return width;
}