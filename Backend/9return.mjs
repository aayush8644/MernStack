/* make a function
prepo
it takes  one input
if input male =>retrun he
if female =>return she 
esle return they*/

let prepo=(i2)=>{
    if (i2==="male"){
        return "he"
    }else if(i2==="female"){
        return "she"
    }
    else {
        return "they"
    }

}
let _prepo=prepo("male")
console.log(_prepo)