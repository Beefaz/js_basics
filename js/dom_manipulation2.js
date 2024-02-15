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

const scrollTarget = document.getElementById('teleloto-breaker')
const scrollToBottom = () => {
  scrollTarget.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

const addNewBall = () => {
  if (numbers.includes(goldBallNumber)) {
    ringTheBell();
    bellDidRing = true;
    scrollToBottom();
    return;
  }

  let number = rand(0, 100);
  while (numbers.includes(number)) {
    number = rand(0, 100);
  }
  numbers.push(number);

  const ball = createBall(number);
  ballContainer.append(ball);
  scrollToBottom();
};

const ringTheBell = () => {
  if (bellDidRing) return;

  const bellDiv = document.createElement('div');
  bellDiv.classList.add('congratulate');
  ballContainer.append(bellDiv);

  const gameover = new Audio('/assets/sounds/winner_bell.mp3');
  gameover.play();

  setTimeout(() => {
    startBtn.style.display = 'none';
    restartBtn.style.display = 'initial';
  }, 4000);
}

// ---------------------------------------------
// square-game

const squareGame = {
  gameContainer:document.getElementById('square-hitter'),
  statElement:document.getElementById('square-hitter-stats'),
  roundsElement:document.getElementById('square-hitter-rounds'),
  userScore: 0,
  pcScore: 0,
  maxScore: 5,
  timers: [],
  rounds: [],
  round: 0,
  level: 1,
  roundEnded: true,
  gameTick: 1000,
  addUserScore: function (score) {
    this.userScore += score;
  },
  addPcScore: function (score) {
    this.pcScore += score;
  },
  addMaxScore: function (score) {
    this.maxScore += score;
  },
  addLevel: function () {
    this.level += 1;
    this.maxScore += 2;
    this.gameTick -= 50;
  },
  reduceLevel: function () {
    this.level -= 1;
    this.maxScore -= 2;
    this.gameTick += 50;
  },
  checkGameEnd: function () {
    if (this.userScore >= this.maxScore || this.pcScore >= this.maxScore) {
      if(this.round === 0) this.round++;
      this.roundEnded = true;
      this.clearAllTimers();
      this.rounds.push({
        winner: this.userScore > this.pcScore ? 'Player' : 'AI',
        level: this.level,
        round: this.round,
      })
      this.updateRoundsUI()
    }
    return this.roundEnded;
  },
  setupNextRound: function () {
    this.userScore = 0;
    this.pcScore = 0;
    this.timers = [];
    this.round++;
    this.roundEnded = false;
    this.addLevel();
  },
  addTimer: function (number) {
    this.timers = [...this.timers, number];
  },
  removeTimer: function (number) {
    clearTimeout(number);
    this.timers = this.timers.filter((num) => num !== number);
  },
  clearAllTimers: function () {
    this.timers.forEach((id) => {
      clearTimeout(id);
    });
    this.timers = [];
  },
  resetDefaults: function () {
    this.userScore = 0;
    this.pcScore = 0;
    this.timers = [];
    this.rounds = [];
    this.round = 1;
    this.roundEnded = false;
  },
  updateStatsUI: function () {
    this.statElement.innerHTML = `Your points: ${this.userScore ?? 0}<br>AI points: ${this.pcScore ?? 0}<br>Game ends at: ${this.maxScore ?? 30}<br>Level: ${this.level}`;
  },
  updateRoundsUI: function () {
    let contentString = ''
    this.rounds.forEach(({winner, round, level})=>{
      contentString += `<div class="round"> <div>Round: ${round} Level: ${level}</div><div>Winner: ${winner}</div></div>`
    })
    this.roundsElement.innerHTML = contentString;
  },
};

//initiateScore display
squareGame.updateStatsUI();

const createNewBox = () => {
  const roundEnded = squareGame.checkGameEnd();
  if (roundEnded) return;

  const box = document.createElement('div');
  box.classList.add('square');
  const gameContainer = squareGame.gameContainer;
  gameContainer.append(box);
  box.style.backgroundColor = `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 1)`;
  box.style.top = `${rand(box.clientHeight, gameContainer.clientHeight) - box.clientHeight}px`;
  box.style.left = `${rand(box.clientWidth, gameContainer.clientWidth) - box.clientWidth}px`;

  //handlePcAction
  let clicked = false;
  const currentTimer = window.setTimeout(() => {
    if (!clicked) {
      squareGame.addPcScore(1);
      squareGame.updateStatsUI();
      squareGame.removeTimer(currentTimer);
      box.remove();
      createNewBox();
    }
  }, squareGame.gameTick);
  squareGame.addTimer(currentTimer);

  //handleUserAction
  const boxClickHandler = (e) => {
    clicked = true;
    e.target.remove();
    squareGame.removeTimer(currentTimer);
    squareGame.addUserScore(1);
    squareGame.updateStatsUI();
    createNewBox();
  }

  box.addEventListener('click', (e) => boxClickHandler(e));
}

const startNewBoxGame = () => {
  squareGame.gameContainer.innerHTML = '';
  squareGame.roundsElement.innerHTML = '';
  squareGame.clearAllTimers();
  squareGame.resetDefaults();
  squareGame.updateStatsUI();
  createNewBox();
}

const increaseGameLevel = () => {
  if (squareGame.gameTick <= 300 || !squareGame.roundEnded) return;
  squareGame.addLevel();
  squareGame.updateStatsUI();
}

const decreaseGameLevel = () => {
  if (squareGame.gameTick >= 1000 || !squareGame.roundEnded) return;
  squareGame.reduceLevel();
  squareGame.updateStatsUI();
}

const startNewRound = () => {
  if (!squareGame.roundEnded) return undefined;
  squareGame.gameContainer.innerHTML = '';
  squareGame.setupNextRound();
  createNewBox();
}
