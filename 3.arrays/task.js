function compareArrays(arr1, arr2) {
  let result = true;
  if (arr1.length != arr2.length) {
    result = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      result = false;
    }
  }
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item => item % 3 == 0).map(item => item *= 10);
  return resultArr;
}
