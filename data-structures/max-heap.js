class MaxHeap {
  constructor() {
    this.arr = [];
    this.size = 0;
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

  hasMorePriority(curr,parent){
    return this.arr[curr].key>this.arr[parent].key; 
    // (this.arr[curr].key===this.arr[parent].key && this.arr[curr].value < this.arr[parent].value)
  }

  insert(key,value) {
    this.arr[this.size]={key:key,value:value};
    this.size++;

    let curr = this.size - 1, parent = this.parent(curr);

    while(parent>=0 && this.hasMorePriority(curr,parent)) {
      const temp = this.arr[curr];
      this.arr[curr] = this.arr[parent];
      this.arr[parent] = temp;
      curr = parent;
      parent = this.parent(curr);
    }
  }

  maxHeapify(index) {
    let currMax = index;
    const left = this.left(currMax), right = this.right(currMax);

    if (left < this.size && this.hasMorePriority(left,currMax)) {
      currMax = left;
    }

    if (right < this.size && this.hasMorePriority(right,currMax)) {
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
    if(this.size>0){
      if (this.size === 1) {
        this.size--;
      } 
      else {
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.maxHeapify(0);
      }
    }
  }

  buildMaxHeap(arr) {
    for(let i=0;i<arr.length;i++){
      this.arr[i]={key:arr[i],value:arr[i]};
    }
    this.size=arr.length;
    const parentOfLastNode=this.parent(this.size-1);
    for (let i = parentOfLastNode; i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  getSize(){
    return this.size;
  }
  
  clear() {
    this.arr=[];
    this.size = 0;
  }
}

module.exports = MaxHeap;
