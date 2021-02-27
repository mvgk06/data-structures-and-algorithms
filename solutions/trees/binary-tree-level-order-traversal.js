/*

DFS

Time - O(n)
Space - O(n)

*/

const getNodesByLevel=(curr,level,result)=>{
    
    if(curr===null){
        return;
    }
    
    if(level===result.length){
        result.push([]);
    }
    
    result[level].push(curr.val);
    
    getNodesByLevel(curr.left,level+1,result);
    getNodesByLevel(curr.right,level+1,result);
}

const levelOrder = function(root) {
    
    if(root===null){
        return [];
    }
    
    const result=[];
    getNodesByLevel(root,0,result);
    
    return result;
    
};

/*

BFS

Time - O(n)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const levelOrder2 = function(root) {
    
    if(root===null){
        return [];
    }
    
    const result=[], queue=new Deque();
        
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
        result.push(currLevel);
    }
    
    return result;
};