/* make a function can vote
input one value */

let canvote=(i1)=>{
    if(i1>=18){
        return "can vote"

    }
    else{
        return "can not vote"
    }
}

let _canvote = canvote(20)
console.log(_canvote)