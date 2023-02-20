"use strict";

let purpose = Number.parseFloat(prompt('Желаемая сумма Вашего дохода'));
let salary = Number.parseFloat(prompt('Ваш месячный доход'));
let expensesList = Number.parseFloat(prompt('Перечислите возможные расходы зарассчитываемый период через запятую'));
let expences  = Number.parseFloat(prompt('Восколько обойдутся обязательные статьи расходов?'));


let isDeposit = confirm('Есть ли у вас депозит в банке?');

let profitFromDeposit;

if (isDeposit == true) {

    profitFromDeposit = Number.parseFloat(prompt('Введите мейсячный доход с депозита'));

} else profitFromDeposit = 0;


let budgetPerMonth = Math.floor(salary + profitFromDeposit - expences);
alert(`Ваш месячный доход равен ${budgetPerMonth}`);

let gainTime = Math.ceil(purpose / budgetPerMonth);

alert(`Вы достигнете желаемого дохода через ${gainTime} месяцев`);

let budgetPerDay = Math.floor(budgetPerMonth/30);

if (budgetPerDay >= 6000) {
    alert('У вас высокий уровень дохода')
} else if (budgetPerDay = 6000 && budgetPerDay > 3000 ) {
    alert('У вас средний уровень дохода')
} else if (budgetPerDay < 3000 || budgetPerDay == 0 ) {
    alert('Вы не накопите')
} else if (budgetPerDay < 0) {
    alert('Что-то пошло не так')
}; // не отрабатываает если доход меньше нуля


