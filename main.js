// global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

  if (random_no2 >= random_no1) return random_no1 !== 0 ? random_no2 / random_no1 : 'dalyba iš nulio negalima';

  return random_no2 !== 0 ? random_no1 / random_no2 : 'dalyba iš nulio negalima';
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
document.write('<h3>5. ' + rand(1, 6) + '</h3>' + '<br/>');

// 6.
const getStyledHtmlNumber = (num1, num2) => {
  const random_number = rand(num1, num2);

  if (random_number > 0) return '<span style="color: blue">' + random_number + '</span><br/>';
  if (random_number < 0) return '<span style="color: green">' + random_number + '</span><br/>';
  return '<span style="color: red">' + random_number + '</span>'
}
document.write('<span>6. ' + getStyledHtmlNumber(-10, 10) + '</span><br/>');

// 7.
const getCandlePrices = (num1, num2) => {
  const random_number = rand(num1, num2);

  if (random_number > 2000) return 'discount - 4%, total:' + random_number * 0.96;
  if (random_number > 1000) return 'discount - 3%, total:' + random_number * 0.97;
  return 'total:' + random_number;
}
document.write('7. ' + getCandlePrices(5, 3000) + '<br/>');

const getAverages = (num1, num2) => {
  const random_no1 = rand(num1, num2);
  const random_no2 = rand(num1, num2);
  const random_no3 = rand(num1, num2);
  const average = Math.round((random_no1 + random_no2 + random_no3) / 3);

  let second_average = null;
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
    second_average = Math.round(total / totalDivider);
  }


  return 'average: ' + average + '; second average: ' + second_average;
}
document.write('8. ' + getAverages(0, 100));



