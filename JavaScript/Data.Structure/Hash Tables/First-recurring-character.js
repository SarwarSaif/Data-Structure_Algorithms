/*
Google Question
Given an array = [ 2, 3, 4, 2, 3, 3, 5, 6]
    It should return 2
Given an array = [ 2, 1, 5, 5, 5, 1, 2]
    It should return 5
Given an array = [ 0, 2, 3, 4, 5]
    It should return undefined
*/

const findFirstRecurringCharacterNaive = array => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  // O(n^2) but has less space complexity
  // This function works for the fist and last
  // input but fails on the second input
};

const findFirstRecurringCharacterList = array => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    console.log(map);
    if (map[array[i]]) {
      return array[i];
    }
    map[array[i]] = true;
  } // O(n) but increased Space Complexity
};

array = [2, 1, 5, 5, 5, 1, 2];
char = findFirstRecurringCharacterNaive(array);
console.log(char);

array = [2, 1, 5, 5, 5, 1, 2];
char = findFirstRecurringCharacterList(array);
console.log(char);
