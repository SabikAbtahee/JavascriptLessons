// Default Binding
// this pointing to the global object
function foo() {
	console.log(this.a);
	console.log(a);
}
var a = 2;
foo(); // 2

function foo() {
	"use strict";
	console.log(this.a);
	console.log(a);
}
var a = 2;
foo(); // TypeError: `this` is `undefined`

function foo() {
	console.log(this.a);
}
var a = 2;
(function () {
	"use strict";
	foo(); // 2
})();

// Implicit Binding

function foo() {
	console.log(this.a);
}
var obj = {
	a: 2,
	foo: foo,
};
obj.foo(); // 2

// Implicit Lost
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2,
	foo: foo,
};
var bar = obj.foo; // function reference/alias!

function foo() {
	console.log(this.a);
}
function doFoo(fn) {
	// `fn` is just another reference to `foo`
	fn(); // <-- call-site!
}
var obj = {
	a: 2,
	foo: foo,
};
var a = "oops, global"; // `a` also property on global object
doFoo(obj.foo); // "oops, global"

// Explicit Binding
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2,
};
foo.call(obj); // 2
