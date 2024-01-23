
//ES6--> ECMA
//1.Var,let,const=> refer variable.js
//2.Arrow function

var fun=() =>{
    console.log("Hello")
}
fun()
//3.destructring operator
var array =[10,20,30,40,50]
var a,b,c,d,e=array;
console.log(a,b,c,d,e)//---->op is undefined undefined undefined undefined 50



var array =[10,20,30,40,50]
var [a,b,c,d,e]=array;
console.log(a,b,c,d,e)//----> op is 10 20 30 40 50

//4.Spread operator
var  array=[10,20,30,40,50]
var array1=[...array,60,70]
console.log(array1)  

//5.Arrowfunction ex1-callback
function submitform(buttonclick,database){
    setTimeout(()=>{
        console.log(buttonclick)
        database();
    },2000)

}
function database(){
    console.log("form submitted successfully")
}
submitform("form submit button click",database)


//Arrowfunction ex2 -callback
submitform=(buttonclick,database)=>{
    setTimeout(()=>{
        console.log(buttonclick)
        database();
    },2000)

}
 database=()=>{
    console.log("form submitted successfully")
}
submitform("form submit button click",database)


//Example for arrowfunction in promise-ex 1
function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout( ()=> {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });
    

//Example for arrowfunction in promise-ex 2
 isAuthenticated=()=> {
    return Math.random() < 1;
  }
   Login=()=>{
    return new Promise( (response, noresponse)=>{
      setTimeout( ()=> {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then( (message) =>{
      console.log(message);
    })
    .catch( (message) =>{
      console.log(message);
    });

    //Arrow function 
     comment=async()=>{
        return new Promise(
            (commentValue)=>{
                setTimeout(()=>
                    {
                        commentValue("This is my first post1")
                    },1000);
    
            }
        )
    }
         like=async()=>{
        return new Promise(
            (CommentCode)=>{
            setTimeout(()=>
                    {
                        CommentCode("This is my first post2")
                    },1000)
                }
        )
    }
     post=async()=>{
        let  post=new Promise(
            (postresponse)=>{
                setTimeout(()=>
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
    

