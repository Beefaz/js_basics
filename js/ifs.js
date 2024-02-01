// global functions

const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


document.write('<h1>1. Math</h1><br/>');
// ------------TASKS------------------
// 1.
const name = 'Justinas';
const surname = 'Geryba';
const birthday = new Date('1986-11-11').getTime();
const today = new Date();
const age = new Date(today - birthday).getFullYear() - 1970;
document.write('1. ' + `Aš esu ${name} ${surname}. Man yra ${age} metai(ų)` + '<br/>');

// 2.
const divide_bigger_random_from_lower_random = () => {
  const random_no1 = rand(0, 4);
  const random_no2 = rand(0, 4);

  if (random_no2 >= random_no1) return random_no1 !== 0 ? Math.round(random_no2 / random_no1 * 100) / 100: 'dalyba iš nulio negalima';

  return random_no2 !== 0 ? Math.round(random_no1 / random_no2 * 100) / 100 : 'dalyba iš nulio negalima';
}
document.write('2. ' + divide_bigger_random_from_lower_random() + '<br/>');

// 3.
const get_middle_number_from_random_set = (num1, num2) => {
  const random_no1 = rand(num1, num2);
  const random_no2 = rand(num1, num2);
  const random_no3 = rand(num1, num2);


  if (random_no3 > random_no2 && random_no3 > random_no1) return random_no2 > random_no1 ? random_no2 : random_no1;
  if (random_no2 > random_no1 && random_no2 > random_no3) return random_no3 > random_no1 ? random_no3 : random_no1;
  if (random_no1 > random_no2 && random_no1 > random_no3) return random_no3 > random_no2 ? random_no3 : random_no2;
  return 'Middle value does not exist';
}
document.write('3. ' + get_middle_number_from_random_set(0, 25) + '<br/>');

// 4.
const count_zeroes_ones_twos = (num1, num2) => {
  const random_no1 = rand(num1, num2);
  const random_no2 = rand(num1, num2);
  const random_no3 = rand(num1, num2);
  const random_no4 = rand(num1, num2);

  let zeroes = 0;
  let ones = 0;
  let twos = 0

  if (random_no1 === 0) {
    zeroes++;
  } else if (random_no1 === 1) {
    ones++;
  } else {
    twos++;
  }

  if (random_no2 === 0) {
    zeroes++;
  } else if (random_no2 === 1) {
    ones++;
  } else {
    twos++;
  }

  if (random_no3 === 0) {
    zeroes++;
  } else if (random_no3 === 1) {
    ones++;
  } else {
    twos++;
  }

  if (random_no4 === 0) {
    zeroes++;
  } else if (random_no4 === 1) {
    ones++;
  } else {
    twos++;
  }

  return `zeroes: ${zeroes}, ones: ${ones}, twos: ${twos}`;
}
document.write('4. ' + count_zeroes_ones_twos(0, 2) + '<br/>');

// 5.
let randomNo = rand(1, 6);
document.write(`<h${randomNo}>5. ${randomNo}</h${randomNo}>`);

// 6.
const getStyledHtmlNumber = (num1, num2) => {
  const random_number = rand(num1, num2);

  if (random_number > 0) return '<span style="color: blue">' + random_number + '</span>';
  if (random_number < 0) return '<span style="color: green">' + random_number + '</span>';
  return '<span style="color: red">' + random_number + '</span>'
}
document.write('<span>6. ' + getStyledHtmlNumber(-10, 10) + ' ' + getStyledHtmlNumber(-10, 10) + ' ' + getStyledHtmlNumber(-10, 10)+ '</span><br/>');

// 7.
const getCandlePrices = (num1, num2) => {
  const random_number = rand(num1, num2);

  if (random_number > 2000) return 'discount - 4%, total:' + (random_number * 0.96).toFixed(2);
  if (random_number > 1000) return 'discount - 3%, total:' + (random_number * 0.97).toFixed(2);
  return 'total:' + random_number;
}
document.write('7. ' + getCandlePrices(5, 3000) + '<br/>');

// 8.
const getAverages = (num1, num2) => {
  const random_no1 = rand(num1, num2);
  const random_no2 = rand(num1, num2);
  const random_no3 = rand(num1, num2);
  const average = ((random_no1 + random_no2 + random_no3) / 3).toFixed(2);

  let second_average;
  let total = 0
  let totalDivider = 0;

  if (random_no1 > 10 && random_no1 < 90) {
    total += random_no1;
    totalDivider++;
  }

  if (random_no2 > 10 && random_no2 < 90) {
    total += random_no2;
    totalDivider++;
  }

  if (random_no3 > 10 && random_no3 < 90) {
    total += random_no3;
    totalDivider++;
  }

  if (totalDivider === 0) {
    second_average = `doesn't exist`;
  } else {
    second_average = Math.round(total / totalDivider * 100) / 100;
  }

  return 'average: ' + average + '; second average: ' + second_average;
}
document.write('8. ' + getAverages(0, 100) + '<br/>');

// 9.
const getTimes = () => {
  const seconds = rand(0, 60);
  const minutes = rand(0, 60);
  const hours = rand(0, 12);

  const currentTime = new Date(0).setHours(hours, minutes, seconds);
  const formattedCurrentTime = new Intl.DateTimeFormat('lt-LT', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(currentTime);

  const addedSeconds = new Date(rand(0, 300) * 1000).getTime();
  const totalTime = new Date(currentTime).getTime() + addedSeconds;
  const formattedTotalTime = new Intl.DateTimeFormat('lt-LT', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(totalTime);

  return 'time: ' + formattedCurrentTime + '; added seconds: ' + addedSeconds / 1000 + '; end time:' + formattedTotalTime;
}
document.write('9. ' + getTimes() + '<br/>');

// 10.
const sortRandomSixNumbers = (num1, num2) => {
  let random_no1 = rand(num1, num2);
  let random_no2 = rand(num1, num2);
  let random_no3 = rand(num1, num2);
  let random_no4 = rand(num1, num2);
  let random_no5 = rand(num1, num2);
  let random_no6 = rand(num1, num2);
  document.write('10. start ' + `${random_no6} ${random_no5} ${random_no4} ${random_no3} ${random_no2} ${random_no1}`, '<br/>');

  //5x
  if (random_no6 < random_no5) {
    const tempValue = random_no6;
    random_no6 = random_no5;
    random_no5 = tempValue;
  }
  if (random_no5 < random_no4) {
    const tempValue = random_no5;
    random_no5 = random_no4;
    random_no4 = tempValue;
  }
  if (random_no4 < random_no3) {
    const tempValue = random_no4;
    random_no4 = random_no3;
    random_no3 = tempValue;
  }
  if (random_no3 < random_no2) {
    const tempValue = random_no3;
    random_no3 = random_no2;
    random_no2 = tempValue;
  }
  if (random_no2 < random_no1) {
    const tempValue = random_no2;
    random_no2 = random_no1;
    random_no1 = tempValue;
  }

  //4x
  if (random_no6 < random_no5) {
    const tempValue = random_no6;
    random_no6 = random_no5;
    random_no5 = tempValue;
  }
  if (random_no5 < random_no4) {
    const tempValue = random_no5;
    random_no5 = random_no4;
    random_no4 = tempValue;
  }
  if (random_no4 < random_no3) {
    const tempValue = random_no4;
    random_no4 = random_no3;
    random_no3 = tempValue;
  }
  if (random_no3 < random_no2) {
    const tempValue = random_no3;
    random_no3 = random_no2;
    random_no2 = tempValue;
  }

  //3x
  if (random_no6 < random_no5) {
    const tempValue = random_no6;
    random_no6 = random_no5;
    random_no5 = tempValue;
  }
  if (random_no5 < random_no4) {
    const tempValue = random_no5;
    random_no5 = random_no4;
    random_no4 = tempValue;
  }
  if (random_no4 < random_no3) {
    const tempValue = random_no4;
    random_no4 = random_no3;
    random_no3 = tempValue;
  }

  //2x
  if (random_no6 < random_no5) {
    const tempValue = random_no6;
    random_no6 = random_no5;
    random_no5 = tempValue;
  }
  if (random_no5 < random_no4) {
    const tempValue = random_no5;
    random_no5 = random_no4;
    random_no4 = tempValue;
  }

  //1x
  if (random_no6 < random_no5 ) {
    const tempValue = random_no6;
    random_no6 = random_no5;
    random_no5 = tempValue;
  }

  return `${random_no6} ${random_no5} ${random_no4} ${random_no3} ${random_no2} ${random_no1}`;
}
document.write('10. end ' + sortRandomSixNumbers(1000, 9999) + '<br/><br/>');

document.write('<a href="../tasks/1VariablesAndIfs.pdf">Užduotis</a></br></br>')
