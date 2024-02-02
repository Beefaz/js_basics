// global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h4>5. Masyvai</h4><br/>');
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
  if (defaultArray[i] % 2 === 0) {
    sum += defaultArray[i];
  }
}
document.write(`Sum: ${sum}`);
document.write('<br/><br/>');

// 2d.
document.write('2.d ');
const newArray = [];
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
const primeIndexArray = [];
const secondaryIndexArray = [];

for (let i = 0; i < defaultArray.length; i++) {
  if (i % 2 === 0) {
    secondaryIndexArray.push(defaultArray[i]);
  } else {
    primeIndexArray.push(defaultArray[i]);
  }
}
document.write(`Prime index ${primeIndexArray}`);
document.write('<br/>');
document.write(`Secondary index ${secondaryIndexArray}`);
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
document.write('<br/><br/><a href="/tasks/5Masyvai.pdf">Užduotis</a>');


