class node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  push(value) {
    const element = new node(value);
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
      this.rear.next = null;
      this.size--;
    }
  }

  enque(value) {
    const element = new node(value);
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
      this.front.prev = null;
      this.size--;
    }
  }

  getFront() {
    return this.front && this.front.value;
  }

  getRear() {
    return this.rear && this.rear.value;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  print() {
    const output = [];
    for (let curr = this.front; curr != null; curr = curr.next) {
      output.push(curr.value);
    }
    console.log(output);
  }
}

module.exports = deque;
