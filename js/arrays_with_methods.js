// global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h4>7. Masyvai su metodais</h4><br/>');
// ------------TASKS------------------ (   no reduce yet... :/ )
// 1.

document.write('1. ');
const getDefaultArray = () => {
  const defaultArray = [];
  defaultArray.length = 30;
  return [...defaultArray].map(() => rand(5, 25));
}
document.write(`${getDefaultArray()}`);
document.write('<br/><br/>');

// 2a.
document.write('2.a ');
const countValuesOver10 = () => getDefaultArray().filter((number) => number > 10);
document.write(`${countValuesOver10()}`);
document.write('<br/><br/>');

// 2b.
document.write('2.b ');
const writeHighestNumAndIndexes = () => {
  let numbers = getDefaultArray();

  let highestNumber = 0;

  numbers.forEach((number, i) => numbers[i] > highestNumber ? highestNumber = numbers[i] : undefined);

  const indexes = [...numbers].reduce((indexes, value, index) => value === highestNumber ? indexes + ` ${index}` : indexes, '');

  document.write(`Number: ${highestNumber}, indexes: ${indexes}`);
}
writeHighestNumAndIndexes();
document.write('<br/><br/>');

// 2c.
document.write('2.c ');
const getSumOfOddIndexes = () => getDefaultArray().reduce((sum, number, index) => index % 2 === 0 ? sum + number : sum, 0);
document.write(`Sum: ${getSumOfOddIndexes()}`);
document.write('<br/><br/>');

// 2d.
document.write('2.d ');
const getArrayWithIndexSubstracted = () => getDefaultArray().map((number, index) => number - index);
document.write(`${getArrayWithIndexSubstracted()}`);
document.write('<br/><br/>');

// 2e.
document.write('2.e ');
const addTenRandomIntegersToArray = () => {
  const newArray = getDefaultArray();
  newArray.length = 40;
  newArray.fill(null);
  return newArray.map((value) => value === null ? rand(2, 25) : value)
}
document.write(`${addTenRandomIntegersToArray()}`);
document.write('<br/><br/>');

// 2f.
document.write('2.f ');
const generateTwoArraysByIndex = () => {

  const evenIndexArray = [];
  const oddIndexArray = [];
  getDefaultArray().forEach((value, index) => {
    return index % 2 === 0 ? evenIndexArray.push(value) : oddIndexArray.push(value);
  })
  document.write(`Even index ${evenIndexArray}`);
  document.write('<br/>');
  document.write(`Odd index ${oddIndexArray}`);
}
generateTwoArraysByIndex();
document.write('<br/><br/>');

// 2g.
document.write('2.g ');
const nullifyLowValues = () => getDefaultArray().map((number, index) => number > 15 && index % 2 === 0 ? 0 : number);
document.write(`Array with nullified values: ${nullifyLowValues()}`);
document.write('<br/><br/>');

// 2h.
document.write('2.h ');
const getFirstIndex = () => getDefaultArray().findIndex((val) => val > 10);
document.write(`Index of first value above 10: ${getFirstIndex()}`);
document.write('<br/><br/>');

// 2i.
document.write('2.i ');
const removeOddIndexes = () => getDefaultArray().reduce((acc, number, index) => index % 2 !== 0 ? [...acc, number] : acc, []);
document.write(`Remaining array w/o odd indexes: ${removeOddIndexes()}`);
document.write('<br/><br/>');


// 3.
document.write('3. ');
// already good approach? unknown loop size;
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
const generateNonDublicatingNumbers = () => [...array1].reduce((acc, number) => !array2.includes(number) ? [...acc, number] : acc, []);

document.write(`Non dublicating numbers: ${generateNonDublicatingNumbers()}`);
document.write('<br/><br/>');

// 5.
document.write('5. ');
const generateDublicatingNumbers = () => [...array1].reduce((acc, number) => array2.includes(number) ? [...acc, number] : acc, []);
document.write(`Dublicating numbers: ${generateDublicatingNumbers()}`);
document.write('<br/><br/>');


// 6.
document.write('6. ');
const generateTenIncrementingNumbers = () => {
  const tenNumbers = [rand(5, 25), rand(5, 25)];
  tenNumbers.length = 10;
  return tenNumbers.fill(null, 2).reduce((acc, number, index) => number === null ? [...acc, acc[index - 2] + acc[index - 1]] : [...acc, number], []);
}
document.write(`Numbers with sum of previous two: ${generateTenIncrementingNumbers()}`);
document.write('<br/><br/>');

// 7.
document.write('7. ');
const generateRandomLetters = () => {
  const randomLetters = [];
  randomLetters.length = 200;
  randomLetters.fill(null);

  return [...randomLetters].map(() => {
      const random = rand(0, 3);
      if (random === 0) return 'A';
      if (random === 1) return 'B';
      if (random === 2) return 'C';
      if (random === 3) return 'D';
    }
  );
}
const generateLetterCountsString = (randomLetterArray = []) => {
  const uniqueValues = randomLetterArray.reduce((acc, val) => !acc.includes(val) ? [...acc, val] : acc, []);
  uniqueValues.sort();

  let finalString = '';
  for (const uniqueValue of uniqueValues) {
    const count = randomLetterArray.filter((val) => val === uniqueValue).length;
    finalString = finalString + `Letter ${uniqueValue} count: ${count}; `
  }
  return finalString;
}

document.write(generateLetterCountsString(generateRandomLetters()));
document.write('<br/><br/>');

// 8.
document.write('8. ');
const sortLetters = (letterArray) => [...letterArray].sort();

document.write(`SortedLetters: ${sortLetters(generateRandomLetters())}`);
document.write('<br/><br/>');

// 9.
document.write('9. ');
const generateNinthTask = () => {
  const randomLetters1 = generateRandomLetters();
  const randomLetters2 = generateRandomLetters();
  const randomLetters3 = generateRandomLetters();
  const mergedArray = [...randomLetters1].map((letter, i) => `${letter}${randomLetters2[i]}${randomLetters3[i]}`);

  const uniqueValues = [...mergedArray].reduce((acc, val) => !acc.includes(val) ? [...acc, val] : acc, []);

  document.write(`Unique values: ${uniqueValues}`);
  document.write('<br/>');
  document.write(`Count: ${uniqueValues.length}`);
  document.write('<br/><br/>');

  const nonRepeatingSymbolValues = [...mergedArray].reduce((acc, val) => !(val[0] === val[1] && val[1] === val[2]) ? [...acc, val] : acc, []);

  document.write(`Non repeating symbol values: ${nonRepeatingSymbolValues}`);
  document.write('<br/>');
  document.write(`Count: ${nonRepeatingSymbolValues.length}`);
}
generateNinthTask();
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

const highestNumber = randomNumbersWithUniqueVals.splice(randomNumbers.length - 1, randomNumbers.length);

let array11 = [];
let array22 = [];
let array11sum = 0;
let array22sum = 0;

randomNumbersWithUniqueVals.forEach((number, index) => index % 2 === 0 ? array11.push(number) : array22.push(number));

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

for (const value of randomNumbersWithUniqueVals) {
  if ((array22sum - 30) > array11sum) {
    array22.push(array11.shift());
    array11.push(array22.shift());
    calculateSums();
  }
}

const sortedArray1 = [...array11].sort((a, b) => a - b);
const sortedArray2 = [...array22].sort((a, b) => b - a);

document.write(`NewArray: ${[...sortedArray1, highestNumber, ...sortedArray2]}`);
document.write('<br/><br/>');

document.write('<br/><br/><a href="/tasks/5Masyvai.pdf">Užduotis</a>');
