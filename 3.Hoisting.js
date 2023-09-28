// All function declarations and var are hoisted

console.log(i); //undefined
var i =0;

//the following code is the same as 

var j;
// console.log(j);
j=0;

// hoisting only takes the declaration to the top not the initialization


// let const are not hoisted


// console.log(x); //ReferenceError x not defined

let x = 9;

abc();
function abc(){
    console.log('Function');
}
