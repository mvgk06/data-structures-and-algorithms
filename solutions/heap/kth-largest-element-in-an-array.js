/*

Sorting

Time - O(nlogn)
Space - O(1)

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

Time - O(nlogn)
Space - O(k)

*/

const MinHeap = require("../../data-structures/min-heap.js")

const findKthLargest2 = function(nums, k) {
    
    const minHeap=new MinHeap();
    
    for(let i=0;i<nums.length;i++){
        minHeap.insert(nums[i]);
        if(minHeap.size>k){
            minHeap.deleteMin();
        }
    }
    
    return minHeap.getMin();
    
};