const Deque = require("./deque.js");

const d = new Deque();

d.deque();
d.pop();
console.log(d.getSize());
console.log(d.getFront(), d.getRear());

d.push(10);
d.push(20);
d.push(30);
d.enque(40);
d.enque(50);
d.enque(60);

d.print();
console.log(d.getSize());
console.log(d.getFront(), d.getRear());

d.pop();
d.deque();
d.print();
console.log(d.getFront(), d.getRear());

let student={
    name:"ravi",
    age:25
}

let pair=[1,2]

d.push("peter");
d.enque(true);
d.push(false);
d.enque("john");
d.enque(student);
d.push(pair);

d.print();