/*

Min Heap + Map

Time - O(nlogk)
Space - O(n)

*/

const Heap=require("../../data-structures/heap.js");

const topKFrequent = function(words, k) {

    const map=new Map();
    
    for(let i=0;i<words.length;i++){
        if(map.has(words[i])){
            map.set(words[i],map.get(words[i])+1);
        }
        else{
            map.set(words[i],1);
        }
    }
    
    const minHeap=new Heap((curr,parent)=>curr.key<parent.key || (curr.key===parent.key && curr.value>parent.value));
    
    for(let word of map.keys()){
        minHeap.insert(map.get(word),word);
        if(minHeap.getSize()>k){
            minHeap.deleteTop();
        }
    }
    
    const result=[];
    
    while(minHeap.getSize()>0){
        result.push(minHeap.getTop().value);
        minHeap.deleteTop();
    }
    
    return result.reverse();

};