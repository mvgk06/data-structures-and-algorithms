class MinHeap {
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

    let curr=this.size-1, parent=this.parent(curr);
        
      while(parent>=0 && this.arr[curr]<this.arr[parent]){
          const temp=this.arr[curr];
          this.arr[curr]=this.arr[parent];
          this.arr[parent]=temp;
          curr=parent;
          parent=this.parent(curr);
      }
  }

  minHeapify(index) {
    let currMin = index;
    const left = this.leftChild(currMin), right = this.rightChild(currMin);

    if (left < this.size && this.arr[left] < this.arr[currMin]) {
      currMin = left;
    }

    if (right < this.size && this.arr[right] < this.arr[currMin]) {
      currMin = right;
    }

    if (currMin != index) {
      const temp = this.arr[currMin];
      this.arr[currMin] = this.arr[index];
      this.arr[index] = temp;
      this.minHeapify(currMin);
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
    } 
    else {
      this.arr[0] = this.arr[this.size - 1];
      this.size--;
      this.minHeapify(0);
    }
  }

  buildMinHeap(arr) {
    this.arr=arr;
    this.size=arr.length;
    for (let i = Math.floor((this.size-1)/ 2); i >= 0; i--) {
      this.minHeapify(i);
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

module.exports = MinHeap;
