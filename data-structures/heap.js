class Heap {
  constructor(hasTopPriority) {
    this.arr = [];
    this.size = 0;
    this.hasTopPriority = hasTopPriority;
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  left(index) {
    return 2 * index + 1;
  }
  right(index) {
    return 2 * index + 2;
  }
  insert(key, value) {
    this.arr[this.size] = { key: key, value: value ? value : key };
    this.size++;
    let curr = this.size - 1, parent = this.parent(curr);
    while (parent >= 0 && this.hasTopPriority(this.arr[curr], this.arr[parent])) {
      const temp = this.arr[curr];
      this.arr[curr] = this.arr[parent];
      this.arr[parent] = temp;
      curr = parent;
      parent = this.parent(curr);
    }
  }
  heapify(index) {
    let bestTop = index;
    const left = this.left(bestTop), right = this.right(bestTop);
    if (left < this.size && this.hasTopPriority(this.arr[left], this.arr[bestTop])) {
      bestTop = left;
    }
    if (right < this.size && this.hasTopPriority(this.arr[right], this.arr[bestTop])) {
      bestTop = right;
    }
    if (bestTop != index) {
      const temp = this.arr[bestTop];
      this.arr[bestTop] = this.arr[index];
      this.arr[index] = temp;
      this.heapify(bestTop);
    }
  }
  delete() {
    if (this.size > 0) {
      if (this.size === 1) {
        this.size--;
      }
      else {
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.heapify(0);
      }
    }
  }
  replace(index, value) {
    if (index >= 0 && index < this.size) {
      this.arr[index].value = value;
      let curr = index, parent = this.parent(curr);
      while (parent >= 0 && this.hasTopPriority(this.arr[curr], this.arr[parent])) {
        const temp = this.arr[curr];
        this.arr[curr] = this.arr[parent];
        this.arr[parent] = temp;
        curr = parent;
        parent = this.parent(curr);
      }
    }
  }
  buildHeap(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.arr[i] = { key: arr[i], value: arr[i] };
    }
    this.size = arr.length;
    const parentOfLastNode = this.parent(this.size - 1);
    for (let i = parentOfLastNode; i >= 0; i--) {
      this.heapify(i);
    }
  }
  getTop() {
    if (this.size > 0) {
      return this.arr[0];
    }
  }
  getSize() {
    return this.size;
  }
  clear() {
    this.arr = [];
    this.size = 0;
  }
}

module.exports = Heap;
