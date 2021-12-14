"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let x;
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    x = -b / (2 * a);
    arr.push(x);
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let S = amount - contribution;

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let n = (date.getFullYear() - year) * 12 + date.getMonth() - month;
  
  let P = (percent / 100) / 12;
  let payment = S * (P + (P / (((1 + P) ** n) - 1)));
  totalAmount = parseFloat((payment * n).toFixed(2));
  
  return totalAmount;
}