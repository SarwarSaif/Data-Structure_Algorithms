//const {performance} = require('perf_hooks');

const nemo = ['nemo'];
const large = new Array(10).fill('nemo');

const findNemo = array => {
  
  //let t0 = performance.now();
  for (let i =0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found!');
      //break;
    }
  }
  //let t1 = performance.now();
  //console.log("Time it needed is "+(t1-t0)+" milliseconds");
}

findNemo(large) // O(n) - Linear Time

const findNemo2 = array => {
  array.forEach (name => {
    if (name === 'nemo'){
      console.log("Found!!");
    }
  })
}

findNemo2(large);

const findNemo3 = array => {
  for (let name of array) {
    if (name === 'nemo') {
      console.log("Found!!!");
    }
  }
}

findNemo3(large)