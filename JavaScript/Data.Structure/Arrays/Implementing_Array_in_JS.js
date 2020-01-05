class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get = index => {
    return this.data[index];
  };

  push = value => {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  };

  pop = () => {
    const deletedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  };

  shiftItemsLeft = index => {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  };

  deleteItem = index => {
    this.shiftItemsLeft(index);
    this.pop();
  };

  shiftItemsRight = index => {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.length++;
  };

  insertItem = (index, value) => {
    this.shiftItemsRight(index);
    this.data[index] = value;
  };
}

const newArray = new MyArray();

newArray.push("Hello"); // O(1)
newArray.push("hi"); // O(1)
newArray.push("why"); // O(1)
newArray.pop(); // O(1)
console.log(newArray);

newArray.push("who"); // O(1)
newArray.push("what"); // O(1)
newArray.push("how"); // O(1)
console.log(newArray);
newArray.deleteItem(2); // O(n)
console.log(newArray);

newArray.insertItem(2, "Yes in"); // O(n)
console.log(newArray);
