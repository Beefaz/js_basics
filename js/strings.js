// global functions
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


document.write('<h4>2. Ifs</h5><br/>');
// ------------TASKS------------------
// 1.
const getShorterString = () => {
  const name = 'Brad';
  const surname = 'Pit';

  if (name.length === surname.length) return 'Vardas ir pavardė - vienodo ilgio.';
  return name.length > surname.length ? surname : name;
}
document.write('1. ' + `${getShorterString()}` + '<br/>');

// 2.
const getUpperAndLowerCased = () => {
  const name = 'George';
  const surname = 'Clooney';

  return name.toUpperCase() + ' ' + surname.toLowerCase(0)
}
document.write('2. ' + getUpperAndLowerCased() + '<br/>');

// 3.
const getFirstLetters = () => {
  const name = 'Tom';
  const surname = 'Cruise';

  return name.charAt(0) + surname.charAt(0)
}
document.write('3. ' + getFirstLetters() + '<br/>');

// 4.
const getLastCharMess = () => {
  const name = 'Tom';
  const surname = 'Cruise';

  return name.slice(-3).toUpperCase() + surname.slice(-3).toUpperCase();
}
document.write('4. ' + getLastCharMess() + '<br/>');

// 5.
const replaceLettersA = () => {
  const sentence = 'An American in Paris';

  return sentence.replaceAll(/[a]+/gi, "*");
}
document.write('5. ' + replaceLettersA() + '<br/>');

// 6.
const countLetters = () => {
  const sentence = 'An American in Paris';

  return sentence.length - sentence.replace(/[a]/gi, "").length;
}
document.write('6. ' + countLetters() + '<br/>');

// 7.
const removeVowels = (sentence) => {
  return sentence.replace(/[aeiou]/gi, "");
}
document.write('7. ' + removeVowels("An American in Paris") + '; ');
document.write(removeVowels("Breakfast at Tiffany's") + '; ');
document.write(removeVowels("2001: A Space Odyssey") + '; ');
document.write(removeVowels("It's a Wonderful Life") + '<br/>');


// 8.
const getEpisodeNumber = () => {
  const episodeName = `Star Wars: Episode ${rand(0, 5)} ${rand(1, 9)} - A New Hope`;
  return episodeName.replace(/\D+/g, "");
}
document.write('8. ' + getEpisodeNumber() + '<br/>');

// 9.
const generateRandomLetters = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const char1 = characters[rand(0, characters.length)];
  const char2 = characters[rand(0, characters.length)];
  const char3 = characters[rand(0, characters.length)];

  return char1 + char2 + char3
}
document.write('9. ' + generateRandomLetters() + '<br/>');


document.write('<a href="../tasks/2Stringai.pdf">Užduotis</a></br></br>');
