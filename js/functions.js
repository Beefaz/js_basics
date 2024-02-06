// global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//---------- TASKS ------------
document.write('<br/><br/>');
document.write('1. ');
const insertIntoHeadingOne = function (text = '') {
  return `<h1>${text}</h1>`;
}
document.write(insertIntoHeadingOne('tekstas'));
document.write('<br/><br/>');


document.write('2. ');
const insertIntoHeading = function (text = '', number = 1) {
  if (typeof text !== "string" || number > 6 || number < 1) return;
  return `<h${number}>${text}</h{number}>`;
}
document.write(insertIntoHeading('tekstas', 3));
document.write('<br/><br/>');


document.write('3. ');
const generateHeadingText = function () {
  const string = btoa(Date.now()).replaceAll(/[^A-Z]/g, ' ');

  for (let i = 0; i < string.length; i++) {
    const nextThreeCharactersAreCapital = string.substring(i, i + 3).match(/[A-Z]{3}/);

    if (nextThreeCharactersAreCapital) {
      document.write(insertIntoHeadingOne(nextThreeCharactersAreCapital));
      i += 2;
    } else if (string[i] !== ' ') {
      document.write(insertIntoHeadingOne(string[i]));
    }
  }
}
generateHeadingText();
document.write('<br/><br/>');


document.write('4. ');
document.write('<br/>');
const countCompositeNumberDividers = function (number) {
  if (number > -2 && number < 2) return 0;
  if (number < 0) number = Math.abs(number);

  let count = 0;
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  return count;
}
document.write(`${countCompositeNumberDividers(6)}`);
document.write('<br/><br/>');


document.write('5. ');
const sortByIntegerDividers = function () {
  const randomNumbers = [];
  while (randomNumbers.length < 100) {
    randomNumbers.push(rand(33, 77));
  }
  return randomNumbers.sort((a, b) => countCompositeNumberDividers(b) - countCompositeNumberDividers(a));
}

document.write(`${sortByIntegerDividers()}`);
document.write('<br/><br/>');

document.write('6. ');
const filterCompositeNumbers = function () {
  const randomNumbers = [];
  while (randomNumbers.length < 100) {
    randomNumbers.push(rand(333, 777));
  }

  const filteredArray = [];
  for (const value of randomNumbers) {
    if (countCompositeNumberDividers(value) > 0) filteredArray.push(value);
  }
  return filteredArray;
}

document.write(`${filterCompositeNumbers()}`);
document.write('<br/><br/>');


document.write('<a href="../tasks/6Funkcijos.pdf">Užduotis</a></br></br>');