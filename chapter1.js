// var is function scoped let is block scoped.
// Global scope local scope
// var is hoisted let is not const is also not hoisted---  ---
// Anything not initialized will be set as undefined
// const cannot be only declare it has to be declared and initialized
// const value cannot be changed
// hoisted means it will only take the variable delcaration to the top not initialization
// data types - number, string,boolean, object
// undefined is a value and also a type
// null is when a object is expected
// pass by value - number, string,boolean,  vs pass by reference object
// spread operator

// let arr = [1, 2, 3];

// let arr2 = [4, 5, 6];

// [1,2,3,4,5,6]

// let result = arr + arr2;  does not work
// let result = [[...arr] + [...arr2]];  does not work
// let result = [];
// for (let i of arr) {
// 	result.push(i);
// }
// for (let i of arr2) {
// 	result.push(i);
// }
// does way

//let result = [...arr, ...arr2]; // does work
//let result2 = [1, 2, 3, 4, 5, 6]; // does work

// let result = arr.concat(arr2);// does work

// let a = 20;
// let b = [10, 30, 40];

// let result = [20,10,30,40];

// let result = [a, ...b];

// let result = b.unshift(a);

// let s = b.unshift(a);

// console.log(typeof s);
// console.log(s);
// console.log(b);

// let a = new Set();
// function parent() {
// 	let c = 2;
// 	function x(...a) {
// 		console.log(this);
// 	}

// 	const a = () => {
// 		console.log(this);
// 	};
// 	// x(10, 20, 30);

// 	a(40, 50, 60);
// }
// parent();

let b = {
	d: 2,
	a: () => {
		console.log(this);
	},
	c: function () {
		console.log(this);
	},
};

b.a();

b.c();
