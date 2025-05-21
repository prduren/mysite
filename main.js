const grid = document.querySelector('.screen-container');
const leftArrowButton = document.querySelector('.leftArrow');
const rightArrowButton = document.querySelector('.rightArrow');
const upArrowButton = document.querySelector('.upArrow');
const downArrowButton = document.querySelector('.downArrow');
const leftArrowButton2 = document.querySelector('.leftArrow2');
const rightArrowButton2 = document.querySelector('.rightArrow2');
const upArrowButton2 = document.querySelector('.upArrow2');
const downArrowButton2 = document.querySelector('.downArrow2');
const snowflakeButton = document.querySelector('.snowflakeButton');

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

// upArrowButton.addEventListener('click', () => {
//   if (screenState === 'center') {
//     screenState = 'up';
//     y = +1;
//     grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
//       y * 100
//     }vh))`;
//   } else if (screenState === 'down') {
//     screenState = 'center';
//     y = +1;
//     grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
//       y * 100
//     }vh))`;
//   }
// });

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'ArrowUp') {
//     if (screenState === 'center') {
//       screenState = 'up';
//       y += 1;
//       grid.style.transform = `translate(calc(-50% + ${
//         x * 100
//       }vw), calc(-50% + ${y * 100}vh))`;
//     } else if (screenState === 'down') {
//       screenState = 'center';
//       y += 1;
//       grid.style.transform = `translate(calc(-50% + ${
//         x * 100
//       }vw), calc(-50% + ${y * 100}vh))`;
//     }
//   }
// });

// // up 2 movement (down screen)

// upArrowButton2.addEventListener('click', () => {
//   if (screenState === 'center') {
//     screenState = 'up';
//     y += 1;
//     grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
//       y * 100
//     }vh))`;
//   } else if (screenState === 'down') {
//     screenState = 'center';
//     y += 1;
//     grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
//       y * 100
//     }vh))`;
//   }
// });

// // down movement

// downArrowButton.addEventListener('click', () => {
//   if (screenState === 'center') {
//     screenState = 'down';
//     y = -1;
//     grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
//       y * 100
//     }vh))`;
//   } else if (screenState === 'up') {
//     screenState = 'center';
//     y = -1;
//     grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
//       y * 100
//     }vh))`;
//   }
// });

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'ArrowDown') {
//     if (screenState === 'center') {
//       screenState = 'down';
//       y -= 1;
//       grid.style.transform = `translate(calc(-50% + ${
//         x * 100
//       }vw), calc(-50% + ${y * 100}vh))`;
//     } else if (screenState === 'up') {
//       screenState = 'center';
//       y -= 1;
//       grid.style.transform = `translate(calc(-50% + ${
//         x * 100
//       }vw), calc(-50% + ${y * 100}vh))`;
//     }
//   }
// });

// // down 2 movement (up screen)

// downArrowButton2.addEventListener('click', () => {
//   if (screenState === 'center') {
//     screenState = 'down';
//     y -= 1;
//     grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
//       y * 100
//     }vh))`;
//   } else if (screenState === 'up') {
//     screenState = 'center';
//     y -= 1;
//     grid.style.transform = `translate(calc(-50% + ${x * 100}vw), calc(-50% + ${
//       y * 100
//     }vh))`;
//   }
// });

//#endregion

//#region Secret

document
  .getElementById('secretInput')
  .addEventListener('keydown', function (event) {
    console.log('got key down');
    if (event.key === 'Enter' && this.value === '4815162342') {
      console.log('secret entered');
      document.getElementById('secretScreen').style.display = 'block';
    }
  });

//#endregion

//#region Carousel
const track = document.querySelector('.carousel-track');
let index = 0;

function nextSlide() {
  index++;
  if (index >= track.children.length) {
    index = 0; // loops back to first img
  }
  track.style.transform = `translateX(${-index * 100}vw)`;
}

setInterval(nextSlide, 5000);

//#endregion

//#region Snowflake

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.innerHTML = '&#10052;';
  snowflake.classList.add('snowflake');
  document.body.appendChild(snowflake);

  const size = Math.random() * 10 + 10;
  const startX = Math.random() * window.innerWidth;
  snowflake.style.fontSize = `${size}px`;
  snowflake.style.left = `${startX}px`;

  const duration = Math.random() * 3 + 2;

  snowflake.animate(
    [
      { transform: `translateY(0px)`, opacity: 1 },
      { transform: `translateY(${window.innerHeight}px)`, opacity: 0 },
    ],
    {
      duration: duration * 1000,
      easing: 'linear',
    }
  ).onfinish = () => snowflake.remove(); // remove after anim for performance

  setTimeout(createSnowflake, Math.random() * 300);
}

snowflakeButton.addEventListener('click', () => {
  createSnowflake();
});

//#endregion
