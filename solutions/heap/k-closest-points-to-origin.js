/*

Sorting

Time - O(nlogn)
Space - O(n)

*/

const getDistance=(point)=>{
    return Math.sqrt(Math.pow(point[0],2)+Math.pow(point[1],2));
}

const kClosest = function(points, k) {
    
    points.sort((a,b)=>{
        if(getDistance(a)<getDistance(b)){
          return -1;
        }  
        return 1;
    })
    
    return points.slice(0,k);
    
};

/*

Max Heap

Time - O(nlogk)
Space - O(k)

*/

const MaxHeap=require("../../data-structures/max-heap.js");

const kClosest2 = function(points, k) {
    
    const maxHeap=new MaxHeap();
    
    for(let i=0;i<points.length;i++){
        maxHeap.insert(getDistance(points[i]),[points[i][0],points[i][1]]);
        if(maxHeap.getSize()>k){
            maxHeap.deleteMax();
        }
    }
    
    const output=[];
    
    while(maxHeap.getSize()>0){
        output.push(maxHeap.getMax().value);
        maxHeap.deleteMax();
    }
    
    return output;
    
};