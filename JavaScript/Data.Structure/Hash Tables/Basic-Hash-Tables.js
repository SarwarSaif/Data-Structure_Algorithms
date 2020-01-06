let user = {
  age: 24,
  name: "saif",
  magic: true,
  scream: {
    function() {
      console.log("Yeah!");
    }
  }
};

console.log(user.age); // O(1)
user.spell = "fire"; // O(1)
console.log(user); // O(1)
console.log(user.scream); // O(1)

// Object vs Map
// In Object, we can only use **String** as key
// and doesn't maintain Order in terms of storing the data in memory
// But in Map, we can use any types of **Datatype** as key
// and data is stored in Order.
// "Set" is another type of hash table in JS
// which is similar to map but only store the Key.

const a = new Map();

const b = new Set();
