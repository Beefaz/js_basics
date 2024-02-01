//global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
document.write('<h5>4. Loops2</h5><br/>');
document.write('<br/><br/>');
// ------------TASKS------------------
// 1.

document.write('1. Užduotis ' + '<br/><br/>');
const printRange = () => {
  for (let i = 8; i < 31; i++) {
    if (i % 2 !== 0) {
      document.write(i + ' ');
    }
  }
};
printRange();
document.write('<br/><br/>');

// 2.
document.write('2. Užduotis ' + '<br/><br/>');
const printIncrementingModel = () => {
  let start = '';
  for (let i = 1; i <= 10; i++) {
    start = start + ' ' + i;
    document.write(start + '<br/><br/>')
  }
};
printIncrementingModel();


// 3.
document.write('3. Užduotis ' + '<br/><br/>');
const removeRandomString = () => {
  const randomNumber = rand(0, 2);
  let givenString = 'Žalgiris, Anadolu Efes, Barcelona BC';
  let newString = '';
  let wordIndex = 0;

  while (givenString.length > 0) {
    if (givenString.substring(0, 2) !== ', ' && wordIndex !== randomNumber) {
      newString = newString + givenString[0];
    }
    if (givenString.substring(0, 2) === ', ') {
      givenString = givenString.slice(1);
      wordIndex++;
    }
    givenString = givenString.slice(1);
  }
  document.write(newString);
}
removeRandomString();
document.write('<br/><br/>');

// 4.
document.write('4. Užduotis ' + '<br/><br/>');
const checkPrimeNunbers = () => {
  let numberString = '54 77 2 59 17 19 108';
  let primeNumbers = '';
  let stringedNumber = '';

  while (numberString.length > 0) {
    if (numberString[0] !== ' ') {
      stringedNumber = stringedNumber + numberString[0];
    } else {
      const number = parseInt(stringedNumber);
      stringedNumber = '';

      if (number > 1 && number === 2) {
        primeNumbers = primeNumbers + number + ' ';
      } else {
        for (let ii = 2; ii <= number; ii++) {
          if (ii === number) {
            primeNumbers = primeNumbers + number + ' ';
          }
          if (number % ii === 0) {
            break;
          }
        }
      }
    }
    numberString = numberString.slice(1);
  }
  document.write(primeNumbers);
}
checkPrimeNunbers();
document.write('<br/><br/>');

// 5.
document.write('5. Užduotis ' + '<br/><br/>');
const findRiddleAndswer = () => {
  const string = 'gjrgkjxvbsigdvifpjqyzlzxsxzjnvgojlziaofdfnufymsjqsxxyknqcchmpepoljekhydgmfvhwipvopllndyuddcgxnleutsmprxqlcnxxthdhtpnutqocvtuanouumbkmlxexzmc';
  let riddleAnswer = '';

  for (let i = 6; i < string.length; i++) {
    if (i % 7 === 0) {
      riddleAnswer = riddleAnswer + string[i];
    }
  }
  document.write(riddleAnswer);
}
findRiddleAndswer();
document.write('<br/><br/>');

document.write('<a href="../tasks/4Ciklai2.pdf">Užduotis</a></br></br>');
