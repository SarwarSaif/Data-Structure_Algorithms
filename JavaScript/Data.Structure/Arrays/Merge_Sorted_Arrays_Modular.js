const isNull = arr => (arr === 0 ? 1 : 0);

const isNotArrayObject = (arr1, arr2) =>
  (typeof arr1 === "string" && typeof arr2 === "string") ||
  (isNull(arr1) && isNull(arr2))
    ? 1
    : 0;

const mergeSortedArrays = (arr_1, arr_2) => {
  // Check Input
  if (isNotArrayObject(arr_1, arr_2)) return "Not Good";
  else if (isNull(arr_1)) return arr_2;
  else if (isNull(arr_2)) return arr_1;

  const mergedArray = [];
  let arr_1_Item = arr_1[0];
  let arr_2_Item = arr_2[0];
  let arr1_index = 0;
  let arr2_index = 0;

  const pushFromFirstArray = () => {
    if (arr_1_Item < arr_2_Item || !arr_2_Item) {
      mergedArray.push(arr_1_Item);
      arr_1_Item = arr_1[++arr1_index];
    } else pushFromSecondArray();
  };

  const pushFromSecondArray = () => {
    mergedArray.push(arr_2_Item);
    arr_2_Item = arr_2[++arr2_index];
  };

  while (arr_1_Item || arr_2_Item) {
    pushFromFirstArray();
  }

  return mergedArray;
};

function mergeTwo(arr1, arr2) {
  let result = [...arr1, ...arr2];
  console.log(result);
  return result.sort((a, b) => a - b);
}

sortedArray_1 = [67, 98, 102, 455];
sortedArray_2 = [23, 45, 70, 87, 98, 150];

console.log(mergeSortedArrays(sortedArray_1, sortedArray_2));
console.log(mergeTwo(sortedArray_1, sortedArray_2));
