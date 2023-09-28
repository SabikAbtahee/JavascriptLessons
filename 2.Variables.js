// ---------------------------------------------------------------


// var is function scoped and let,const is blocked scope

function varExample(){
    for(var i=0;i<5;i++){
        console.log(i); 
    }
    console.log(i); // 5
}

function letExample(){
    for(let i=0;i<5;i++){
        console.log(i); 
    }
    console.log(i); // ReferenceError i not defined
}

// varExample();
// letExample();


// ---------------------------------------------------------------

// Any variable that is not initialized will have the value undefined

let a;

console.log(a);

// ---------------------------------------------------------------


// const cannot be declared and not initialized

const con=3; 
