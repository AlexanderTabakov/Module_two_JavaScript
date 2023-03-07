"use strict";

 const salaries = {
     John: 100,
     Ann: 160,
     Pete: 130
 }

 let sum = 0;
 for (const key in salaries) {
     sum += salaries[key]
 }

console.log(sum);

const studentScores = {Коля: '99',Вася: '35',Петя: '70',Таня: '95',Оля: '50',Саша: '20' };

for (const key in studentScores) {
    if (studentScores [key] < 80) delete studentScores[key]
}

console.log(studentScores);


