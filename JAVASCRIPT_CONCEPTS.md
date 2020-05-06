# Javascript Concepts



### Hoisting
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
