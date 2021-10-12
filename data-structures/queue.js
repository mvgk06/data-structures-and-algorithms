class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enque(value) {
        const element = new Node(value);
        if (this.size === 0) {
            this.front = element;
            this.rear = element;
        } else {
            this.rear.next = element;
            this.rear = element;
        }
        this.size++;
    }
    deque() {
        if (this.size !== 0) {
            this.front = this.front.next;
            this.size--;
        }
    }
    getFront() {
        return this.front ? this.front.value : null;
    }
    getRear() {
        return this.rear ? this.rear.value : null;
    }
    getSize() {
        return this.size;
    }
}

module.exports = Queue;
