/* 

Min Heap

Time - O(n*logn)
Space - O(n)

*/

const minHeap=require("../../data-structures/min-heap.js");

const eatenApples = function(apples, days) {

    let i=0, currDay=1, result=0;
    const minHeap=new MinHeap();
    
    // Keep eating apples until they are fresh
    while(i<apples.length || minHeap.getSize()>0){
        
        if(i<apples.length){
            minHeap.insert(currDay+days[i],apples[i]);
            i++;
        }
        
        // Remove all roten apples
        while(minHeap.getSize()>0 && minHeap.getMin().key<=currDay){
            minHeap.deleteMin();
        }
       
        // Eat an apple if exist and update the result
        if(minHeap.getSize()>0){
            const currMin=minHeap.getMin();
            minHeap.deleteMin();
            currMin.value=currMin.value-1;
            result++;
            if(currMin.value>0){
                minHeap.insert(currMin.key,currMin.value);
            }
        }
        
        currDay++;
    }
    
    return result;
    
};