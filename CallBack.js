/*//Callback
function ramuSomu(welcomeMessage,callback){
    setTimeout(function(){
        console.log(welcomeMessage)
        callback();
    },2000)
}
function miniAni(){
    console.log("Odi Poiru vanthudatha da thambi!!!!")
}
ramuSomu("Hello Ramu and Somu\nWelcome to Kongu Engineering College",miniAni)

*/
//Example2
function submitform(buttonclick,database){
    setTimeout(function(){
        console.log(buttonclick)
        database();
    },2000)

}
function database(){
    console.log("form submitted successfully")
}
submitform("form submit button click",database)