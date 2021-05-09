/* 

Binary search

Time - O(n*log(sum))
Space - O(1)

*/

 const canShipWithinDays=(weights,maxDays,maxCapacity)=>{

    let currCapacity=0, daysPassed=1, i=0;
    
    while(i<weights.length){
        if(weights[i]>maxCapacity){
            return false;
        }
        else{
            if(currCapacity+weights[i]<=maxCapacity){
               currCapacity+=weights[i];
                i++;
            }
            else{
                currCapacity=0;
                daysPassed++;
            }
        }
    }
    
    if(daysPassed<=maxDays){
        return true;
    }
    return false;
}

const shipWithinDays = function(weights, maxDays) {
    
    let minWeight=Number.MAX_VALUE, totalWeight=0;
    
    for(let i=0;i<weights.length;i++){
        minWeight=Math.min(minWeight,weights[i]);
        totalWeight+=weights[i];
    }
    
    let start=minWeight, end=totalWeight, mid, result=-1;
    
    while(start<=end){
        mid=Math.floor(start+(end-start)/2);
        if(canShipWithinDays(weights,maxDays,mid)){
            result=mid;
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    
    return result;
};