console.log("true"); // Output: "true" (string)
console.log(1 === 1); // Strict equality check, true

// Function that always returns 1
function fun1() {
  return 1;
}

console.log(fun1() === 1); // true, because fun1() returns 1
console.log(fun1(42) === 1); // true, extra argument is ignored, fun1() always returns 1

// Function overloading in JavaScript doesn't work like in some other languages.
// The second declaration replaces the first.
function fun2() {
  return 1;
}
function fun2(arg) {
  return arg;
}

// The last defined `fun2` replaces the first one,
// so `fun2()` is now expecting an argument and will return `undefined` if none is given.
console.log(fun2() !== 1); // true, because fun2() is not the original one
console.log(fun2() === undefined); // true, since no argument is passed
console.log(fun2(42) === 42); // true, as fun2 now returns the passed argument

// Function with no explicit return value (returns undefined)
function noReturn1() {
  1; // This does nothing, no return statement
}

const noReturn2 = () => {
  1; // Again, no return statement, so it returns undefined
};

const noReturn3 = () => 1; // This function returns 1 due to implicit return

console.log(noReturn1() !== 1); // true, as it returns undefined
console.log(noReturn2() !== 1); // true, as it returns undefined
console.log(noReturn3() === 1); // true, as it explicitly returns 1

// Function assignment: myfun is now a reference to fun1
const myfun = fun1;

// Array containing different function references and values
const funs = [null, undefined, fun1, fun2];

console.log(myfun() === 1); // true, myfun is fun1, which returns 1
console.log(funs[2]() === 1); // true, funs[2] is fun1

// Higher-order function: returns a new function that calls 'whatToDo'
function doit(whatToDo) {
  return function bla(arg) {
    return whatToDo(arg);
  };
}

// Arrow function alternative to 'doit'
const doit2 = (whatToDo) => (arg) => whatToDo(arg);

console.log(doit(fun1)(10) === 1); // true, doit returns a function that calls fun1
console.log(doit(fun2)(10) === 10); // true, fun2(10) returns 10

// Using doit2 to create a function that always calls fun1
const doFun2 = doit2(fun1);

console.log(doFun2(10) === 1); // true, doFun2(10) calls fun1, which always returns 1
console.log(doFun2() === 1); // true, since fun1 ignores arguments and returns 1

// Closure: 'makeIncrementor' creates a function that increments 'val' when called
const makeIncrementor = (val) => () => val++;

const incrementor = makeIncrementor(10);

console.log(incrementor() === 10); // true, but 'val' is still 10 because '++' is post-increment
console.log(incrementor() === 11); // true, 'val' gets incremented