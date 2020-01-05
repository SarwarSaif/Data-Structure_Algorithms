/*
// There are two types of arrays
// 1. Static - specific size (eg. C++)
// 2. Dynamic - no specific size (eg. JavaScript)


1.	Lookup – O(1)
2.	Push – O(1)
3.	Insert – O(n)
4.	Delete-O(n)
*/

const strings = ["a", "b", "c", "d"];

// 4*4 = 16 bytes of storage

// Lookup
console.log(strings[1]); // O(1)

// Push
strings.push("e"); // O(1)
console.log(strings);

// Pop
strings.pop();
console.log(strings); // O(1)

// Unshift
strings.unshift("z"); // O(n)
console.log(strings);

// Splice // O(n)
strings.splice(2, 0, "alien"); // .splice(start index, no_of_items_to_delete, string)
console.log(strings);
