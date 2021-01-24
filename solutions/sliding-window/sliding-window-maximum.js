/*

Brute force

Time - O(n*k)
Space - O(1)

*/

const maxSlidingWindow = function(nums, k) {

    let max=-Number.MAX_VALUE;
    const output=[];
    for(let i=0;i<(nums.length-k+1);i++){
        for(let j=i;j<i+k;j++){
            max=Math.max(max,nums[j]);
        }
        output.push(max);
        max=-Number.MAX_VALUE;;
    }

    return output;
}


/*

Sliding window + Deque

Time - O(n)
Space - O(k)

*/

const Deque = require("../../data-structures/deque.js");

const maxSlidingWindow2 = function(nums, k) {
    
    let i=0;
    const deque=new Deque(), output=[];
    
    for(let j=0;j<nums.length;j++){
        // Pop all the elements that are not required
        while(deque.getSize()!=0 && deque.getRear()<nums[j]){
            deque.pop();    
        }
        deque.push(nums[j]);
        if(j-i+1===k){
            output.push(deque.getFront());
            if(nums[i]===deque.getFront()){
                deque.deque(nums[i]);
            }
            i++;
        }
    }
    
    return output;
};