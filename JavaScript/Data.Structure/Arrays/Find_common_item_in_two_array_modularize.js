// Let's create a modularize version

const arrayToMap = arr => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true;
    }
  }
  return map;
};

const isInTheMap = (map, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return true;
    }
  }
  return false;
};

const findCommonItemModularize = (arr1, arr2) => {
  let map = arrayToMap(arr1);
  let isFound = isInTheMap(map, arr2);

  return isFound;
};

array1 = ["a", "b", "c", "x"];
array2 = ["x", "y", "z"];

isFound = findCommonItemModularize(array1, array2);
console.log(isFound);
