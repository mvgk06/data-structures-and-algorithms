/*

DFS

Time - O(n)
Space - O(n)

*/

const traverse=(curr,level,result)=>{
    if(curr===null){
        return;
    }
    if(result.length===level){
        result.push(curr.val);
    }   
    traverse(curr.right,level+1,result);
    traverse(curr.left,level+1,result);
}

const rightSideView = function(root) {
    if(root===null){
        return [];
    }
    const result=[];
    traverse(root,0,result);
    return result;
};

/*

BFS

Time - O(n)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const rightSideView2 = function(root) {
    if(root===null){
        return [];
    }

    const queue=new Deque(),result=[];
    queue.push(root);

    while(queue.getSize()>0){
        const currSize=queue.getSize();
        for(let i=0;i<currSize;i++){
            const curr=queue.getFront();
            queue.deque();
            if(i===currSize-1){
                result.push(curr.val);
            }
            if(curr.left!=null){
                queue.push(curr.left);
            }
            if(curr.right!=null){
                queue.push(curr.right);
            }
        }
    }

    return result;
};