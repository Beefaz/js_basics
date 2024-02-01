// global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


document.write('<h1>3. Arrays/Whiles</h1><br/>');
// ------------TASKS------------------
// 1.
document.write('1. ');
const writeAsterisks = () => {
  let count = 400;
  while (count > 0) {
    if (count % 50 === 0) {
      document.write('<br/>');
    }
    document.write('*');
    count--;
  }
}
writeAsterisks();
document.write('<br/><br/>');


// 2.
document.write('2. <br/>');
const generateColoredNumbers = () => {
  let numberElementList = [];
  let valueAboveCount = 0;

  for (let i = 0; i < 300; i++) {
    const randomNumber = rand(0, 300);


    if (randomNumber > 150) {
      valueAboveCount++
    }
    if (randomNumber > 275) {
      numberElementList.push(`<span style="color: red">${randomNumber}</span>`)
    } else {
      numberElementList.push(randomNumber);
    }
  }

  document.write(numberElementList.join(' '));
  document.write('<br/>Count above 150: ' + valueAboveCount);
}

generateColoredNumbers();
document.write('<br/><br/>');

// 3.
document.write('3. <br/>');
const generateDivisibleNumbers = () => {
  let numberElementList = [];
  let valueAboveCount = 0;

  for (let i = 0; i < 3000; i++) {
    if (i % 77 === 0) {
      numberElementList.push(i);
      valueAboveCount++
    }
  }

  document.write(numberElementList.join(', '));
  document.write('<br/>Divided by 77 count: ' + valueAboveCount);
}
generateDivisibleNumbers();
document.write('<br/><br>');

// 4.
document.write('4. ');
const generateSquare = () => {
  let generatedString = '';

  for (let i = 0; i < 100; i++) {
    generatedString = generatedString + '<span>*</span>';
  }

  document.write(`<div style="
    display: grid;
    grid-template-columns: repeat(10, 1ch);
    grid-template-rows: repeat(10, 1ch);
    ">${generatedString}</div>`);
}
generateSquare();
document.write('<br/>');

// 5.
document.write('<br/>');
const generateCrosshair = () => {
  let generatedString = '';

  for (let i = 0; i < 100; i++) {
    if ((i + 9) % 9 === 0 || (i + 11) % 11 === 0) {
      generatedString = generatedString + `<span style="color:red">*</span>`;
    } else {
      generatedString = generatedString + `<span>*</span>`;
    }
    if ((i + 1) % 10 === 0) {
      generatedString = generatedString + `<br/><br/>`;
    }
  }
  document.write(`<div style='line-height: 4px'>${generatedString}</div>`);

  //variant 2 start
  // }
  // document.write(`<div style="
  //   display: grid;
  //   grid-template-columns: repeat(10, 1ch);
  //   grid-template-rows: repeat(10, 1ch);
  //   ">${generatedString}</div>`);
  //variant 2 end
}
generateCrosshair();
document.write('<br/>');


// reworked variant bound to sidelength in * symbols;
// 5.
// document.write('5. ');
// const generateCrosshair = (sideLength) => {
//   let generatedString = '';
//
//   for (let i = 0; i < sideLength * sideLength; i++) {
//     if ((i + sideLength - 1) % (sideLength - 1) === 0 || (i + sideLength + 1) % (sideLength + 1) === 0) {
//       generatedString = generatedString + `<span style="color:red">*</span>`;
//     } else {
//       generatedString = generatedString + `<span>*</span>`;
//     }
//   }
//
//   document.write(`<div style="
//     display: grid;
//     grid-template-columns: repeat(${sideLength}, 1ch);
//     grid-template-rows: repeat(${sideLength}, 1ch);
//     ">${generatedString}</div>`);
// }
// generateCrosshair(25);
// document.write('<br/><br/>');

//6.
document.write('6. ');
document.write('<br/>');
const stopCoinFlip = (stringValue) => {
  const breakSequence = stringValue.toUpperCase();
  const coinValues = ["H", "S"];
  const flipResults = [];


  let loop = true;
  while (loop) {
    flipResults.push(coinValues[rand(0, 1)]);
    const lastThreeResults = flipResults.slice(-3).reverse().join('');

    if (lastThreeResults.startsWith(breakSequence)) {
      loop = false;
    }
  }
  document.write(flipResults.join(', '));
}
stopCoinFlip('H');
document.write('<br/>');
stopCoinFlip('HHH');
document.write('<br/>');
stopCoinFlip('SSS');
document.write('<br/><br/>');


//7.
document.write('7. ');
document.write('<br/>');
const determineWinner = () => {
  let roundWinner;
  let petrasResult = 0;
  let kazysResult = 0;

  while (petrasResult < 222 && kazysResult < 222) {
    const petrasToss = rand(10, 20);
    const kazysToss = rand(5, 25);
    petrasResult += petrasToss;
    kazysResult += kazysToss;
  }

  roundWinner = petrasResult > kazysResult ? 'Petras ' + petrasResult : 'Kazys ' + kazysResult;
  if (petrasResult === kazysResult) {
    roundWinner = 'noone, both got same points';
  }
  document.write(`Winner is: ${roundWinner}`);
}
determineWinner();
document.write('<br/><br/>');

//8.
document.write('8. ');
document.write('<br/>');
const determineHammerStrikeCount = () => {
  let nailLength = 85;
  let hitcount = 0;

  while (nailLength > 0) {
    const smallHit = rand(5, 20);
    nailLength -= smallHit
    hitcount++;
  }
  document.write(`Small strikes hitcount: ${hitcount}`);
  document.write('<br/>');

  // second variation
  let nailLength2 = 85;
  let hitcount2 = 0;
  let totalMisses = 0;

  while (nailLength2 >= 0) {
    const bigHit = rand(5, 20);
    const missed = rand(0, 1);

    if (!missed) {
      nailLength2 -= bigHit;
    } else {
      totalMisses++;
    }
    hitcount2++;
  }
  document.write(`Large strikes hitcount: ${hitcount}, missed: ${totalMisses} times`);
}
determineHammerStrikeCount();
document.write('<br/><br/>');

//9.
document.write('9. ');
document.write('<br/>');
const generatePrimeNumbers = () => {
  const numberList = [];

  while (numberList.length !== 50) {
    const generatedNumber = rand(0, 200);

    if (!numberList.includes(generatedNumber)) {
      numberList.push(generatedNumber);
    }
  }
  const numberListString = numberList.join(' ');
  document.write(`Numbers ${numberListString}<br/><br/>`);


  //primeList
  const primeList = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    //primecheck
    if (number !== 1 && number === 2) {
      primeList.push(number);
    } else {
      for (let ii = 2; ii <= number; ii++) {
        if (ii === number) {
          primeList.push(number);
        }
        if (number % ii === 0) {
          break;
        }
      }
    }
  }
  primeList.sort((a, b) => a - b);
  const primeListString = primeList.join(' ');
  document.write(`Primes ${primeListString}<br/>`);
}
generatePrimeNumbers();
document.write('<br/>');

//10.
document.write(`10. <br/> Generate clock`);
const generateClock = () => {
  const clockContainer = document.getElementsByTagName('body')[0];
  const clock = document.createElement('span');
  clockContainer.append(clock);

  let randomTime = rand(300, 900);

  let timer = () => {
    randomTime--;
    const seconds = randomTime % 60;
    const minutes = (randomTime - seconds) / 60 % 60;
    const hours = (randomTime - minutes * 60 - seconds) / 3600;
    clock.innerHTML = `
      ${hours < 10 ? '0' + hours : hours}:
      ${minutes < 10 ? '0' + minutes : minutes}:
      ${seconds < 10 ? '0' + seconds : seconds}
    `;

    if (randomTime >= 0) {
      setTimeout(timer, 1000);
    } else {
      clearTimeout(timer);
    }
  }
  timer();
}
generateClock();

document.write('<br/><br/><a href="/tasks/3Ciklai.pdf">Užduotis</a>');


