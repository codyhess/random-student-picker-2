var pickButton;
var header;
var body;
var choice;
var aList;
var titles;

var students = [
  "Kevin",
  "Jonathan",
  "Angel",
  "Eric",
  "Janette",
  "Desmond",
  "Asiya",
  "Monica",
  "Susana",
  "Deborah",
  "Thomas",
  "Julissa",
  "Kyla",
  "John",
  "Shonica",
  "Krystal"
];
var titles = [
  "The Giver",
  "The Destroyer",
  "The Evil One",
  "The DragonSlayer",
  "The Queen Of Dragons",
  "The Silent One",
  "The Shadow",
  "The Knower Of Things",
  "The Drinker Of Wine ",
  "The WebMaster",
  "The Internet Troll",
  "The Hacker Named 4Chan",
  "The Gift Wrapper",
  "The Indecisive",
  "The Jazz Guitarist",
  "The One Who Writes Titles"
];


var colors = [
  'hotpink',
  'orange',
  'fuchsia', 0,
  'lightblue', 0,
  'coral',
  'gold',
  'indianred',
  'palevioletred',
  'cyan',
  'tomato',
  'crimson'
  
];



var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');

  pickButton.addEventListener('click', pickOnClick );
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
    
  }
});



var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice(Math.floor(Math.random() * students.length),1); 
  var title = titles.splice(Math.floor(Math.random() * titles.length), 1);
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      if (rand[0].length % 2 === 0) {
        rand[0] = rand[0] + ' !'
      }
      choice.innerText = rand[0].toUpperCase() + ' ' + title;
    
      // return;
      
    }  
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}


var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
}

