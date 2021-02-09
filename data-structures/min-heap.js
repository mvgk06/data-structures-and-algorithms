class MinHeap {
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

  hasLessPriority(curr,parent){
    return this.arr[curr].key<this.arr[parent].key; 
    // (this.arr[curr].key===this.arr[parent].key && this.arr[curr].value < this.arr[parent].value)
  }

  insert(key,value) {
    this.arr[this.size]={key:key,value:value};
    this.size++;

    let curr=this.size-1, parent=this.parent(curr);
        
    while(parent>=0 && this.hasLessPriority(curr,parent)){
        const temp=this.arr[curr];
        this.arr[curr]=this.arr[parent];
        this.arr[parent]=temp;
        curr=parent;
        parent=this.parent(curr);
    }
  }

  minHeapify(index) {
    let currMin = index;
    const left = this.left(currMin), right = this.right(currMin);

    if (left < this.size && this.hasLessPriority(left,currMin)) {
      currMin = left;
    }

    if (right < this.size && this.hasLessPriority(right,currMin)) {
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
    if(this.size>0){
      if (this.size === 1) {
        this.size--;
      } 
      else {
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.minHeapify(0);
      }
    } 
  }

  buildMinHeap(arr) {
    for(let i=0;i<arr.length;i++){
      this.arr[i]={key:arr[i],value:arr[i]};
    }
    this.size=arr.length;
    const parentOfLastNode=this.parent(this.size-1);
    for (let i = parentOfLastNode; i >= 0; i--) {
      this.minHeapify(i);
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

module.exports = MinHeap;
