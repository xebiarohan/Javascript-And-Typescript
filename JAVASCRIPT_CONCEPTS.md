# Javascript Concepts



### 1. Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
All variable and function declarations are hoisted to the top of their scope

However, in contrast, undeclared variables do not exist until code assigning them is executed. Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. This means that, all undeclared variables are global variables.

```js
function hoist() {
  a = 20;
  var b = 100;
}

console.log(a)   // error a is not defined

hoist();

console.log(a)   // 20   a becomes global variable
console.log(b)   // error a is not defined (it is defined in hoist method scope not global)
```

#### Difference between var, let and const
All the types var, let and const get hoisted but there is a difference in the default value with which they get
hoisted like in var they get hoisted with undefined value but in case of let and const they dont initialize with any
value.

```js
console.log(x);  // undefined
var x = 10;
```

It will give undefined because only the declaration is hoisted not the initialization. So it will be interpreted as :

```js
var x;
console.log(x);
x  = 10;
```
Same behaviour of var is in functional scope also.
```js
function getName() {
console.log(name);  
var name = "Max";
}

getName();   // undefined
```
To avoid this we can declare and define the variable before using it
```js
function getName() {
var name = "Max";
console.log(name);
}

getName();  // Max
```

As we know in case of let the default value is not there so we cannot access the variable before the engine evaluates
it value. 

```js
console.log(age);   // Output: ReferenceError: age is not defined ...
let age = 25;
```
So the engine binds the value to the variable where it is actually declated. So if we write code like this

```js
let age;
console.log(age);    // undefined
age = 25;
```

In this case undefined is printed because as in line 1 we are declaring the variable So we are binding the variable
with the value and default value is undefined.

In case of const. Much like the let keyword, instead of silently exiting with an undefined, the interpreter saves us by explicitly throwing a Reference error.

```js
console.log(age);  // Output: ReferenceError: age is not defined ...
const age = 25;
```

We have to declate and define the const variable togather. we cannot seperately so that.
```js
const age;  // Missing initializer in const declaration
```

#### Hoisting Functions
Function can de classified into 2 parts in terms of hoisting : 

Function declaration
Function expression

#### Function declaration
In this function is defined without a new variable like 

```js
function print(var name) {
  console.log(name);
}
```
In case of function declaration whole function gets hoisted for example :

```js
print("Alax");  // Alax

function print(var name) {
  console.log(name);
}
```

#### Functional expression
In this function is assigned to a new variable
``` js
let printFn = function(var name) {
  console.log(name);
}
```
In this case only the variable is hoisted not the whole function

```js
printFn();   //Output: "printFn: expression is not a function

let printFn = function(var name) {
  console.log(name);
}
```

printFn is initialized with undefined , its not a function when we are invoking it thats why we get this error.


