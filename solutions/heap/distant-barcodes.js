/*

Max Heap + Map

Time - O(nlogn)
Space - O(n)

*/

const MaxHeap=require("../../data-structures/max-heap.js")

const rearrangeBarcodes = function(barcodes) {
    
    const map=new Map();
    
    for(let i=0;i<barcodes.length;i++){
        if(map.has(barcodes[i])){
            map.set(barcodes[i],map.get(barcodes[i])+1);
        }
        else{
            map.set(barcodes[i],1);
        }
    }
    
    const maxHeap=new MaxHeap();
    
    for(let key of map.keys()){
        maxHeap.insert(map.get(key),key);
    }
    
    const output=new Array(barcodes.length);
    let currIndex=0;
    
    while(maxHeap.getSize()>0){
        const currMax=maxHeap.getMax();
        maxHeap.deleteMax();
        while(currMax.key>0){
            output[currIndex]=currMax.value;
            currMax.key=currMax.key-1;
            currIndex+=2;
            if(currIndex>output.length-1){
                currIndex=1;
            }
        }
    }
    
    return output;
};

/*

Map + Set

Time - O(n)
Space - O(n)

*/