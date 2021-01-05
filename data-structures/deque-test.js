const deque = require("./deque.js");

const d = new deque();

d.deque();
d.pop();
console.log(d.isEmpty());
console.log(d.getFront(), d.getRear());

d.push(10);
d.push(20);
d.push(30);
d.enque(40);
d.enque(50);
d.enque(60);

d.print();
console.log(d.isEmpty());
console.log(d.getFront(), d.getRear());

d.pop();
d.deque();
d.print();
console.log(d.getFront(), d.getRear());
