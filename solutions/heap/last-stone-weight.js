/*

Max Heap

Time - O(nlogn)
Space - O(n)

*/

const lastStoneWeight = function(stones) {
    
    const maxHeap=new MaxHeap();
    
    for(let i=0;i<stones.length;i++){
        maxHeap.insert(stones[i],stones[i]);
    }
    
    while(maxHeap.getSize()>1){
        let first=maxHeap.getMax().value;
        maxHeap.deleteMax();
        if(maxHeap.getSize()===0){
            return first;
        }
        let second=maxHeap.getMax().value;
        maxHeap.deleteMax();
        if(first!=second){
            const result=Math.abs(first-second);
            maxHeap.insert(result,result);
        }
    }
    
    if(maxHeap.getSize()===1){
        return maxHeap.getMax().value;
    }
    return 0;
};