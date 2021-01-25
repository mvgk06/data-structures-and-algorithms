/* 

Brute force

Time - O(n^2)
Space - O(1)

*/

const maxScore = function(cardPoints, k) {
    
    let total=0, sum=0, min=Number.MAX_VALUE;
    
    for(let i=0;i<cardPoints.length;i++){
        total+=cardPoints[i];
    }
    
    for(let i=0;i<k+1;i++){
        for(let j=i;j<i+(cardPoints.length-k);j++){
            sum+=cardPoints[j];
        }
        min=Math.min(min,sum);
        sum=0;
    }
    
    return total-min;
    
};

/* 

Sliding window - Opposite

Time - O(n)
Space - O(1)

*/

const maxScore2 = function(cardPoints, k) {
    
    if(k===cardPoints.length){
        let sum=0;
        for(let i=0;i<cardPoints.length;i++){
            sum+=cardPoints[i];
        }
        
        return sum;
    }
    
    let i=0, total=0, sum=0, min=Number.MAX_VALUE;
    
    for(let j=0;j<cardPoints.length;j++){
        total+=cardPoints[j];
        sum+=cardPoints[j];
        if(j-i+1===cardPoints.length-k){
            min=Math.min(min,sum);
            sum-=cardPoints[i];
            i++;
        }
    }
    
    return total-min;
    
};