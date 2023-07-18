"use strict"
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let arr = [];
  if (discriminant < 0)  {
    arr = [];
  }
  else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  } else {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  };
    
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let loanBody = amount - contribution;
  let payment = loanBody * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), countMonths) - 1)));
  
  return +(payment * countMonths).toFixed(2);
}