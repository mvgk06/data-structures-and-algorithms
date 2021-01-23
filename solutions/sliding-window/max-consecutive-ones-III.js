/* 

Brute force

Time - O(n^2)
Space - O(1)

*/

const longestOnes = function(arr, k) {
    
    let currLength=0, currFlips=k,maxLength=0;
    
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j]===1){
                currLength++;
            }
            else{
                if(currFlips>0){
                    currFlips--;
                    currLength++;
                }
                else{
                    break;
                }
            }
        }
        maxLength=Math.max(maxLength,currLength);
        currLength=0;
        currFlips=k;
    }
    
    return maxLength;
    
};

/* 

Sliding window

Time - O(n)
Space - O(1)

*/

const longestOnes2 = function(arr, k) {
    
    let i=0,maxSize=0,currFlips=0;
    
    for(let j=0;j<arr.length;j++){
        if(arr[j]===0){
            currFlips++;
        }
        if(currFlips>k){
            while(currFlips>k && i<arr.length){
                if(arr[i]===0){
                    currFlips--;
                }
                i++;
            }
        }
        maxSize=Math.max(maxSize,j-i+1);
    }
    
    return maxSize;
      
};