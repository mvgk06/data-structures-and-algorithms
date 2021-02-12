/*

Min Heap + Map

Time - O(nlogk)
Space - O(n)

*/

const Heap = require("../../data-structures/heap.js");

const topKFrequent = function(nums, k) {
    
    const map=new Map();
    
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1);
        }
    }
    
    const minHeap = new Heap((curr,parent)=>curr.key<parent.key);
    
    for(let key of map.keys()){
        minHeap.insert(map.get(key),key);
        if(minHeap.getSize()>k){
            minHeap.deleteTop();
        }
    }
    
    const output=[];
    
    while(minHeap.getSize()>0){
        output.push(minHeap.getTop().value);
        minHeap.deleteTop();
    }
    
    return output;
};