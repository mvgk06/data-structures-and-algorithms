/*

DFS

Time - O(n)
Space - O(n)

*/

const getMinDepth=(curr)=>{
    if(curr===null){
        return 0;
    }
    const left=getMinDepth(curr.left), right=getMinDepth(curr.right);
    if(left===0 || right===0){
        return 1+left+right;
    }
    return 1+Math.min(left,right);
}

const minDepth = function(root) {
    return getMinDepth(root);
};

/*

BFS

Time - O(n)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const minDepth2 = function(root) {
    if(root===null){
        return 0;
    }
    const queue=new Deque();
    queue.push(root);
    let level=1;
    while(queue.getSize()>0){
        const currSize=queue.getSize();
        for(let i=0;i<currSize;i++){
            const curr=queue.getFront();
            queue.deque();
            if(curr.left===null && curr.right===null){
                return level;
            }
            if(curr.left!=null){
                queue.push(curr.left);
            }
            if(curr.right!=null){
                queue.push(curr.right);
            }
        }
        level++;
    }
    
    return level;
};