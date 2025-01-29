const grid = document.querySelector('.screen-container');
const leftArrowButton = document.querySelector('.leftArrow');
const rightArrowButton = document.querySelector('.rightArrow');
const upArrowButton = document.querySelector('.upArrow');
const downArrowButton = document.querySelector('.downArrow');
const leftArrowButton2 = document.querySelector('.leftArrow2');
const rightArrowButton2 = document.querySelector('.rightArrow2');
const upArrowButton2 = document.querySelector('.upArrow2');
const downArrowButton2 = document.querySelector('.downArrow2');

let screenState = 'center';
let screenStateCounter = 0;

let x = 0; // horizontal position (-1 for left, +1 for right)
let y = 0; // vertical position (-1 for up, +1 for down)

//#region Arrow Controls

// DEBUG
/*
document.addEventListener('keydown', (e) => {
  if (e.key === ("ArrowLeft" || "ArrowDown" || "ArrowUp" || "ArrowRight")) {
    console.log(screenState);
  }
});
*/

// left movement

leftArrowButton.addEventListener('click', () => {
  if (screenState === 'center') {
    screenState = 'left';
    x += 1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  } else if (screenState === 'right') {
    screenState = 'center';
    x += 1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    if (screenState === 'center') {
      screenState = 'left';
      x += 1;
      grid.style.transform = `translate(calc(-50% + ${
        x * 100
      }vw), calc(-50% + ${y * 100}vh))`;
    } else if (screenState === 'right') {
      screenState = 'center';
      x += 1;
      grid.style.transform = `translate(calc(-50% + ${
        x * 100
      }vw), calc(-50% + ${y * 100}vh))`;
    }
  }
});

// left 2 movement (on right screen)

leftArrowButton2.addEventListener('click', () => {
  screenState = 'center';
  x += 1;
  grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
    y * 100
  }vh))`;
});

// right movement

rightArrowButton.addEventListener('click', () => {
  if (screenState === 'center') {
    screenState = 'right';
    x = -1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  } else if (screenState === 'left') {
    screenState = 'center';
    x = -1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    if (screenState === 'center') {
      screenState = 'right';
      x -= 1;
      grid.style.transform = `translate(calc(-50% + ${
        x * 100
      }vw), calc(-50% + ${y * 100}vh))`;
    } else if (screenState === 'left') {
      screenState = 'center';
      x -= 1;
      grid.style.transform = `translate(calc(-50% + ${
        x * 100
      }vw), calc(-50% + ${y * 100}vh))`;
    }
  }
});

// right 2 movement (on left screen)

rightArrowButton2.addEventListener('click', () => {
  screenState = 'center';
  x -= 1;
  grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
    y * 100
  }vh))`;
});

// up movement

upArrowButton.addEventListener('click', () => {
  if (screenState === 'center') {
    screenState = 'up';
    y = +1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  } else if (screenState === 'down') {
    screenState = 'center';
    y = +1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    if (screenState === 'center') {
      screenState = 'up';
      y += 1;
      grid.style.transform = `translate(calc(-50% + ${
        x * 100
      }vw), calc(-50% + ${y * 100}vh))`;
    } else if (screenState === 'down') {
      screenState = 'center';
      y += 1;
      grid.style.transform = `translate(calc(-50% + ${
        x * 100
      }vw), calc(-50% + ${y * 100}vh))`;
    }
  }
});

// up 2 movement (down screen)

upArrowButton2.addEventListener('click', () => {
  if (screenState === 'center') {
    screenState = 'up';
    y += 1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  } else if (screenState === 'down') {
    screenState = 'center';
    y += 1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  }
});

// down movement

downArrowButton.addEventListener('click', () => {
  if (screenState === 'center') {
    screenState = 'down';
    y = -1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  } else if (screenState === 'up') {
    screenState = 'center';
    y = -1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    if (screenState === 'center') {
      screenState = 'down';
      y -= 1;
      grid.style.transform = `translate(calc(-50% + ${
        x * 100
      }vw), calc(-50% + ${y * 100}vh))`;
    } else if (screenState === 'up') {
      screenState = 'center';
      y -= 1;
      grid.style.transform = `translate(calc(-50% + ${
        x * 100
      }vw), calc(-50% + ${y * 100}vh))`;
    }
  }
});

// down 2 movement (up screen)

downArrowButton2.addEventListener('click', () => {
  if (screenState === 'center') {
    screenState = 'down';
    y -= 1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  } else if (screenState === 'up') {
    screenState = 'center';
    y -= 1;
    grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
      y * 100
    }vh))`;
  }
});

//#endregion
