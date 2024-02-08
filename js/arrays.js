// global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h4>5. Arrays</h4><br/>');
// ------------TASKS------------------
// 1.
document.write('1. ');
const defaultArray = [];
for (let i = 0; i < 30; i++) {
  defaultArray.push(rand(5, 25));
}
document.write(`${defaultArray}`);
document.write('<br/><br/>');

// 2a.
document.write('2.a ');
let valueOver10 = 0;
for (let i = 0; i < defaultArray.length; i++) {
  if (defaultArray[i] > 10) {
    valueOver10++;
  }
}
document.write(`${valueOver10}`);
document.write('<br/><br/>');

// 2b.
document.write('2.b ');
let numbers = defaultArray.slice(0, defaultArray.length);
let highestNumber = numbers[0];
let indexes = [];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > highestNumber) {
    highestNumber = numbers[i];
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (highestNumber === numbers[i]) {
    indexes.push(i);
  }
}

document.write(`Number: ${highestNumber}, indexes: ${indexes}`);
document.write('<br/><br/>');

// 2c.
document.write('2.c ');
let sum = 0;
for (let i = 0; i < defaultArray.length; i++) {
  if (i % 2 === 0) {
    sum += defaultArray[i];
  }
}
document.write(`Sum: ${sum}`);
document.write('<br/><br/>');

// 2d.
document.write('2.d ');
let newArray = [];
for (let i = 0; i < defaultArray.length; i++) {
  newArray.push(defaultArray[i] - i);
}
document.write(`${newArray}`);
document.write('<br/><br/>');

// 2e.
document.write('2.e ');
const newLongerArray = defaultArray.slice(0, defaultArray.length);
while (newLongerArray.length < 40) {
  newLongerArray.push(rand(5, 25));
}
document.write(`${newLongerArray}`);
document.write('<br/><br/>');

// 2f.
document.write('2.f ');
const evenIndexArray = [];
const oddIndexArray = [];

for (let i = 0; i < defaultArray.length; i++) {
  if (i % 2 === 0) {
    evenIndexArray.push(defaultArray[i]);
  } else {
    oddIndexArray.push(defaultArray[i]);
  }
}
document.write(`Even index ${evenIndexArray}`);
document.write('<br/>');
document.write(`Odd index ${oddIndexArray}`);
document.write('<br/><br/>');

// 2g.
document.write('2.g ');
const arrayWithZeroes = []
for (let i = 0; i < defaultArray.length; i++) {
  if (i % 2 === 0) {
    if (defaultArray[i] > 15) {
      arrayWithZeroes.push(0);
    }
  } else {
    arrayWithZeroes.push(defaultArray[i]);
  }
}
document.write(`Array with nullified values: ${arrayWithZeroes}`);
document.write('<br/><br/>');

// 2h.
document.write('2.h ');
let firstIndex = 0;
for (let i = 0; i < defaultArray.length; i++) {
  if (defaultArray[i] > 10) {
    firstIndex = defaultArray[i];
    break;
  }
}
document.write(`Index of first value above 10: ${firstIndex}`);
document.write('<br/><br/>');

// 2i.
document.write('2.i ');
let removedSecondaryElements = [];
for (let i = 1; i < defaultArray.length; i += 2) {
  removedSecondaryElements.push(defaultArray[i]);
}
document.write(`Remaining array w/o secondary indexes: ${removedSecondaryElements}`);
document.write('<br/><br/>');


// 3.
document.write('3. ');
const array1 = [];
const array2 = [];
while (array1.length < 100 && array2.length < 100) {
  const tempNumber = rand(100, 999);
  const tempNumber2 = rand(100, 999);
  if (!array1.includes(tempNumber) && array1.length < 100) {
    array1.push(tempNumber);
  }
  if (!array2.includes(tempNumber2) && array2.length < 100) {
    array2.push(tempNumber2);
  }
}
document.write('<br/>');
document.write(`Array1: ${array1}`);
document.write('<br/>');
document.write(`Array2: ${array2}`);
document.write('<br/><br/>');

// 4.
document.write('4. ');
const newArrayXX = [];

for (let i = 0; i < array1.length; i++) {
  if (!array2.includes(array1[i])) {
    newArrayXX.push(array1[i]);
  }
}
document.write(`Non dublicating numbers: ${newArrayXX}`);
document.write('<br/><br/>');

// 5.
document.write('5. ');
const newArrayXXX = [];

for (let i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    newArrayXXX.push(array1[i]);
  }
}
document.write(`Dublicating numbers: ${newArrayXXX}`);
document.write('<br/><br/>');


// 6.
document.write('6. ');
const tenNumbers = [rand(5, 25), rand(5, 25)];
for (i = 2; i < 10; i++) {
  tenNumbers[tenNumbers.length] = tenNumbers[i - 2] + tenNumbers[i - 1];
}

document.write(`Numbers with sum of previous two: ${tenNumbers}`);
document.write('<br/><br/>');

// 7.
document.write('7. ');
const randomLetters = [];

for (let i = 0; i < 200; i++) {
  const random = rand(0, 3);
  if (random === 0) randomLetters.push('A');
  if (random === 1) randomLetters.push('B');
  if (random === 2) randomLetters.push('C');
  if (random === 3) randomLetters.push('D');
}


let letterAcount = 0;
let letterBcount = 0;
let letterCcount = 0;
let letterDcount = 0;

for (const letter of randomLetters) {
  if (letter === 'A') letterAcount++;
  if (letter === 'B') letterBcount++;
  if (letter === 'C') letterCcount++;
  if (letter === 'D') letterDcount++;
}
document.write(`Letter A count ${letterAcount}; Letter B count ${letterBcount}; Letter C count ${letterCcount}; Letter D count ${letterDcount}`);
document.write('<br/><br/>');

// 8.
document.write('8. ');
const sortedLetters = randomLetters.slice().sort();

document.write(`SortedLetters: ${sortedLetters}`);
document.write('<br/><br/>');

// 9.
document.write('9. ');
const randomLettersAll = [];
for (let i = 0; i < 600; i++) {
  const random = rand(0, 3);
  if (random === 0) randomLettersAll.push('A');
  if (random === 1) randomLettersAll.push('B');
  if (random === 2) randomLettersAll.push('C');
  if (random === 3) randomLettersAll.push('D');
}

const randomLetters1 = randomLettersAll.splice(0, 200);
const randomLetters2 = randomLettersAll.splice(0, 200);
const randomLetters3 = randomLettersAll.splice(0, 200);
const mergedArray = [];

for (const i in randomLetters1) {
  mergedArray[i] = `${randomLetters1[i]}${randomLetters2[i]}${randomLetters3[i]}`;
}

const uniqueValues = [];
for (const value of mergedArray) {
  if (!uniqueValues.includes(value)) uniqueValues.push(value);
}

document.write(`Unique values: ${uniqueValues}`);
document.write('<br/>');
document.write(`Count: ${uniqueValues.length}`);
document.write('<br/><br/>');

const nonRepeatingSymbolValues = [];
for (const value of mergedArray) {
  if (!(value[0] === value[1] && value[1] === value[2])) nonRepeatingSymbolValues.push(value);
}

document.write(`Non repeating symbol values: ${nonRepeatingSymbolValues}`);
document.write('<br/>');
document.write(`Count: ${nonRepeatingSymbolValues.length}`);
document.write('<br/><br/>');

// 10.
document.write('10. ');
const randomNumbers = [];
const randomNumbersWithUniqueVals = [];
for (let i = 0; i < 101; i++) {
  randomNumbers.push(rand(0, 300));
}

for (let i = 0; i < randomNumbers.length; i++) {
  let checkedNumber = randomNumbers[i];
  const arrayEnd = randomNumbers.slice(i + 1, randomNumbers.length);

  while (arrayEnd.includes(checkedNumber)) {
    checkedNumber = rand(0, 300);
  }
  randomNumbersWithUniqueVals.push(checkedNumber);
}
randomNumbersWithUniqueVals.sort((a, b) => a - b);

const highestNumberXX = randomNumbersWithUniqueVals.slice(randomNumbers.length - 1, randomNumbers.length);
const remainingNumbers = randomNumbersWithUniqueVals.slice(0, randomNumbers.length - 1);

let array11 = [];
let array22 = [];
let array11sum = 0;
let array22sum = 0;

for (let i = 0; i < remainingNumbers.length; i += 2) {
  array11.push(remainingNumbers[i]);
  array22.push(remainingNumbers[i + 1]);
}

const calculateSums = () => {
  array11sum = 0;
  array22sum = 0;
  for (let value of array11) {
    array11sum += value;
  }
  for (let value of array22) {
    array22sum += value;
  }
}
calculateSums();

while ((array22sum - 30) > array11sum) {
  array22.push(array11.shift());
  array11.push(array22.shift());
  calculateSums();
}

const sortedArray1 = [...array11].sort((a, b) => a - b);
const sortedArray2 = [...array22].sort((a, b) => b - a);

document.write(`NewArray: ${[...sortedArray1, highestNumberXX, ...sortedArray2]}`);
document.write('<br/><br/>');

document.write('<br/><br/><a href="/tasks/5Masyvai.pdf">Užduotis</a>');
