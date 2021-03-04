/*

DFS

Time - O(n^2)
Space - O(n^2)

*/

const getZigZag=(curr,level,result)=>{
    
    if(curr===null){
        return;
    }
    
    if(result.length===level){
        result.push([]);
    }
    
    result[level].push(curr.val);
    
    getZigZag(curr.left,level+1,result);
    getZigZag(curr.right,level+1,result);
    
}

const zigzagLevelOrder = function(root) {
    const result=[];
    getZigZag(root,0,result);
    for(let i=0;i<result.length;i++){
        if(i%2!=0){
            result[i].reverse();
        }
    }
    return result;
};

/*

BFS

Time - O(n^2)
Space - O(n^2)

*/

const Deque=require("../../data-structures/deque.js")

const zigzagLevelOrder2 = function(root) {
   
    if(root===null){
        return [];
    }
    
    const result=[],queue=new Deque;
    let level=0;
    queue.push(root);
    while(queue.getSize()>0){
        const currSize=queue.getSize();
        const currLevel=[];
        for(let i=0;i<currSize;i++){
            const curr=queue.getFront();
            queue.deque();
            currLevel.push(curr.val);
            if(curr.left!=null){
                queue.push(curr.left);
            }
            if(curr.right!=null){
                queue.push(curr.right);
            }
        }
        if(level%2!=0){
            currLevel.reverse();
            result.push(currLevel);
        }
        else{
            result.push(currLevel);
        }
        level++;
    }
    
    return result;
};