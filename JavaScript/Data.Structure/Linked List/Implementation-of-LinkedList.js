class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head
    };
    this.head = newNode;
  }
}

const myLinkedList = new MyLinkedList(10);
myLinkedList.append(5);
console.log(myLinkedList);
// Ouput:
// head: { value: 10, next: { value: 5, next: null } },
//   tail: { value: 5, next: null },
//   length: 2

myLinkedList.append(18);
console.log(myLinkedList); // It will show the third nested linked list as an object
// Output:
// head: { value: 10, next: { value: 5, next: [Object] } },
//   tail: { value: 18, next: null },
//   length: 3

myLinkedList.append(28);
console.log(myLinkedList);

myLinkedList.prepend(2);
console.log(myLinkedList);
// Output:
// head: { value: 2, next: { value: 10, next: [Object] } },
//   tail: { value: 28, next: null },
//   length: 4
