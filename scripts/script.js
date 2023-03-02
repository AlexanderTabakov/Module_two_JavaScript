"use strict";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const validateAnswer = (answer) => {
    if (answer === '') alert('Нужно ввести хоть что-то');
    else if (isNaN(answer)) alert('Введите число!');
    else return true;
}


const start = () => {
    const MIN_VALUE = 1;
    const MAX_VALUE = 10;

    const ATTEMPTS_COUNT = 5;

    let attemptsLeft = ATTEMPTS_COUNT;

    const searchNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);

    const loop = () => {
        if (attemptsLeft === 0) {
            const runAgain = confirm('У вас закончились попытки, хотите сыграть еще?');

            if (runAgain) start();
            else alert('GAME OVER');

            return;
        }

        const userAnswer = prompt(`Угадай число от ${MIN_VALUE} до ${MAX_VALUE} за ${attemptsLeft} попыток`);

        if (userAnswer === null) {
            alert('GAME OVER');
            return;
        }

        if (validateAnswer(userAnswer)) {
            const answer = Number.parseInt(userAnswer);
            if (answer > searchNumber) {
                attemptsLeft--;
                alert(`Загаднное число меньше, осталось ${attemptsLeft} попыток`);
                loop();
            } else if (answer < searchNumber) {
                attemptsLeft--;
                alert(`Загаднное число больше, осталось ${attemptsLeft} попыток`);
                loop();
            } else if (answer === searchNumber) {
                const runAgain = confirm(`Вы угадали за ${ATTEMPTS_COUNT - attemptsLeft + 1} попыток, хотите сыграть еще?`);
                if (runAgain) start();
                else alert('GAME OVER')
            }
        } else loop();

    }

    loop();
}
