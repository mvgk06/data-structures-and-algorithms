/* 

Brute force 

Time - O(n*k)
Space - O(1)

*/

const getFirstNegative= function(arr,k){

    const output=[];
    let firstNegativeFound=false;
    
    for(let i=0;i<=arr.length-k;i++){
        for(let j=i;j<i+k;j++){
            if(arr[j]<0){
                output.push(arr[j]);
                firstNegativeFound=true;
                break;
            }
        }
        if(firstNegativeFound){
            firstNegativeFound=false;
        }
        else{
            output.push(0);
        }
    }

    return output;
}

/* 

Sliding window + Queue

Time - O(n)
Space - O(1)

*/

const Deque=require("../../data-structures/deque.js");

const getFirstNegative2=function(arr,k){
    
    let i=0;
    const output=[], queue=new Deque();

    for(let j=0;j<arr.length;j++){
        if(arr[j]<0){
            queue.push(arr[j]);
        }
        if(j-i+1===k){
            if(queue.getSize()===0){
                output.push(0);
            }
            else{
                output.push(queue.getFront());
            }
            if(arr[i]===queue.getFront()){
                queue.deque();
            }
            i++;
        }
    }

    return output;
}