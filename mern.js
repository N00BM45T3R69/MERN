console.log('Hello')
// var global ,let local,const constant
var a=10;
var b=10;
var c=a+b;
function sum(a,b){ //Synchronous function 
    return a+b;
}
console.log(`Sum is `+sum(a,b))
function divisionAsync (a, b, callbackFunction) {
    if(b==0){
        callbackFunction("Zero Division Error",null);
    }
    else{
        callbackFunction(null,a/b);
    }
 };
    // Call the function divisionAsync
    //When that function comp letes, it should call
    // our passed function with two parameters
    // error- if any error happens pass a message
    // result - result of computation
    divisionAsync (a, b, function (err, result) { // var add = function(a,b)
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    });
//     GOAL:Write a Web Server Program that serves
// "Hello World" in browser
// 1. Create a NodeJS project.
// 2.Import and Use Express to Create a Web Server.
// 3. Write Server Handler for Home Page.
// 4.Run the Code.