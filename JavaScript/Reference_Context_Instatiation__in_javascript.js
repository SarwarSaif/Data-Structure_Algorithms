// *******************
// Reference type   **
// Context vs Scope **
// Instantiation    **
// *******************

// What is reference type? 
console.log([] === []); // false
console.log([1] === [1]); // false

// Objects are **Reference type** in JavaScript 
// and not created by  
// the programming languages like the **Premetive type** such as 
// number, null, undefined, boolean, string

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10};

console.log(object1 === object2); // true
console.log(object1 === object3); // false

object1.value = 15;
console.log(object1.value); // 15
console.log(object2.value); // 15

// What is context type?
// Context vs Scope
// Scopes are defined using curly braces. eg..
function init() {
    let a = 4; // a is only known to this scope 
}
init();
// console.log(a); // a is not defined
// Context is used by this
// "this" refers to which object is we are inside now 
const object4 = {
    insideThisObject: function (){
        console.log(this); // { insideThisObject: [Function: insideThisObject] }
    }
}

object4.insideThisObject(); 


// *******************
// ** Instantiation **
// *******************
class Player { 
    constructor (name, type) {
        this.name = name;
        this.type = type;
    }
    introduce = () => {
        console.log(`Hi I'm ${this.name}, I'm a ${this.type}.`);
    }
}

class Wizard extends Player {
    constructor(name, element) {
        super(name, "Wizard"); // The first and most important thing is 
        // To call the super function as this class is inhereting Player class
        this.element = element;
    }

    play = () => { 
        console.log(`I play with ${this.element}.`);
    }
}


var wizard1 = new Wizard("Sarwar", "Fire"); 
wizard1.introduce(); // Hi I'm Sarwar, I'm a Wizard. 
wizard1.play(); // I play with Fire.

var wizard2 = new Wizard('Saif', "Water");
wizard2.introduce(); // Hi I'm Saif, I'm a Wizard. 
wizard2.play(); // I play with Water.

// ********** All this codes follow ** ES6 ** Syntax






















