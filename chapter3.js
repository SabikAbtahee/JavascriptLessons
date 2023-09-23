// Function Declaration
// Function Expression 
// Arrow Function Expression
// Callback functions
// Function passed as arguments
// Returned function
// Immediately invoked function expresion
// Expressed Function Cannot be used before initialization because of hoisting
// 


function declared(){
    console.log("Function Declaration");
};

let expressed = function (){
    console.log("Function Expression");
};

let expressedArrow =  () => {
    console.log("Function Expression Arrow");
};

// IIFE
(function (){
    console.log("IIFE - Immediately Invoked Function Expressions");
})();

( () =>{
    console.log("IIFE - Immediately Invoked Function Expressions");
})();


// Callback functions

