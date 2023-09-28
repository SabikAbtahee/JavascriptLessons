let obj = {
    a:{
        a:{
            b:2
        }
    }
}

console.log(obj && obj.a && obj.a.a && obj.a.a.b);
console.log(obj || obj.a || obj.a.a || obj.a.a.b);
console.log(obj?.a?.a?.b)
console.log(obj.a.a.b)


// console.log(obj.a.b.a)
console.log("Optiinal",obj?.a?.b?.a)

let first = 2;
let second = 3;
console.log( first ??  second);


 first = null;
 second = 3;
console.log( first ??  second);


first = undefined;
second = 3;
console.log( first ??  second);

first = false;
second = 3;
console.log( first ??  second);