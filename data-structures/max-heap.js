class maxHeap {
  constructor() {
    this.arr = [];
    this.size = 0;
    this.max;
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
      if (this.arr[curr] > this.arr[parent]) {
        const temp = this.arr[curr];
        this.arr[curr] = this.arr[parent];
        this.arr[parent] = temp;
      }
      curr = this.parent(curr);
    }
  }

  maxHeapify(index) {
    let currLargest = index;
    const left = this.leftChild(currLargest), right = this.rightChild(currLargest);

    if (left < this.size && this.arr[left] > this.arr[currLargest]) {
      currLargest = left;
    }

    if (right < this.size && this.arr[right] > this.arr[currLargest]) {
      currLargest = right;
    }

    if (currLargest != index) {
      const temp = this.arr[currLargest];
      this.arr[currLargest] = this.arr[index];
      this.arr[index] = temp;
      this.maxHeapify(currLargest);
    }
  }

  getMax() {
    if (this.size > 0) {
      return this.arr[0];
    }
  }

  deleteMax() {
    if (this.size === 1) {
      this.size--;
    } else {
      this.arr[0] = this.arr[this.size - 1];
      this.size--;

      for (let curr = 0; curr < this.size; curr++) {
        this.maxHeapify(curr);
      }
    }
  }

  buildMaxHeap() {
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.maxHeapify(i);
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

module.exports = maxHeap;
