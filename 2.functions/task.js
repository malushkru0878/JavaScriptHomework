// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = - Infinity;
  sum = 0;

  for (let number of arr) {
    if (number < min) {
      min = number
    }
    if (number > max) {
      max = number;
    }
    sum += number;
  }
  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = - Infinity;
  for (let arr of arrOfArr) {
    if (func(arr) > max) {
      max = func(arr)
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  return getArrayParams(arr).max - getArrayParams(arr).min;
}
