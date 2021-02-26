/*

DFS

Time - O(n)
Space - O(n)

*/

const getSize=(curr)=>{
    if(curr===null){
        return 0;
    }
    return 1+getSize(curr.left)+getSize(curr.right);
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
        return 0;
    }

    const queue=new Deque();
    queue.push(root);

    let size=0;
    while(queue.getSize()>0){
        size++;
        const curr=queue.getFront();
        queue.deque();
        if(curr.left!=null){
            queue.push(curr.left);
        }
        if(curr.right!=null){
            queue.push(curr.right);
        }
    }

    return size;
}