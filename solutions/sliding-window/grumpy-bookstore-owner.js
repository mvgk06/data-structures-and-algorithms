/*

Brute force

Time - O(n^2)
Space - O(1)

*/

const maxSatisfied = function(customers, grumpy, x) {

    let total=0;
    
    for(let i=0;i<customers.length;i++){
        if(grumpy[i]===0){
            total+=customers[i];
        }
    }
    
    let curr=0, max=0;
    
    for(let i=0;i<customers.length-x+1;i++){
        for(let j=i;j<i+x;j++){
            if(grumpy[j]===1){
                curr+=customers[j];
            }
        }
        max=Math.max(max,curr);
        curr=0;
    }
    
    return total+max;
    
};

/*

Sliding window

Time - O(n)
Space - O(1)

*/

const maxSatisfied2 = function(customers, grumpy, x) {
  
    let i=0, total=0, curr=0, max=0;
    
    for(let j=0;j<customers.length;j++){
        if(grumpy[j]===0){
            total+=customers[j];
        }
        else{
            curr+=customers[j];
        }
        if(j-i+1===x){
            max=Math.max(max,curr);
            if(grumpy[i]===1){
                curr-=customers[i];
            }
            i++;
        }
    }
    return total+max;
    
};