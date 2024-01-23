
/*async function asAw(){
    var promise = new Promise(
        function(response){
            setTimeout(function(){
            response("Example of Async and Await");
            },1000);
        }
    );
    console.log(await promise)  //if await keyword is not given then the op will be in "pending" state
}
asAw()*/

//Kind of our own Instagram
async function comment(){
    return new Promise(
        function(commentValue){
            setTimeout(function()
                {
                    commentValue("This is my first post1")
                },1000);

        }
    )
}
async function like(){
    return new Promise(
        function(CommentCode){
        setTimeout(function()
                {
                    CommentCode("This is my first post2")
                },1000)
            }
    )
}
async function post(){
    let  post=new Promise(
        function(postresponse){
            setTimeout(function()
                {
                    postresponse("This is my first post")
                },1000);
        });
       
var[feed,Comment,Like]=await Promise.all([post,comment(),like()])
console.log(await feed)
console.log(await Comment)
console.log(await Like)
}
post();
//async always holds and makes  it pending & await displays or release the op