/*

DFS

Time - O(n)
Space - O(n)

*/

const traverse=(curr,k)=>{
    if(curr===null){
        return;
    }

    if(k===0){
        console.log(curr.val);
    }

    traverse(curr.left,k-1);
    traverse(curr.right,k-1);
}

const printNodesAtKFromRoot=(root,k)=>{
    if(root===null){
        return;
    }
    traverse(root,k);
}

/*

BFS

Time - O(n)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const printNodesAtKFromRoot2=(root,k)=>{
    if(root===null){
        return;
    }

    const queue=new Deque();
    queue.push(root);

    let currLevel=0;
    while(queue.getSize()>0){
        
        const currSize=queue.getSize();
        
        for(let i=0;i<currSize;i++){

            const curr=queue.getFront();
            queue.deque();

            if(currLevel===k){
                console.log(curr.val);
            }

            if(curr.left!=null){
                queue.push(curr.left);
            }

            if(curr.right!=null){
                queue.push(curr.right);
            }
        }
        currLevel++;
    }
}
