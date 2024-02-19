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

const scrollTarget = document.getElementById('teleloto-breaker');
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

  const gameOverSound = new Audio('/assets/sounds/winner_bell.mp3');
  gameOverSound.play();

  setTimeout(() => {
    startBtn.style.display = 'none';
    restartBtn.style.display = 'initial';
  }, 4000);
}


// ---------------------------------------------
// square-game
const squareGame = {
  gameContainer: document.getElementById('square-hitter'),
  statElement: document.getElementById('square-hitter-stats'),
  roundsElement: document.getElementById('square-hitter-rounds'),
  userScore: 0,
  pcScore: 0,
  maxScore: 30,
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
      if (this.round === 0) this.round++;
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
    this.rounds.forEach(({winner, round, level}) => {
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
      squareGame.removeTimer(currentTimer);
      const gameover = new Audio('/assets/sounds/error.mp3');
      gameover.play();
      squareGame.addPcScore(1);
      squareGame.updateStatsUI();
      box.remove();
      createNewBox();
    }
  }, squareGame.gameTick);
  squareGame.addTimer(currentTimer);

  //handleUserAction
  const boxClickHandler = (e) => {
    clicked = true;
    squareGame.removeTimer(currentTimer);
    const clickSound = new Audio('/assets/sounds/click.mp3');
    clickSound.play();
    e.target.remove();
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
  if (!squareGame.roundEnded) return;

  squareGame.gameContainer.innerHTML = '';
  squareGame.setupNextRound();
  createNewBox();
}

// ---------------------------------------------
// google timer + stopwatch
const timer = {
  clockUI: document.getElementById('timer-ui'),
  clockUIDisplay: document.getElementById('timer-ui-display'),
  startBtn: document.getElementById('timer-start-btn'),
  progressBar: document.getElementById('timer-progress-bar'),
  timer: 300000,
  timerDefault: 300000,
  timers: [],
  timeIsRunning: false,
  handleClick: function () {
    if (!this.timeIsRunning && this.timer > 0) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
    this.updateStartBtnUI();
  },
  updateStartBtnUI: function () {
    this.startBtn.innerHTML = this.timeIsRunning ? 'Stop' : 'Start';
  },
  calculateTime: function (ms) {
    if (ms > 359999000) ms = 359999000;
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)));
    return {hours, minutes, seconds};
  },
  setTimer: function (el) {
    el.value = el.value.substring().replace(/[^0-9]/g, '');
    let input = [...`${el.value}`].reverse().map((string) => parseInt(string));

    this.clockUIDisplay.innerHTML = `
      ${input[5] ?? 0}${input[4] ?? 0}<span>h</span>&nbsp
      ${input[3] ?? 0}${input[2] ?? 0}<span>m</span>&nbsp
      ${input[1] ?? 0}${input[0] ?? 0}<span>s</span>
    `;

    let miliseconds = 0;
    if (input[0]) miliseconds += input[0] * 1000;
    if (input[1]) miliseconds += input[1] * 10000;
    if (input[2]) miliseconds += input[2] * 60000;
    if (input[3]) miliseconds += input[3] * 600000;
    if (input[4]) miliseconds += input[4] * 3600000;
    if (input[5]) miliseconds += input[5] * 36000000;

    this.timerDefault = this.timer = miliseconds;
    this.pauseTimer();

  },
  startTimer: function () {
    this.timeIsRunning = true;
    const timer = window.setInterval(() => {
      this.timer -= 1000;
      this.updateTimerUI();
      if (this.timer <= 0) {
        this.pauseTimer();
      }
    }, 1000);
    this.timers.push(timer);
  },
  pauseTimer() {
    clearInterval(this.timers.pop());
    this.timeIsRunning = false;
    this.updateTimerUI();
    this.updateStartBtnUI();
  },
  resetTimer: function () {
    this.timer = this.timerDefault;
    this.pauseTimer();
    this.updateTimerUI();
  },
  updateTimerUI() {
    const {hours, minutes, seconds} = this.calculateTime(this.timer);
    this.clockUIDisplay.innerHTML = `
      ${hours < 10 ? '0' + hours : hours}<span>h</span>&nbsp
      ${minutes < 10 ? '0' + minutes : minutes}<span>m</span>&nbsp
      ${seconds < 10 ? '0' + seconds : seconds}<span>s</span>
    `;
    if (this.progressBar) this.progressBar.style.background = `linear-gradient(to right, rgba(2,0,36,1) ${Math.round((this.timerDefault - this.timer) / this.timerDefault * 10000) / 100}%, rgba(0, 0, 0, 0) 0%)`;
  },
}

//initiate timer
timer.updateTimerUI();

const stopwatch = {
  clockUI: document.getElementById('stopwatch-ui'),
  clockUIDisplay: document.getElementById('stopwatch-ui-display'),
  startBtn: document.getElementById('stopwatch-start-btn'),
  timer: 0,
  timerDefault: 0,
  timers: [],
  timeIsRunning: false,
  handleClick: function () {
    if (!this.timeIsRunning) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
    this.updateStartBtnUI();
  },
  updateStartBtnUI: function () {
    this.startBtn.innerHTML = this.timeIsRunning ? 'Stop' : 'Start';
  },
  calculateTime: function (ms) {
    let time = new Date(ms);
    return {
      hours: time.getUTCHours(),
      minutes: time.getUTCMinutes(),
      seconds: time.getUTCSeconds(),
      milliseconds: time.getUTCMilliseconds()
    }
  },
  resetTimer: function () {
    this.timer = this.timerDefault;
    this.pauseTimer();
    this.updateStopwatchUi();
  },
  startTimer: function () {
    this.timeIsRunning = true;
    const timer = window.setInterval(() => {
      this.timer += 10;
      this.updateStopwatchUi();
    }, 10);
    this.timers.push(timer);
  },
  pauseTimer() {
    clearInterval(this.timers.pop());
    this.timeIsRunning = false;
    this.updateStopwatchUi();
    this.updateStartBtnUI();
  },
  updateStopwatchUi() {
    const {hours, minutes, seconds, milliseconds} = this.calculateTime(this.timer);
    let string = ''
    if (hours > 0) string += `${hours < 10 ? '0' + hours : hours}<span>h</span>&nbsp`;
    if (minutes > 0) string += `${hours < 10 ? '0' + hours : hours}<span>h</span>&nbsp`;
    string += `${seconds < 10 ? '0' + seconds : seconds}<span>s</span>&nbsp<span>${milliseconds < 100 ? '0' + milliseconds / 10 : milliseconds / 10}</span>`
    this.clockUIDisplay.innerHTML = string;
  }
}
//initiate stopwatch
stopwatch.updateStopwatchUi();

const uiSwitchButtons = document.getElementsByClassName('clock-switcher')[0].children;
const switchUI = (element) => {
  if (element.classList.contains('active')) return;

  const [button1, button2] = uiSwitchButtons;
  button1.classList.toggle("active");
  button2.classList.toggle("active");
  timer.clockUI.classList.toggle("hidden");
  stopwatch.clockUI.classList.toggle("hidden");
};


// ---------------------------------------------
// autocomplete input
const googleStrings = [
  "What is my IP",
  "How many weeks in a year",
  "How many ounces in a cup",
  "How to screenshot on Mac",
  "When is the Super Bowl",
  "When is Easter",
  "When is Father's Day",
  "What is Juneteenth",
  "How do I register to vote",
  "When is Thanksgiving",
  "How many days until Christmas",
  "How many ounces in a pound",
  "How to tie a tie",
  "How many liters in a gallon",
  "How to screenshot on windows",
  "How many cups in a quart",
  "What holiday is today",
  "How many oz in a gallon",
  "How many quarts in a gallon",
  "What is RSV",
  "When is the next full moon",
  "When is Mother's Day 2023",
  "What is monkeypox",
  "How long does covid last",
  "How to delete apps",
  "How to delete Instagram account",
  "How many teaspoons in a tablespoon",
  "When is Labor Day",
  "When is Memorial Day",
  "How many oz in a cup",
  "How to lose weight fast",
  "Where to vote",
  "How many people are in the world",
  "How to solve a Rubik's cube",
  "How much house can I afford",
  "How many feet in a mile",
  "How long to boil eggs",
  "What time is it in Australia",
  "What is a recession",
  "Why were chainsaws invented",
  "What is pansexual",
  "What does Let's go Brandon mean",
  "When are taxes due 2023",
  "How many steps in a mile",
  "When does fall start",
  "When does summer start",
  "How to lower blood pressure",
  "How to write a cover letter",
  "How to take a screenshot on Mac",
  "How to make French toast",
  "What time does Walmart close",
  "How old is Hasbulla",
  "Why are flags at half mast today",
  "What is a woman",
  "How to take a screenshot",
  "How to write a check",
  "How many square feet in an acre",
  "When is the next Powerball drawing",
  "What time does McDonald's stop serving breakfast",
  "How many grams in a pound",
  "What does 444 mean",
  "How many kids does Nick Cannon have",
  "How long are you contagious with Covid",
  "How to get rid of fruit flies",
  "How many days in a year",
  "What time is it in Arizona",
  "How to delete Facebook account",
  "How many ounces in a liter",
  "How to take a screenshot on Windows",
  "How did Jeffrey Dahmer die",
  "What is a verb",
  "Why is the sky blue",
  "How to get rid of gnats",
  "How old is Jenna Ortega",
  "When is Christmas",
  "How old is Dolly Parton",
  "How many seconds in a day",
  "When is Mardi Gras 2023",
  "Where is the Super Bowl this year",
  "How many continents are there",
  "What time is it in Germany",
  "What channel is the Super Bowl on",
  "How did Elvis die",
  "How many tablespoons in 1/4 cup",
  "What time is it in India",
  "How to get rid of hiccups",
  "What does 222 mean",
  "How old is Tom Cruise",
  "How long does it take to get a passport",
  "What is MS",
  "How to screenshot on Chromebook",
  "What does SOS mean",
  "What does woke mean",
  "How to say hi in Spanish",
  "What is gaslighting",
  "What does monkeypox look like",
  "How many countries are there",
  "How old is Queen Elizabeth",
  "How many genders are there",
  "What does rizz mean"
]

const handleInput = {
  input: document.getElementById('autocomplete-input'),
  options: document.getElementById('autocomplete-options'),
  getOptions: function (el) {
    if (el.value === '') return this.removeSuggestions();

    const filteredMappedElements =
      googleStrings
        .filter((sentence) =>
          sentence.toUpperCase().includes(el.value.toUpperCase()))
        .sort((a, b) => a.toUpperCase() - b.toUpperCase())
        .slice(0, 5)
        .map((string) => this.createOptionElement(string, el.value));

    this.options.replaceChildren(...filteredMappedElements);
  },
  selectOption: function (string) {
    this.input.value = string;
    this.removeSuggestions();
  },
  createOptionElement: function (string, matchingString) {
    const matchingStr = string.match(new RegExp(`${matchingString}`, 'i'));
    const spanWrappedMatchingStr = `<span>${matchingStr}</span>`;

    const element = document.createElement('div');

    element.className = 'input-option';
    element.innerHTML = string.replace(matchingStr, spanWrappedMatchingStr);
    element.onclick = () => this.selectOption(string);
    return element;
  },
  removeSuggestions: function () {
    this.options.innerHTML = '';
  }
}
