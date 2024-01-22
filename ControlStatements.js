//For loop
sum=0
for(var i=0;i<10;i++)
{
    sum+=i
}
console.log(sum)

//while loop
i=0
sum=0
while(i<10){
    sum+=i
    i++
}
console.log(sum)

//do...while
i=0

do{
    sum+=i
    i++
}
while(i<10)
console.log(sum)

//example1--->valid
arr=[10,20,30.7]
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
//example2---->valid
arr=[10,20,30]
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
//example3--->valid
arr=[10,20,true,false]
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for in loop
arr=[10,20,"String","kongu",89]
for (const index in arr){
    console.log("The value present in index is",index,"is",arr[index])
}

//for of
arr=[10,20,"String","kongu"]
for(const value of arr){
    console.log(value)
}

//for each
arr.forEach(element => {
    console.log(element)
    
});





//for in
for(key in kongu){
    console.log(key,kongu[key])
}
