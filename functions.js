/*//Example1--> Without argument and return type
function fun()
{
    console.log("Function example")
}
fun()

//Example2-->with argument and without return type
function fun(a,b)
{
    console.log("Function example")
    for(var i=a;i<10;i++)
    if(i%2==0)
    {
        console.log("The number",i,"is even")
    }
    else
    {
        console.log("The number",i,"is odd")
    }
}
fun(5,10)
*/
//Example3-->with argument and return type
/*function fun(a,b)
{
    console.log("Function example")
    for(var i=a;i<10;i++)
    if(i%2==0)
    {
        return i
    }
}  
console.log(fun(5,10))*/

//Example4--->without argument and return type
function fun(a)
{
    var b=10
    var c=90
    return b+c
}
console.log(fun())