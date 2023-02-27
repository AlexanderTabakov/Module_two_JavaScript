"use strict";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const weekendDayIndex = [0, 6];
const currentDayIndex = new Date().getDay();

function printDay(day, index) {
    const classes = `text ${currentDayIndex === index ? 'italic' : ''} ${weekendDayIndex.includes(index) ? 'bold' : ''}`
    document.writeln(`<div class='${classes}'> ${day} </div>`)
}

days.forEach(printDay);




const nums = ['295996', '334', '773', '54534', '334342', '777', '333'];

function checkFirstNumber(number) {
    const [firstNumber] = number;
    return firstNumber === '3' || firstNumber === '7';

}

nums
    .filter(checkFirstNumber)
    .forEach((num=>console.log(num)))

// console.log(nums.filter(checkFirstNumber))



// nums.filter(checkFirstNumber).forEach(console.log)





