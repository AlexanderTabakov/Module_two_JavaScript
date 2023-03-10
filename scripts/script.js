"use strict";

function print(text) {
    document.write(`<div>${ text }</div>`);
}

const getAccumulatedIncome = (salary, extraMoney, expences, profitFromDeposit) => ( salary + extraMoney + profitFromDeposit) - expences;

const getTargetMonth = (accumulatedIncome, purpose) => Math.ceil(purpose / accumulatedIncome);

const getBudgetPerDay = (AccumulatedIncome) => Math.floor(AccumulatedIncome / 30);

const questionLoop = (question, defaultValue) => {
    const answer = Number.parseFloat(prompt(question, defaultValue));

    if (isNaN(answer)) return questionLoop(question, defaultValue);
    return answer;
}


const init = () => {

    let salary = questionLoop('Ваш месячный доход', '100000');
    print(`Месячный доход ${salary} р`);

    let extraMoney = questionLoop('Укажите ваш дополнительный доход', '50000');
    print(`Дополнительный доход ${extraMoney} р`);

    let isDeposit = confirm('Есть ли у вас депозит в банке?');
    let profitFromDeposit;
    if (isDeposit) {

      profitFromDeposit = questionLoop('Введите месячный доход с депозита', '10000');
        print(`Доход с депозита ${profitFromDeposit} р`);


    } else profitFromDeposit = 0;


    let expensesList = prompt('Перечислите возможные расходы зарассчитываемый период через запятую', 'Питание, питие, бензин, котик, ништяки');
    print(`Категории расходов ${expensesList}`);

    let expences = questionLoop('Восколько обойдутся обязательные статьи расходов?', '50000');
    print(`Сумма расходов ${expences} р`);

    let purpose = questionLoop('Желаемая сумма Вашего дохода', '1000000');
    print(`Целевая сумма ${purpose} р`);

    const accumulatedIncome = getAccumulatedIncome(salary, extraMoney, expences, profitFromDeposit);

    const targetMonth = getTargetMonth(accumulatedIncome, purpose);
    print(`Нужная сумма будет накоплена через ${targetMonth} месяцев`);


    let budgetPerMonth = Math.floor(accumulatedIncome / 30);
    print(`Бюджет на на месяц ${budgetPerMonth}`);

    if (targetMonth <=0 ) {
        print('Цель не будет достигнута');
    }
    else print('Цель будет достигнута')

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

const array = ['243242342', '2432342424', '77777777', '343434343', '4444444', '77343434', '4443211'];
array.filter(number => ['2', '4'].includes(number[0])).filter(print)

// Не понял, почему перебор массива конфликует с функцией обрезки текста


const cutText = (text) => {
    if (typeof text === 'string') {
        text = text.trim();
        if (text.length > 30) {
            text = text.slice(30).concat('...');
        }
        return text;

    } else console.log('Это не текст!');

}
 const cuttingResult = cutText('sdasda ad asd ads asd asd asd asd asd asd222 2 ')
console.log(cuttingResult)
