class Heap {

  constructor(hasTopPriority) {
    this.arr = [];
    this.size = 0;
    this.hasTopPriority=hasTopPriority;
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

  insert(key,value) {
    this.arr[this.size]={key:key,value:value};
    this.size++;

    let curr = this.size - 1, parent = this.parent(curr);

    while(parent>=0 && this.hasTopPriority(this.arr[curr],this.arr[parent])) {
      const temp = this.arr[curr];
      this.arr[curr] = this.arr[parent];
      this.arr[parent] = temp;
      curr = parent;
      parent = this.parent(curr);
    }
  }

  heapify(index) {
    let currTop = index;
    const left = this.left(currTop), right = this.right(currTop);

    if (left < this.size && this.hasTopPriority(this.arr[left],this.arr[currTop])) {
      currTop = left;
    }

    if (right < this.size && this.hasTopPriority(this.arr[right],this.arr[currTop])) {
      currTop = right;
    }

    if (currTop != index) {
      const temp = this.arr[currTop];
      this.arr[currTop] = this.arr[index];
      this.arr[index] = temp;
      this.heapify(currTop);
    }
  }

  getTop() {
    if (this.size > 0) {
      return this.arr[0];
    }
  }

  deleteTop() {
    if(this.size>0){
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

  buildHeap(arr) {
    for(let i=0;i<arr.length;i++){
      this.arr[i]={key:arr[i],value:arr[i]};
    }
    this.size=arr.length;
    const parentOfLastNode=this.parent(this.size-1);
    for (let i = parentOfLastNode; i >= 0; i--) {
      this.heapify(i);
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
  
module.exports = Heap;
  