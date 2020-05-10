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

#### Order of precedence
Function declarations take precedence over variable declarations
Variable assignments take precedence over function declarations

```js
var name = "Tom";

function name() {
  console.log("Harry");
}

console.log(typeof name);  // string (variable assignment take precedence)
```

```js
var name;

function name() {
  console.log("Harry");
}

console.log(typeof name);   // function (function declaration take precedence)
```

####  Hoisting Classes
Hoisting classes is same as function hoisting. It also have 2 types

Class declarations
Class exporessions

#### Class declarations
Much like their function counterparts, JavaScript class declarations are hoisted. However, they remain uninitialised until evaluation. This effectively means that you have to declare a class before you can use it.

```js
var name = fullName();
name.firstName= "Sourav";
name.lastName="Ganguly";
console.log(name);   // Reference error!!!

class fullName {
  constructor(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

So we have to declare and define class on top of code where we are using it

```js
class fullName {
  constructor(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

var name = fullName();
name.firstName= "Sourav";
name.lastName="Ganguly";
console.log(name);  // Output {firstName: "Sourav", lastName: "Ganguly"}
```
#### ClassExpression
Much like their function counterparts, class expressions are not hoisted.

```js
var name = getFullName();
name.firstName= "Sourav";
name.lastName="Ganguly";
console.log(name);   // TypeError!!! getFullName is not a constructor

var getFullName = class fullName {
  constructor(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```
  
### 2. Immutability In Javascript
We can achieve immutability with 3 different methods and of different level.

What is a object in javascript ? :
Object in javascript can be represented by an entity having different properties and behaviour/methods.
```js
let name = {
  firstName: "Virender",
  lastName: "Sehwag",
  
  getFullName() {
    return firstName + " " + lastName;
  }
}
```

#### Object.freeze()
If we pass an object in this method then we cannot add a new property, delete a property, or even update a current property.

Trying to make any changes mentioned above after an object being frozen will fail and will throw errors in strict mode.

```js
let name = {
  firstName: "Virender",
  lastName: "Sehwag",
  
  getFullName() {
    return firstName + " " + lastName;
  }
}

Object.freeze(name); 

name.middleName = "R"  // !!!ERROR!!! in strict mode
name.firstName = "Sachin" // ERROR!!! in strict mode
```
Object.isFrozen() is an Object method to check if an object is frozen by passing the object as the argument.
```js
Object.isFrozen()
```

#### Object.seal()
This methods seals the the current object properties and methods. We cannot add any new properties and methods but we can
change the current properties and methods.

These sealed object properties cannot be deleted.

```js
let name = {
  firstName: "Virender",
  lastName: "Sehwag",
  
  getFullName() {
    return firstName + " " + lastName;
  }
}

Object.seal(name);

name.middleName = "R"   // ERROR!!! in strict mode
name.firstName = "Sachin"  // Works!!!
```
Object.isSealed() is an Object method to check if an object is sealed by passing the object as the argument.

```js
Object.isSealed(namme)
```

#### Object.preventExtension()
This is similar to Object.seal() in terms that in this also we cannot add any new property or method but we can change the 
existing once. 

The difference between Object.seal() and Object.preventExtension() is that in preventExtesion() we can delete the current
properties.

Object.isExtensible() is an Object method to check if an object is extensible by passing the object as the argument.

```js
Object.isExtensible(name)
```

### 3.Closure
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

Scope includes 
Inner function properties
Outer function properties(enclosing function)
global properties.

Lets check it with an example

```js
function getAddTenFunction() {
const b = 10;

function add(a){
  return (a + b);
}

return add;
}
```
Here we have 2 functions getAddTenFunction() and add(). 
The variables in scope chain of 1st function is only b (as there is no outer function and global variable).
The variables in scope chain of 2nd function is a and b. (b is in outer function).

These is one more property of javascript that Once a function completes its execution, any variables that were defined inside the function scope cease to exist or in other words we cannot access them.

So I call the outer function in our example

```js
let addFn = getAddTenFunction();
```

It will return the inner function and the execution of outer function is completed and all the properties off
outer function is no more exist.

Now we call the inner function.

```js
const value1 = addFn(20);
```
As here we are adding a and b. a is provided as in parameter but b, we just said that the all the properties 
of a function no more exist after its execution gets completed. So from where we will get the value of b.

The inner function can access the variables of the enclosing function due to CLOSURE in JavaScript. In other words, the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function’s variables.

we can check this scope chain in console by 
```js
console.dir(addFn)    (inner function)


addFn(a)
length: 1
name: "addFn"
arguments: null
caller: null
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: VM680:4
[[Scopes]]: Scopes[3]
0: Closure (getAddtwentyFunction)
b: 20
1: Script {u: undefined, a: ƒ}
2: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

```

Closure with global variable

Simplest example

```js
let name = "alpha";

function printName() {
  console.log(name);
}

printName();   // alpha
```

As global variable name is in scope chain of printName function So we can acccess the name property which is defined
in global scope.
It will always gives us the latest value like :

```js
let name = "Max";

function printName() {
  console.log(name);
}
name = "Peter"
printName();   // Peter

name = "Alex"
printName();   // Peter

```

If we create 2 instance of inner function like

```js
function getAddTenFunction() {
const b = 10;

function add(a){
  return (a + b);
}

return add;
}
let addFn1 = getAddTenFunction();
let addFn2 = getAddTenFunction();
```

These 2 functions addFn1 and addFn2 will have seperate scope chain. Change in 1 chain wont reflect in second one.

Example :

```js
function outer() {
var b = 10;
var c = 100;
   function inner() {
        
         var a = 20; 
         console.log("a= " + a + " b= " + b);
         a++;
         b++;
    }
   return inner;
}
var X = outer();  // outer() invoked the first time
var Y = outer();  // outer() invoked the second time

X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time
```

result will be

```js
a=20 b=10
a=20 b=11
a=20 b=12
a=20 b=10
```
