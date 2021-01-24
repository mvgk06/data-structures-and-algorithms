class MaxHeap {
  constructor() {
    this.arr = [];
    this.size = 0;
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

    let curr = this.size - 1, parent = this.parent(curr);

    while(parent>=0 && this.arr[curr]>this.arr[parent]) {
      const temp = this.arr[curr];
      this.arr[curr] = this.arr[parent];
      this.arr[parent] = temp;
      curr = parent;
      parent = this.parent(curr);
    }
  }

  maxHeapify(index) {
    let currMax = index;
    const left = this.leftChild(currMax), right = this.rightChild(currMax);

    if (left < this.size && this.arr[left] > this.arr[currMax]) {
      currMax = left;
    }

    if (right < this.size && this.arr[right] > this.arr[currMax]) {
      currMax = right;
    }

    if (currMax != index) {
      const temp = this.arr[currMax];
      this.arr[currMax] = this.arr[index];
      this.arr[index] = temp;
      this.maxHeapify(currMax);
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
    } 
    else {
      this.arr[0] = this.arr[this.size - 1];
      this.size--;
      this.maxHeapify(0);
    }
  }

  buildMaxHeap(arr) {
    this.arr=arr;
    this.size=arr.length;
    for (let i = Math.floor((this.size-1)/ 2); i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  print() {
    console.log(this.arr);
  }

  clear() {
    this.arr=[];
    this.size = 0;
  }
}

module.exports = MaxHeap;
