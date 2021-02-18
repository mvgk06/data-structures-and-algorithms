/* 

Map

Time - O(n)
Space - O(n)

*/

const copyRandomList = function(head) {
    
    if(head===null){
        return null;
    }
    
    const map=new Map();
    
    let curr=head;
    
    while(curr!=null){
        map.set(curr,new Node(curr.val,null,null));
        curr=curr.next;
    }
    
    curr=head;
    let resultHead, isFirstIteration=true;
    while(curr!=null){
        const resultNode=map.get(curr), resultNodeNext=map.get(curr.next), resultNodeRandom=map.get(curr.random);
        if(isFirstIteration){
            resultHead=resultNode;
            isFirstIteration=false;
        }
        if(resultNodeNext){
            resultNode.next=resultNodeNext;
        }
        else{
            resultNode.next=null;
        }
        resultNode.random=resultNodeRandom;
        curr=curr.next;
    }
    
    return resultHead;
};

/*

Two pointer

Time - O(n)
Space - O(1)

*/

const copyRandomList2 = function(head) {
    
    if(head===null){
        return null;
    }
    
    let curr=head;
    
    while(curr!=null){
        const oldNext=curr.next;
        let resultNode=new Node(curr.val,null,null);
        curr.next=resultNode;
        resultNode.next=oldNext;
        curr=curr.next.next;
    }
    
    curr=head;
    while(curr!=null){
        curr.next.random=curr.random?curr.random.next:null;
        curr=curr.next.next;
    }
    
    let oldNode=head,resultNode=head.next, resultHead, isFirstIteration=true;
    while(oldNode!=null){
        if(isFirstIteration){
            resultHead=resultNode;
            isFirstIteration=false;
        }
        oldNode.next=oldNode.next?oldNode.next.next:null;
        resultNode.next=resultNode.next?resultNode.next.next:null;
        oldNode=oldNode.next;
        resultNode=resultNode.next;
    }
    
    return resultHead;
};