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
      document.write('</br>');
    }
    document.write('*');
    count--;
  }
}
writeAsterisks();
document.write('</br></br>');


// 2.
document.write('2. ');
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
document.write('</br></br>');

// 3.
document.write('3. ');
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
document.write('</br></br>');

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
document.write('</br></br>');

// 5.
// document.write('5. ');
// const generateCrosshair = () => {
//   let generatedString = '';
//
//   for (let i = 0; i < 100; i++) {
//     if ((i + 9) % 9 === 0 || (i + 11) % 11 === 0) {
//       generatedString = generatedString + `<span style="color:red">*</span>`;
//     } else {
//       generatedString = generatedString + `<span>*</span>`;
//     }
//   }
//
//   document.write(`<div style="
//     display: grid;
//     grid-template-columns: repeat(10, 1ch);
//     grid-template-rows: repeat(10, 1ch);
//     ">${generatedString}</div>`);
// }
// generateCrosshair();
// document.write('</br></br>');


//reworked variant bound to sidelength in * symbols;
// 5.
document.write('5. ');
const generateCrosshair = (sideLength) => {
  let generatedString = '';

  for (let i = 0; i < sideLength * sideLength; i++) {
    if ((i + sideLength - 1) % (sideLength - 1) === 0 || (i + sideLength + 1) % (sideLength + 1) === 0) {
      generatedString = generatedString + `<span style="color:red">*</span>`;
    } else {
      generatedString = generatedString + `<span>*</span>`;
    }
  }

  document.write(`<div style="
    display: grid;
    grid-template-columns: repeat(${sideLength}, 1ch);
    grid-template-rows: repeat(${sideLength}, 1ch);
    ">${generatedString}</div>`);
}
generateCrosshair(25);
document.write('</br></br>');

//6.
document.write('6. ');
document.write('</br>');
const stopCoinFlip = (stringValue) => {
  const breakSequence = stringValue.toUpperCase();
  const coinValues = ["H", "S"];
  const flipResults = [];


  let loop = true;
  while (loop) {
    flipResults.push(coinValues[rand(0,1)]);
    const lastThreeResults = flipResults.slice(-3).reverse().join('');

    if (lastThreeResults.startsWith(breakSequence)) {
      loop = false;
    }
  }
  document.write(flipResults.join(', '));
}
stopCoinFlip('H');
document.write('</br>');
stopCoinFlip('HHH');
document.write('</br>');
stopCoinFlip('SSS');
document.write('</br></br>');


document.write('<a href="../3Ciklai.pdf">Užduotis</a></br></br>');
