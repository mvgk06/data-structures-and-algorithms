/*

Binary search

Time - O(n*log(max))
Space - O(1)

*/

const isPossibleToEat=(piles,h,mid)=>{
    
    let hrsSpentToEat=0;
    
    for(let i=0;i<piles.length;i++){
        if(piles[i]<mid){
            hrsSpentToEat++;        
        }
        else{
            hrsSpentToEat+=Math.ceil(piles[i]/mid);   
        }
        if(hrsSpentToEat>h){
            return false;
        }
    }
    
    return true;
    
}

const minEatingSpeed = function (piles, H) {

    let max=-Number.MAX_VALUE;
    
    for(let i=0;i<piles.length;i++){
        max=Math.max(max,piles[i]);
    }
    
    let start=1, end=max, result=-1;
    while(start<=end){
        const mid=Math.floor(start+(end-start)/2);
        if(isPossibleToEat(piles,h,mid)){
            result=mid;
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    
    return result;
};