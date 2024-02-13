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
  gameBox.innerHTML = '';
  gameBox.style.backgroundColor = 'rgba(187, 173, 160, 1)';
  const newBoard = gameStart.map(() => {
    let newNumber = Math.pow(2, rand(0, 6));
    return newNumber !== 1 ? newNumber : 0;
  })

  newBoard.forEach((number) => {
    const box = createEl('div')
    gameBox.append(box);
    box.innerText = number > 0 ? number : '';
    box.classList.add(`box-${number}`);
  })
}
generateNewGame();


// ---------------------------------------------
// backround-swapper
let buttons = document.getElementById('bg-swapper').children;
[...buttons].forEach((button) => button.addEventListener('click', (event) => changeBackground(event.target.className)))
const changeBackground = (color) => {
  gameBox.style.backgroundColor = color;
}


// ---------------------------------------------
// teleloto
const ballContainer = document.getElementById('teleloto')
  .getElementsByClassName('balls')[0];
const startBtn = document.getElementById('start-teleloto');
const restartBtn = document.getElementById('restart-teleloto');


let numbers = [];
let goldBallNumber = null;
let bellDidRing = false;
const generateNewTeleloto = () => {
  numbers = [];
  goldBallNumber = rand(0, 100);
  ballContainer.innerHTML = '';
  startBtn.style.display = 'initial';
  restartBtn.style.display = 'none';
  bellDidRing = false;
}

//create new game onload
generateNewTeleloto();

const generateColor = (number) => {
  if (number === goldBallNumber) return 'gold';
  if (number <= 20) return 'yellow';
  if (number <= 40) return 'red';
  if (number <= 60) return 'green';
  if (number <= 80) return 'blue';
  if (number <= 100) return 'black';
}

const createBall = (number) => {
  const ballWrapper = document.createElement('div');
  const ball = document.createElement('div');
  const ballContent = document.createElement('div');
  const color = generateColor(number);

  ballWrapper.classList.add('ball-wrapper');
  ball.classList.add('ball', color);
  ballContent.classList.add('ball-content');
  ballContent.innerText = `${number}`;

  ballWrapper.append(ball);
  ball.append(ballContent);
  return ballWrapper;
}


const addNewBall = () => {
  if (numbers.includes(goldBallNumber)) {
    ringTheBell();
    bellDidRing = true;
    return;
  }

  let number = rand(0, 100);
  while (numbers.includes(number)) {
    number = rand(0, 100);
  }
  numbers.push(number);

  const ball = createBall(number);
  ballContainer.append(ball);

  scrollTo(0, document.body.scrollHeight);
};

const ringTheBell = () => {
  if (bellDidRing) return;

  const bellDiv = document.createElement('div');
  bellDiv.classList.add('congratulate');
  ballContainer.append(bellDiv);

  scrollTo(0, document.body.scrollHeight);

  const gameover = new Audio('/assets/sounds/winner_bell.mp3');
  gameover.play();

  setTimeout(() => {
    startBtn.style.display = 'none';
    restartBtn.style.display = 'initial';
  }, 4000);
}
