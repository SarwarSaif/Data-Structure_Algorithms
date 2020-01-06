class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  /* 
  _hash function is created to create a pseudo hash address
  to create the hash table using a hash function
  similar to the native hash library funtion does
  */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // Convert the key into hash
    let hashed_address = this._hash(key);
    // Store the data in hased address
    // Check if the address is not already assigned with a value
    if (!this.data[hashed_address]) {
      // If there is no value in the address
      // then create an empty array and push the data
      this.data[hashed_address] = [];
      this.data[hashed_address].push([key, value]);
    } else {
      // If the address already has a value
      // that means we have a hash address consists of
      // same key with different value or a different key with same hash address

      for (let i = 0; i < this.data[hashed_address].length; i++) {
        if (this.data[hashed_address][i][0] !== key)
          // Check if the key is not already existed
          // then push the data
          this.data[hashed_address].push([key, value]);
        else {
          // If key already exists
          // then replace the value with the new value
          this.data[hashed_address][i][1] = value;
        }
      }
    }
  }

  get(key) {
    // Convert the key into hash
    let hashed_address = this._hash(key);
    if (this.data[hashed_address]) {
      // Check if the hash address contains any value
      for (let i = 0; i < this.data[hashed_address].length; i++) {
        // Check the array for matching key
        // and the return the value
        if (this.data[hashed_address][i][0] === key)
          return this.data[hashed_address][i][1];
      }
    }
  }

  _get() {
    return this.data;
  }
}

const hashMe = new HashTable(50);
console.log(hashMe._hash("asd"));
hashMe.set("asd", 10000);
console.log(hashMe.get("asd"));

hashMe.set("asda", 10340);
console.log(hashMe.get("asda"));

hashMe.set("asda", 10345);
console.log(hashMe.get("asda"));

hashMe.set("asd", 10340);
console.log(hashMe.get("asd"));

console.log(hashMe._get());
