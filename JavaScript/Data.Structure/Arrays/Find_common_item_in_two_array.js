const findCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    //  O(n)
    for (let j = 0; j < arr2.length; j++) {
      // O(m)
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}; // O(n*m) - Quadratic time complexity.. Space complexity O(1)

const findCommonItem2 = (arr1, arr2) => {
  // Use hash map
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    // O(n)
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    // O(m)
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
}; // O(n+m) - Quadratic time complexity.. Space complexity O(n)

const findCommonItem3 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
};

array1 = ["a", "b", "c", "x"];
array2 = ["x", "y", "z"];

var isFound = findCommonItem(array1, array2);
console.log(isFound);

isFound = findCommonItem2(array1, array2);
console.log(isFound);

isFound = findCommonItem3(array1, array2);
console.log(isFound);
