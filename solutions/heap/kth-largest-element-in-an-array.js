/*

Sorting

Time - O(nlogn)
Space - O(n)

*/

const findKthLargest = function(nums, k) {
    
    nums.sort((a,b)=>{
        if(a<b){
            return -1;
        }
        return 1;
    });
    
    return nums[nums.length-k];
    
};


/*

Min Heap

Time - O(nlogk)
Space - O(k)

*/

const MinHeap = require("../../data-structures/min-heap.js")

const findKthLargest2 = function(nums, k) {
    
    const minHeap=new MinHeap();
    
    for(let i=0;i<nums.length;i++){
        minHeap.insert(nums[i],nums[i]);
        if(minHeap.getSize()>k){
            minHeap.deleteMin();
        }
    }
    
    return minHeap.getMin().value;
    
};