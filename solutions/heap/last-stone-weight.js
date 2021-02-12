/*

Max Heap

Time - O(nlogn)
Space - O(n)

*/

const Heap=require("../../data-structures/heap.js");

const lastStoneWeight = function(stones) {
    
    const maxHeap=new Heap((curr,parent)=>curr.key>parent.key);
    
    for(let i=0;i<stones.length;i++){
        maxHeap.insert(stones[i],stones[i]);
    }
    
    while(maxHeap.getSize()>1){
        let first=maxHeap.getTop().value;
        maxHeap.deleteTop();
        if(maxHeap.getSize()===0){
            return first;
        }
        let second=maxHeap.getTop().value;
        maxHeap.deleteTop();
        if(first!=second){
            const result=Math.abs(first-second);
            maxHeap.insert(result,result);
        }
    }
    
    if(maxHeap.getSize()===1){
        return maxHeap.getTop().value;
    }
    return 0;
};