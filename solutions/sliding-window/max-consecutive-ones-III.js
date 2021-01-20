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