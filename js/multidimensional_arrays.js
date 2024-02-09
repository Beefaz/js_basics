// global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
document.write('<h4>8. Multidimensional arrays</h4><br/>');
document.write('<br/><br/>');


console.log('1. ');
const generate2dArray = () => {
  const firstLevelArray = [];
  for (let i = 0; i < 10; i++) {
    firstLevelArray[i] = [];
    for (let ii = 0; ii < 5; ii++) {
      firstLevelArray[i][ii] = rand(5, 25);
    }
  }
  return [...firstLevelArray];
}
console.log(generate2dArray());
console.log('---------------------');


console.log('2a. ');
const countValuesAbove10 = (arrayWithChildArrays) => {
  let count = 0;

  for (let i = 0; i < arrayWithChildArrays.length; i++) {
    for (let ii = 0; ii < arrayWithChildArrays[i].length; ii++) {
      if (arrayWithChildArrays[i][ii] > 10) count++;
    }
  }
  return count;
}
console.log(countValuesAbove10(generate2dArray()));
console.log('---------------------');


console.log('2b. ');
const getHighestValue = (arrayWithChildArrays) => {
  let max = 0;

  for (let i = 0; i < arrayWithChildArrays.length; i++) {
    for (let ii = 0; ii < arrayWithChildArrays[i].length; ii++) {
      if (arrayWithChildArrays[i][ii] > max) max = arrayWithChildArrays[i][ii];
    }
  }
  return max;
}
console.log(getHighestValue(generate2dArray()));
console.log('---------------------');

console.log('2c. ');
const countEqualIndexes = (arrayWithChildArrays) => {
  console.log(arrayWithChildArrays);

  let equalIndexSums = [];
  equalIndexSums.length = arrayWithChildArrays[0].length;
  equalIndexSums.fill(0);

  for (let i = 0; i < arrayWithChildArrays.length; i++) {
    for (let ii = 0; ii < arrayWithChildArrays[i].length; ii++) {
      equalIndexSums[ii] += arrayWithChildArrays[i][ii];
    }
  }
  return equalIndexSums;
}
console.log(countEqualIndexes(generate2dArray()));
console.log('---------------------');


console.log('2d. ');
const extendSecondLevels = (arrayWithChildArrays) => {
  for (let i = 0; i < arrayWithChildArrays.length; i++) {
    arrayWithChildArrays[i] = [...arrayWithChildArrays[i], rand(5, 25), rand(5, 25)];
  }
  return arrayWithChildArrays;
}
console.log(extendSecondLevels(generate2dArray()));
console.log('---------------------');

console.log('2e. ');
const sumChildValues = (arrayWithChildArrays) => {
  let equalIndexSums = [];
  equalIndexSums.length = arrayWithChildArrays[0].length;

  for (let i = 0; i < arrayWithChildArrays.length; i++) {
    equalIndexSums[i] = 0;
    for (let ii = 0; ii < arrayWithChildArrays[i].length; ii++) {
      equalIndexSums[i] += arrayWithChildArrays[i][ii];
    }
  }
  return equalIndexSums;
}
console.log(sumChildValues(generate2dArray()));
console.log('---------------------');


console.log('3. ');
const generate2dLetterArray = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const firstLevelArray = [];

  for (let i = 0; i < 10; i++) {
    firstLevelArray[i] = [];
    const childLength = rand(2, 20);

    for (let ii = 0; ii < childLength; ii++) {
      firstLevelArray[i][ii] = letters[rand(0, letters.length - 1)];
    }
    firstLevelArray[i].sort();
  }
  return [...firstLevelArray];
}
console.log(generate2dLetterArray());
console.log('---------------------');


console.log('4. ');
const sort2ndDimension = (arrayWithChildArrays, letter = 'K') => {
  const sortedArray = [...arrayWithChildArrays];
  sortedArray.sort((a, b) => (a.length - b.length)).sort((a, b) => (a.includes(letter) ? -1 : 1) - (b.includes(letter) ? -1 : 1));
  return sortedArray;
}
console.log(sort2ndDimension(generate2dLetterArray(), 'K'));
console.log('---------------------');


console.log('5. ');
const generate2dArrayX = () => {
  const firstLevelArray = [];
  for (let i = 0; i < 10; i++) {
    const randomLength = rand(0, 5);

    if (randomLength === 0) {
      firstLevelArray[i] = rand(0, 10);
    } else {
      const randomLength = rand(0, 10);
      firstLevelArray[i] = [];

      for (let ii = 0; ii < randomLength; ii++) {
        firstLevelArray[i][ii] = rand(0, 10);
      }
    }
  }
  return [...firstLevelArray];
}

console.log(generate2dArrayX());
console.log('---------------------');

console.log('6. ');
const calculateSumsOfTask5 = (arrayToCalc) => {
  return arrayToCalc.flat(2).reduce((sum, val) => sum + val, 0);
}
console.log(calculateSumsOfTask5(generate2dArrayX()));

const sortArrayOfTask5 = (arrayToSort) => {
  return arrayToSort.sort((a, b) => {
    if (Array.isArray(a) && Array.isArray(b)){
      return a.reduce((sum, val) => sum + val, 0) - b.reduce((sum, val) => sum + val, 0);
    }
    if (Array.isArray(a)) {
      return 1;
    }
    if (Array.isArray(b)) {
      return -1;
    }
    return a-b;
  })
}
console.log(sortArrayOfTask5(generate2dArrayX()));
console.log('---------------------');

console.log('7. attitional task, decode');
const stringToDecode = '115!109!101!105!115!105!118!32!111!105!108!97!103!116!105!97!118!97!115!32!115!117!97!382!97!114!71!';
const decode = (str) => {
  const numbers = str.split(/!/g).reverse();
  return String.fromCharCode(...numbers);
}
console.log(decode(stringToDecode));
console.log('---------------------');


document.write('<a href="../tasks/7.Multidimensional_arrays.pdf">Užduotis</a></br></br>');
