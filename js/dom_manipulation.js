//fonts
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500');
document.head.appendChild(link);

//main opbject
const info = {
  image: "nuotrauka.svg",
  name: "Saitama",
  age: 25,
  weight: 70,
  height: 175,
  skills: "Immeasurable Physical Prowess, Supernatural Reflexes and Senses, Invulnerability, Indomitable Will, Enhanced Fighting Skill"
}


//global createElFn
let createEl = (tag) => document.createElement(tag);

//body
const bodyElement = document.body
const bodyStyle = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  color: 'rgba(255,255,255, 1)',
  fontWeight: '300',
  letterSpacing: '1px',
}
Object.assign(bodyElement.style, bodyStyle);

//main
const mainStyle = {
  height: '100%',
  width: '100%',
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const main = createEl('main');
Object.assign(main.style, mainStyle);
bodyElement.append(main);

//card
const card = createEl('div');
const cardStyle = {
  width: '475px',
  height: '300px',
  borderRadius: '15px',
  background: 'black',
  boxShadow: 'black 0px 10px 35px',
  display: 'flex',
  fontFamily: 'Roboto, Sans Serif'
}
Object.assign(card.style, cardStyle);
main.append(card);


//card-left
const cardLeftSide = createEl('div');
cardLeftSideStyle = {
  display: 'flex',
  flexDirection: 'column',
}
Object.assign(cardLeftSide.style, cardLeftSideStyle);


//card-left-img
const svgStyle = {
  width: '100%',
  height: '100%',
  padding: '60px 0',
  objectFit: 'cover',
}

const getImageElement = async () => {
  const response = await fetch(`/assets/images/svg/${info.image}`);
  cardLeftSide.innerHTML = await response.text();
  const svg = cardLeftSide.children[0];
  Object.assign(svg.style, svgStyle);
}
getImageElement();

//card-right
const cardRightSideStyle = {
  padding: '30px 40px 30px 0',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
};

const cardRightSide = createEl('div');
Object.assign(cardRightSide.style, cardRightSideStyle);
card.append(cardLeftSide, cardRightSide);

const purple = {
  color: 'rgba(255, 28, 129, 1)',
  fontWeight: '400',
}

//card-right header
const cardHeader = createEl('div');
const name = createEl('div');
const title = createEl('div');
name.innerText = info.name;
title.innerText = 'Hero';
Object.assign(name.style, {fontSize: '20px'});
Object.assign(title.style, {fontSize: '18px', ...purple});
cardHeader.append(name, title);

//card-right stats
const statsRow = createEl('div');
Object.assign(statsRow.style, {display: 'flex', justifyContent: 'Space-between'});

const stats = Object.entries(info)
  .filter(([key]) => (key === "age" || key === "weight" || key === "height"))
  .map(([key, val]) => {
    const column = createEl('div');
    const text = createEl('div');
    const label = createEl('div');
    Object.assign(text.style, {fontSize: '16px'});
    Object.assign(label.style, {fontSize: '14px', ...purple});

    text.innerText = val;
    label.innerText = key.charAt(0).toUpperCase() + key.slice(1);
    column.append(text, label);
    return column
  });

statsRow.append(...stats);

//card-right text
const textStyle = {
  color: 'rgba(255,255,255, 0.9)',
  fontSize: '14px',
  letterSpacing: '1px',
  wordSpacing: '3px',
}
const text = createEl('div');
Object.assign(text.style, textStyle);
text.innerText = info.skills;

cardRightSide.append(cardHeader, statsRow, text);
