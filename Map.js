/*//Map example1---no key value point is present
mapex=new Map("id","21ECR058")
console.log(mapex)

//Map example2---no op
mapex=new Map(["id","21ECR058"])
console.log(mapex)

//Map example3--op
mapex=new Map([
    ["id","21ECR058"],["name","Sara"]
])
console.log(mapex)
//for in --no output
for (key in mapex) {
    console.log(key)

    
}
for ( value of mapex ) {
    console.log(value)
}

console.log(mapex.get("name"))
console.log(mapex.has("name"))*/

//adding and deleting in MAP
mapeg=new Map([
    ["id","21ECR058"]
])
console.log(mapeg)
mapeg.set("Name","Sara")
mapeg.set("Age","12")
mapeg.set("phoneno","1234567890")
console.log(mapeg)
mapeg.delete("phoneno","1234567890")
console.log(mapeg)