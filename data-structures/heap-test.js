const minHeap = require("./min-heap.js");
const maxHeap = require("./max-heap.js");

const minh = new minHeap();

console.log(minh.getMin());

minh.insert(7);

minh.deleteMin();
console.log(minh.arr.slice(0, minh.size));
console.log(minh.size);

minh.insert(10);
minh.insert(4);
minh.insert(3);
minh.insert(20);
minh.insert(15);

console.log(minh.arr);
console.log(minh.getMin());

minh.deleteMin();
console.log(minh.arr.slice(0, minh.size));
console.log(minh.size);

console.log("-------------------------------");

const maxh = new maxHeap();

console.log(maxh.getMax());

maxh.insert(7);

maxh.deleteMax();
console.log(maxh.arr.slice(0, maxh.size));
console.log(maxh.size);

maxh.insert(10);
maxh.insert(4);
maxh.insert(3);
maxh.insert(20);
maxh.insert(15);

console.log(maxh.arr);
console.log(maxh.getMax());

maxh.deleteMax();
console.log(maxh.arr.slice(0, maxh.size));
console.log(maxh.size);
