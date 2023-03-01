"use strict";

// let purpose = Number.parseFloat(prompt('Желаемая сумма Вашего дохода'));
// let salary = Number.parseFloat(prompt('Ваш месячный доход'));
// let extraMoney  = Number.parseFloat(prompt('Укажите ваш дополнительный доход'));
// let expensesList = Number.parseFloat(prompt('Перечислите возможные расходы зарассчитываемый период через запятую'));
// let expences  = Number.parseFloat(prompt('Восколько обойдутся обязательные статьи расходов?'));
//
//
//
// let isDeposit = confirm('Есть ли у вас депозит в банке?');
//
// let profitFromDeposit;
//
// if (isDeposit === true) {
//
//     profitFromDeposit = Number.parseFloat(prompt('Введите мейсячный доход с депозита'));
//
// } else profitFromDeposit = 0;

function print(text) {
    document.write(`<div>${ text }</div>`);
}

const getAccumulatedIncome = (salary, extraMoney, expences, profitFromDeposit) => ( salary + extraMoney + profitFromDeposit) - expences;

const getTargetMonth = (accumulatedIncome, purpose) => Math.ceil(purpose / accumulatedIncome);

const getBudgetPerDay = (AccumulatedIncome) => Math.floor(AccumulatedIncome / 30);

const init = () => {

    let salary = Number.parseFloat(prompt('Ваш месячный доход'));
    print(`Месячный доход ${salary} р`);

    let extraMoney = Number.parseFloat(prompt('Укажите ваш дополнительный доход'));
    print(`Дополнительный доход ${extraMoney} р`);

    let isDeposit = confirm('Есть ли у вас депозит в банке?');
    let profitFromDeposit;
    if (isDeposit) {

      profitFromDeposit = Number.parseFloat(prompt('Введите мейсячный доход с депозита'));
        print(`Доход с депозита ${profitFromDeposit} р`);


    } else profitFromDeposit = 0;


    let expensesList = Number.parseFloat(prompt('Перечислите возможные расходы зарассчитываемый период через запятую'));
    print(`Категории расходов ${expensesList} р`);

    let expences = Number.parseFloat(prompt('Восколько обойдутся обязательные статьи расходов?'));
    print(`Сумма расходов ${expences} р`);

    let purpose = Number.parseFloat(prompt('Желаемая сумма Вашего дохода'));
    print(`Целевая сумма ${purpose} р`);

    const accumulatedIncome = getAccumulatedIncome(salary, extraMoney, expences, profitFromDeposit);

    const targetMonth = getTargetMonth(accumulatedIncome, purpose);
    print(`Нужная сумма будет накоплена через ${targetMonth} месяцев`);


    let budgetPerMonth = Math.floor(accumulatedIncome / 30);
    print(`Бюджет на на месяц ${budgetPerMonth}`);

    // let gainTime = Math.ceil(purpose / budgetPerMonth);

    // alert(`Вы достигнете желаемого дохода через ${gainTime} месяцев`);

    // let budgetPerDay = Math.floor(budgetPerMonth / 30);

    let budgetPerDay = Math.floor(accumulatedIncome / 30);

    if (budgetPerDay >= 6000) {
        print('У вас высокий уровень дохода')
    } else if (budgetPerDay >= 3000 && budgetPerDay < 6000) {
        print('У вас средний уровень дохода')
    } else if (budgetPerDay >= 0 && budgetPerDay < 3000) {
        print('Вы не накопите')
    } else if (budgetPerDay < 0) {
        print('Что-то пошло не так')
    }


}


