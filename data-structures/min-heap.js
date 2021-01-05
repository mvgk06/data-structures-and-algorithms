class minHeap {
  constructor() {
    this.arr = [];
    this.size = 0;
    this.min;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  insert(value) {
    this.arr[this.size] = value;
    this.size++;

    let curr = this.size - 1;

    for (let parent = this.parent(curr); parent >= 0; parent = this.parent(curr)) {
      if (this.arr[curr] < this.arr[parent]) {
        const temp = this.arr[curr];
        this.arr[curr] = this.arr[parent];
        this.arr[parent] = temp;
      }
      curr = this.parent(curr);
    }
  }

  minHeapify(index) {
    let currSmallest = index;
    const left = this.leftChild(currSmallest), right = this.rightChild(currSmallest);

    if (left < this.size && this.arr[left] < this.arr[currSmallest]) {
      currSmallest = left;
    }

    if (right < this.size && this.arr[right] < this.arr[currSmallest]) {
      currSmallest = right;
    }

    if (currSmallest != index) {
      const temp = this.arr[currSmallest];
      this.arr[currSmallest] = this.arr[index];
      this.arr[index] = temp;
      this.minHeapify(currSmallest);
    }
  }

  getMin() {
    if (this.size > 0) {
      return this.arr[0];
    }
  }

  deleteMin() {
    if (this.size === 1) {
      this.size--;
    } else {
      this.arr[0] = this.arr[this.size - 1];
      this.size--;

      for (let curr = 0; curr < this.size; curr++) {
        this.minHeapify(curr);
      }
    }
  }

  buildMinHeap() {
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.minHeapify(i);
    }
  }
  print() {
    this.arr.forEach((item) => {
      process.stdout.write(item + " ");
    });
  }

  clear() {
    this.size = 0;
  }
}

module.exports = minHeap;
