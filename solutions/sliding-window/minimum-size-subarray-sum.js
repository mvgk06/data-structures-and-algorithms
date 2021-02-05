/*

Sliding window

Time - O(n)
Space - O(1)

*/

const minSubArrayLen = function(s, nums) {

    let i=0, result=nums.length, currSum=0, totalSum=0;
    
    for(let j=0;j<nums.length;j++){
        
        currSum+=nums[j];
        totalSum+=nums[j];
        
        while(i<nums.length && currSum>=s){
            result=Math.min(result,j-i+1);
            currSum-=nums[i];
            i++;
        }

    }
    
    if(result===nums.length && totalSum<s){
        return 0;
    }
    
    return result;
    
};