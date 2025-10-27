// let a = 30;

// if (a > 20) {
//     let a = 50;
//     console.log("a inside value=" + a);
// }
// else {
//     console.log("inside else statement");
// }

// console.log("a outside value=" + a);
// function as an expression
//anonymous function
//  const data = function (msg){
// return "hiiii...hello"+msg;
// }
// const msg1 = data(" good morning");
// console.log(msg1);
//Arrow function
// const data =(msg)=>{
//     return("hii..heloo"+msg);
//     return("heeeee");
// }
//  const ans =data(" good morning");
//  console.log(ans);

// const data = msg=> msg;
// const data1=data("heelooo");
// console.log(data1);
//IIFE 
// (()=>{
//     console.log("hi...heloo");
// })();
// setTimeout(()=>(console.log("helloooo")),1000);
// setInterval(()=>(console.log("heyyyyyyyyy")),1000);
// function greetings(msg="hiii"){
//     console.log("helloo"+msg);
  

// }  greetings(" welcome to abes");
function selectLanguage(lang){
let data;
if(lang=='java'){
    function javaCompiler(){
        return "hey, java compiler calling...";
    }
    data=javaCompiler();
}
else if(lang=='c'){
    function cCompiler(){
        return "hey, c compiler calling";
    }
    data=cCompiler();
}
else {
    data=" no compiler available";
}
return data;
}
const val = selectLanguage('c');
console.log(val);