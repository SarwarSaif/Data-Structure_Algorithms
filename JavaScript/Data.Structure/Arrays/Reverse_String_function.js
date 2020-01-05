
const strValidate = (str) => {
    // If undefined or string length is 1
    if (!str || str.length < 2 || typeof(str) !== 'string') {
        return 0;
    }
    return 1;
}

const reverse = (str) => {
    // Check input 
    if (!strValidate(str) ) {
        return "Not good!!!";
    }

    reverseStr = "";
    totItems = str.length - 1;

    for(let i = totItems; i > -1; i--) {
        reverseStr += str[i];
    }

    return reverseStr;
}

const reverseUsingArray = (str) => {
    // Check input 
    if (!strValidate(str) ) {
        return "Not good!!!";
    }

    reverseStr = [];
    totItems = str.length - 1;

    for(let i = totItems; i > -1; i--) {
        reverseStr.push(str[i]);
    }

    return reverseStr.join('');
}

// Use built-in Javascript functions to make a more cleaner code
const reverseCleaner = (str) => {
    // Check input 
    if (!strValidate(str) ) {
        return "Not good!!!";
    }
    return str.split('').reverse().join('');
}

// More Upgraded code using ES6
const reverseOneLiner = (str) => str.split('').reverse().join('');

// More Upgraded code using ES6 *Spread Operator*
const reverseOneLinerSpread = (str) => [...str].reverse().join('');


console.log( reverse("Hi I'm Saif") ); // fiaS m'I iH
console.log( reverseUsingArray("Hi I'm Saif") ); // fiaS m'I iH
console.log( reverseCleaner("Hi I'm Saif") ); // fiaS m'I iH
console.log( reverseOneLiner("Hi I'm Saif") ); // fiaS m'I iH
console.log( reverseOneLinerSpread("Hi I'm Saif") ); // fiaS m'I iH