'use strict'

alert('Hello. It is time to start guessing.');

let guessOne = prompt('Do you know how to play an instrument?').toLocaleLowerCase();
if(guessOne === 'yes' || guessOne === 'y') {
    alert('That is right. I do!');
    } else if(guessOne === 'no' || guessOne === 'n') {
        alert('Actually, I do.');
    }

    let guessTwo = prompt('Do you play video games?').toLocaleLowerCase();
    if(guessTwo === 'yes' || guessTwo === 'y') {
        alert('That is also right! I play em all day every day.');
    } else if(guessTwo === 'no' || guessTwo === 'n') {
        alert('Wait, you think I dont play? That is not correct.');
    }