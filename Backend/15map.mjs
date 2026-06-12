let users=[
    {name:"nitan",age:24},
    {name:"sita",age:23},
    {name:"ram",age:26},

]
//["nitan,"sita","ram"]
let names=users.map((item,i)=>{
    return item.name
})
console.log(names)



