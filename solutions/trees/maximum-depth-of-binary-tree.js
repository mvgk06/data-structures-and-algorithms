/*

DFS

Time - O(n)
Space - O(n)

*/

const getMaxDepth=(curr)=>{
    if(curr===null){
        return 0;
    }
    const left=getMaxDepth(curr.left), right=getMaxDepth(curr.right);
    return 1+Math.max(left,right);
}

const maxDepth = function(root) {
    return getMaxDepth(root);
};

/*

BFS

Time - O(n)
Space - O(n)

*/

const maxDepth2 = function(root) {
    if(root===null){
        return 0;
    }
    
    const queue=new Deque();
    queue.push(root);
    let maxDepth=0;
    
    while(queue.getSize()>0){
        const currSize=queue.getSize();
        for(let i=0;i<currSize;i++){
            const curr=queue.getFront();
            queue.deque();
            if(curr.left!=null){
                queue.push(curr.left);
            }
            if(curr.right!=null){
                queue.push(curr.right);
            }
        }
        maxDepth++;
    }
    
    return maxDepth;
};