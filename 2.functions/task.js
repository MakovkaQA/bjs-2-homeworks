function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  min = Math.min(...arr);
  max = Math.max(...arr);  
  let sum = 0;
  if ([...arr].length != 0) {
    sum = [...arr].reduce(function(a, b) {
      return a + b;
    });
  }
  const avg = +(sum / [...arr].length).toFixed(2);  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if ([...arr].length != 0) {
    sum = [...arr].reduce(function(a, b) {
      return a + b;
    });
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  if([...arr].length != 0) {
    return max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let array = [...arr];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      sumEvenElement += array[i];
    } else {
      sumOddElement += array[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let array = [...arr];
  if(array.length === 0) {
    return 0;
  } else {
    for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
        sumEvenElement += array[i];
        countEvenElement++;
      };
    };
  };
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  } 
  return maxWorkerResult;   
}

