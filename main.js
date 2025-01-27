const grid = document.querySelector('.screen-container');
const leftArrowButton = document.querySelector('.leftArrow');

let x = 0; // horizontal position (-1 for left, +1 for right)
let y = 0; // vertical position (-1 for up, +1 for down)

leftArrowButton.addEventListener('click', () => {
  // move left (decrease x position)
  x += 1;
  console.log("clickedddd");
  grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${y * 100}vh))`;
});