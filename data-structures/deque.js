class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  push(value) {
    const element = new Node(value);
    if (this.size === 0) {
      this.front = element;
      this.rear = element;
    } else {
      this.rear.next = element;
      element.prev = this.rear;
      this.rear = element;
    }
    this.size++;
  }

  pop() {
    if (this.size !== 0) {
      this.rear = this.rear.prev;
      if(this.rear){
        this.rear.next = null;
      }
      this.size--;
    }
  }

  enque(value) {
    const element = new Node(value);
    if (this.size === 0) {
      this.front = element;
      this.rear = element;
    } else {
      element.next = this.front;
      this.front.prev = element;
      this.front = element;
    }
    this.size++;
  }

  deque() {
    if (this.size !== 0) {
      this.front = this.front.next;
      if(this.front){
        this.front.prev = null;
      }
      this.size--;
    }
  }

  getFront() {
    return this.front ? this.front.value:null;
  }

  getRear() {
    return this.rear ? this.rear.value:null;
  }

  getSize() {
    return this.size;
  }

  print() {
    const output=[];
    for (let curr = this.front; curr != null; curr = curr.next) {
      output.push(curr.value);
    }
    console.log(output);
  }
}

module.exports = Deque;
