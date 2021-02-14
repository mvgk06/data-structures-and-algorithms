/*

Max Heap + Min Heap

Time - O(logn)
Space - O(n)

*/

const MedianFinder = function() {
    this.maxHeap=new Heap((curr,parent)=>curr.key>parent.key);
    this.minHeap=new Heap((curr,parent)=>curr.key<parent.key);   
};

MedianFinder.prototype.addNum = function(num) {
    
    if(this.maxHeap.getSize()===0){
        this.maxHeap.insert(num,num);
    }
    
    else{
        if(this.maxHeap.getSize()===this.minHeap.getSize()){
            if(num<=this.maxHeap.getTop().value){
                this.maxHeap.insert(num,num);
            }
            else{
                this.minHeap.insert(num,num);
                this.maxHeap.insert(this.minHeap.getTop().value,this.minHeap.getTop().value);
                this.minHeap.deleteTop();
            }
        }
        else{
            if(num<=this.maxHeap.getTop().value){
                this.maxHeap.insert(num,num);
                this.minHeap.insert(this.maxHeap.getTop().value,this.maxHeap.getTop().value);
                this.maxHeap.deleteTop();
            }
            else{         
                this.minHeap.insert(num,num);
            }
        }
    }
    
};

MedianFinder.prototype.findMedian = function() {
     
    if(this.maxHeap.getSize()===this.minHeap.getSize()){
        return (this.maxHeap.getTop().value+this.minHeap.getTop().value)/2;
    }
    else{
        return this.maxHeap.getTop().value;
    }
    
};
