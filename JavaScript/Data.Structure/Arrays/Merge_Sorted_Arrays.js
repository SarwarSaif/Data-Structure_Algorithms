

const arrValidate = (arr) => {
    // If undefined or string 
    if (!arr || typeof(arr) === 'string') {
        return 0
    }
    return 1;
}

const mergeSortedArrays = (sortedArray1, sortedArray2) => {
    // Check Input
    if (sortedArray1 === 0) {
        return sortedArray2;
    }if (sortedArray2 === 0) {
        return sortedArray1;
    }
    if (!arrValidate(sortedArray1) && !arrValidate(sortedArray2)) {
        return "Not good!!!";
    }

    mergedArray = [];
    totSize = sortedArray1.length + sortedArray2.length;
    console.log(totSize)
    arr1_index = 0;
    arr2_index = 0;
    sortedArray1[sortedArray1.length] = 999999999;
    sortedArray2[sortedArray2.length] = 999999999;
    
    for (let i = 0; i < totSize; i++) {
        if (sortedArray1[arr1_index] < sortedArray2[arr2_index]) {
            mergedArray[i] = sortedArray1[arr1_index];
            arr1_index ++;
        }
        else if(sortedArray1[arr1_index] > sortedArray2[arr2_index]) {
            mergedArray[i] = sortedArray2[arr2_index];
            arr2_index++;
        }
    }
    
    console.log(mergedArray);


}



const mergeSortedArrays2 = (sortedArray1, sortedArray2) => {
    // Check Input
    if (sortedArray1 === 0) {
        return sortedArray2;
    }if (sortedArray2 === 0) {
        return sortedArray1;
    }
    if (!arrValidate(sortedArray1) && !arrValidate(sortedArray2)) {
        return "Not good!!!";
    }

    const mergedArray = [];
    let arr1Item = sortedArray1[0];
    let arr2Item = sortedArray2[0];

    totSize = sortedArray1.length + sortedArray2.length -2;
    arr_Index = 0;
    arr1_index = 0;
    arr2_index = 0;
    for (let i = 0; i < totSize; i++) {    
        if (arr1Item < arr2Item) {
            mergedArray [arr_Index++] = arr1Item
            if (arr1_index == sortedArray1.length) {
                arr1Item = 9999999999;
            }
            else {
                arr1Item= sortedArray1[++arr1_index];
            }
        }
        else {
            mergedArray [arr_Index++] = arr2Item;
            if (arr2_index == sortedArray2.length) {
                arr2Item = 9999999999;
            }
            else {
                arr2Item= sortedArray2[++arr2_index];
            } 
        }
        
    }
    
    console.log(mergedArray);


}


const mergeSortedArraysWhile = (sortedArray1, sortedArray2) => {
    // Check Input
    if (sortedArray1 === 0) {
        return sortedArray2;
    }if (sortedArray2 === 0) {
        return sortedArray1;
    }
    if (!arrValidate(sortedArray1) && !arrValidate(sortedArray2)) {
        return "Not good!!!";
    }

    const mergedArray = [];
    let arr1Item = sortedArray1[0];
    let arr2Item = sortedArray2[0];

    totSize = sortedArray1.length + sortedArray2.length -2;
    arr_Index = 0;
    arr1_index = 0;
    arr2_index = 0;
    
    while (arr1Item || arr2Item) {    
        if (arr1Item < arr2Item || !arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item= sortedArray1[++arr1_index];
            console.log(arr1Item)
        }
        else {
            mergedArray.push(arr2Item);
            arr2Item= sortedArray2[++arr2_index];
        }
        
    }
    
    console.log(mergedArray);


}



sortedArray1 = [21, 42, 53, 104]
sortedArray2= [34, 76, 98, 100]

console.log(mergeSortedArrays(sortedArray1, sortedArray2));

console.log(mergeSortedArrays2(sortedArray1, sortedArray2));

//console.log(mergeSortedArraysWhile(sortedArray1, sortedArray2));




