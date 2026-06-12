//map loop

/* 
let ar1=[10,20,30,40,50]

let ar=ar1.map((item,i)=>{
    return item*i

})
console.log(ar)
 */

/* //[10,20,30]=>[20,40,60]
let ar=[10,20,30]
let a3=ar.map((item,i)=>{
    return item*2
})
console.log(a3) */




//[20,30,10,5]=>[40,60,0,0]

let x=[20,30,10,5]
let y=x.map((item,i)=>{
    if(item>=18)
    {
        return item*2
    }
    else
        return 0
})
console.log(y)