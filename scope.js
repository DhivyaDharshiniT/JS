//Local scope-->the i is valid only inside the for loop. So for the 2nd console.log will throw error

/*for(let i=0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)

//Example2
for(var i=0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)*/

var a=10
console.log(a)
{
    let a=5;
    let b=5
    console.log(a)
    console.log(b)
}
console.log(a)