//global fn
let createEl = (tag) => document.createElement(tag);
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//game start
const gameBox = document.getElementById('game-box');
const gameStart = [];
gameStart.length = 16;
gameStart.fill(null);

const generateNewGame = () => {
  return gameStart.map(() => {
    let newNumber = Math.pow(2, rand(0, 6));
    return newNumber !== 1 ? newNumber : 0;
  })
}

generateNewGame().forEach((number) => {
  const box = createEl('div')
  gameBox.append(box);
  box.innerText = number > 0 ? number : '';
  box.classList.add(`box-${number}`);
})
