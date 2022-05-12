'use strict';
let score = 0;
let userName = prompt('Can you tell me your name?');
alert('Welcome ' + userName + '. I will be asking you questions about myself. Ready?');

// console.log(userName);

let answerOne = prompt('Do I like video games?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are right. I love them.');
  score++;

} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Cannot confirm that. I might love them.');
}

// console.log(answerOne);

let answerTwo = prompt('Do I play video games a lot?').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('You are right. I do.');
  score++;

} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Cannot confirm that.');
}

// console.log(answerTwo);

let answerThree = prompt('Do I want to design video games?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  alert('That actually is not correct.');

} else if (answerThree === 'no' || answerThree === 'n') {
  alert('You are right. I do not want to do that. ');
  score++;
}

// console.log(answerThree);

let answerFour = prompt('Do I like coding so far?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  alert('I do like coding so far. It is pretty cool.');
  score++;

} else if (answerFour === 'no' || answerFour === 'n') {
  alert('Dont be a downer. Of course I like coding.');
}

// console.log(answerFour);

let answerFive = prompt('Do I know how to code?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  alert('You are overestimating my abilities.');

} else if (answerFive === 'no' || answerFive === 'n') {
  alert('That is correct. I have  no idea what I am doing.');
  score++;
}
// console.log(answerFive);

for(let i = 0; i < 5; i++){
  let answerSix = prompt('Guess a number between one and ten. ');

  if(answerSix === '7'){
    alert('Correct');
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-unused-vars
    score++;
    break;
  } if(answerSix < 7){
    alert('Just a bit higher.');

  } if(answerSix > 7){
    alert('Try a little lower.');

  } if(i === 4){
    alert('The answer is : 7');
  }
}

// let i = 0;
// let games = ['PS5', 'Nintendo'];
// let gameTypes = ['PS5', 'xBox', 'Nintendo', 'Rubix Cube'];

// while(i < 6){
//   for(let x = 0; x < gameTypes.length; x++){
//     alert('Choices: '+ gameTypes[x]);
//   }

//   let answerSeven = prompt('What kind of Systems do I have?');
//   i++;

//   if(games.includes(answerSeven)){
//     alert('Correct!');
//     score++;
//     break;

//   } else {
//     alert('Incorrect');
//   }
// }

// alert(`${userName}, your score is: ${score}!`);

// * https://guddbye.github.io/about-me/
// * https://github.com/guddbye/about-me



let gameSystems = ['xBox', 'Nintendo', 'PS5', 'Game Cube'];

for(let i = 0; i < 4; i++) {
  let gameTypes = prompt('Guess what game Systems I have.').toLowerCase();

  for(let j = 0; j < gameSystems.length; j++) {

    if(gameTypes === gameSystems [j]) {
      alert('That is correct. I do have (those) systems.');
      i = 6;
      break;
    }
  }
}

alert(`Here are all possible systems. ${gameSystems}`);
alert(`${userName}, your score is: ${score}!`);
