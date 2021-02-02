/*

Sliding window + Map

Time - O(n)
Space - O(n)

*/

const totalFruit = function(tree) {
    
    let i=0, max=0;
    const map=new Map();
    for(let j=0;j<tree.length;j++){
        if(map.has(tree[j])){
            map.set(tree[j],map.get(tree[j])+1);
        }
        else{
            map.set(tree[j],1);
        }
        if(map.size>2){
            while(i<tree.length && map.size>2){
                map.set(tree[i],map.get(tree[i])-1);
                if(map.get(tree[i])===0){
                    map.delete(tree[i]);
                }
                i++;
            }
        }
        max=Math.max(max,j-i+1);
    }
    
    return max;
    
};