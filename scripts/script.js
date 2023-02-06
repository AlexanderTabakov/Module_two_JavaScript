"use strict";

const money = 100000;

const profit = 'Фриланс';

const expenses = 'Коммуналка, Питание, Бензин, Котик, Бары '

const purpose = 1000000;

const period = 3;

console.log(typeof money, typeof profit);

console.log(expenses.length);

console.log(`Период равен ${period}--м месяцем`);

console.log(`Цель заработать ${purpose} рублей`);

const budgetPerDay = money / 30;

console.log(`${ Math.floor(budgetPerDay)}р / в день`);

console.log(expenses.toLowerCase());

console.log(expenses.split(`, `));
