# Lectures
 
## Table of Contents
- [1. Introduction & Functions](#1-introduction--functions)
  - [Canvas](#canvas)
  - [Key Events](#key-events)
  - [Game Loop](#game-loop)
  - [Fundamentals of Lambda Calculus & Functional Programming](#fundamentals-of-lambda-calculus--functional-programming)
  - [Example: Function Composition](#example-function-composition)
- [2. Lambda Calculus](#2-lambda-calculus)
  - [JavaScript Variables](#javascript-variables)
  - [IIFE (Immediately Invoked Function Expression)](#iife-immediately-invoked-function-expression)
  - [Alpha Translation](#alpha-translation)
  - [Beta Reduction](#beta-reduction)
  - [Eta Reduction](#eta-reduction)
  - [Examples](#examples)
 
---
 
## 1. Introduction & Functions
 
> "You only understand what you can build by yourself => use no dependencies"
 
### Canvas
 
```javascript
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
 
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);
```
 
### Key Events
 
```javascript
const rightArrow = 39;
const leftArrow = 37;
window.onkeydown = evt => {
    (evt.keyCode === rightArrow) ? … : … ;
};
```
 
### Game Loop
 
```javascript
setInterval(() => {
    nextBoard();
    display(context);
}, 1000 / 5);
```
 
### Fundamentals of Lambda Calculus & Functional Programming
 
[Watch the Video](https://www.youtube.com/watch?v=3VQ382QG-y4)
 
### Example: Function Composition
 
A function `plus` that returns the sum of its arguments:
 
```javascript
const plus = x => y => x + y;
```
 
---
 
## 2. Lambda Calculus
 
### JavaScript Variables
 
Only use `let` and `const`:
 
```javascript
let x = ...;    // mutable, local scope
const x = ...;  // immutable, local scope
```
 
### IIFE (Immediately Invoked Function Expression)
 
```javascript
(function foo() {..}) ();
(() => {..}) ();
```
 
### Alpha Translation
 
```javascript
const id = x => x;
const id = y => y;
```
 
### Beta Reduction
 
```javascript
( f => x => f(x) ) (id) (1)
( x => id(x) ) (1)
( id(1) )
(x => x) (1)
1
```
 
### Eta Reduction
 
```javascript
x => y => plus (x) (y)
x => plus (x)
plus
```
 
---
 