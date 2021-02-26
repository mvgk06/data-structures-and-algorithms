/*

DFS

Time - O(n)
Space - O(n)

*/

const getSize=(curr)=>{
    if(curr===null){
        return -Number.MAX_VALUE;
    }
    const leftMax=getMax(curr.left);
    const rightMax=getMax(curr.right);
    return Math.max(curr.val,Math.max(leftMax,rightMax));
}

const sizeOfBinaryTree=(root)=>{
    return getSize(root);
}

/*

BFS

Time - O(n)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const sizeOfBinaryTree2=(root)=>{

    if(root===null){
        return -1;
    }

    const queue=new Deque();
    queue.push(root);

    let max=-Number.MAX_VALUE;
    while(queue.getSize()>0){
        const curr=queue.getFront();
        queue.deque();
        max=Math.max(max,curr.val);
        if(curr.left!=null){
            queue.push(curr.left);
        }
        if(curr.right!=null){
            queue.push(curr.right);
        }
    }

    return max;
}