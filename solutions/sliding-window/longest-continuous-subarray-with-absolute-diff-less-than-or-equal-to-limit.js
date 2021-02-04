/*

Brute force

Time - O(n^2)
Space - O(1)

*/

const longestSubarray = function(nums, limit) {
    
    let max=0, min=Number.MAX_VALUE, maxSize=0;
    
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            max=Math.max(max,nums[j]);
            min=Math.min(min,nums[j]);
            if(Math.abs(max-min)<=limit){
                maxSize=Math.max(maxSize,j-i+1);
            }
            else{
                break;
            }
        }
        max=0;
        min=Number.MAX_VALUE;
    }
    
    return maxSize;
    
};

/*

Sliding window + Deque

Time - O(n)
Space - O(n)

*/

const Deque= require("../../data-structures/deque.js");

const longestSubarray2 = function(nums, limit) {
    
    let i=0, maxSize=0;
    
    const minDeque=new Deque(), maxDeque=new Deque();
    
    for(let j=0;j<nums.length;j++){
        
        while(minDeque.getSize()!=0 && minDeque.getRear()>nums[j]){
            minDeque.pop();
        }
        
        minDeque.push(nums[j]);
        
        while(maxDeque.getSize()!=0 && maxDeque.getRear()<nums[j]){
            maxDeque.pop();
        }
        
        maxDeque.push(nums[j]);
        
        const max=maxDeque.getFront(), min=minDeque.getFront();
        
        if(Math.abs(max-min)>limit){
            if(minDeque.getFront()===nums[i]){
                minDeque.deque();
            }
            if(maxDeque.getFront()===nums[i]){
                maxDeque.deque();
            }
            i++;
        }
        maxSize=Math.max(maxSize,j-i+1);
    }
    
    return maxSize;
    
};