// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let maxN = -Infinity;
  let minN = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxN) {
      maxN = arr[i];
    } 
    if (arr[i] < minN) {
      minN = arr[i];
    }
  }

  let diff = Math.abs(maxN - minN);
  return diff;
}