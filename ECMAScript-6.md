## ECMAScript6 -ECMAScript 2015
Its the protocol on which Javascript works. So we can say its javascript version.

#### Features introduced in EC6

#### let keyword
The let statement allows us to declare a variable with block scope and we cannot redeclare the same
object in the same scope
```js
var x = 10;
{
        let x = 2;
        let x = 4;   // ERROR  (cant redeclare)
        x = 5;       // works fine
        // In this block x is equal to 5
}
// here x is 10
```

#### const keyword
The const statement is same as let , the only difference is its value cant be changed.
They also have block scope.
```js
var x = 10;
{
        const x = 2;
        // In this block x is equal to 2
        x = 4;    // ERROR
}
// here x is 10
```

####  Arrow Functions
Arrow functions changed the way we write a function        
```js
//In Javascript 5
var x = function add(num1,num2) {
        return num1 + num2;
}

// In Javascript6 or ES6
const y = (num1,num2) => num1+ num2;
```
or if we have multiple lines of code to evaluate then we can wrap it in curly brackets and can
return the result.
```js
const z = (num1,num2) => {
        console.log(num1 + " " + num2);
        return num1*num2;
}
```
Some properties of Arrow functions
They dont have there own `this`.
Arrow function are not hoisted. They must be defined before use.
Always use const to define them because there defination are not going to change.

#### Classes in Javascript
ES6 introduced classes.

A class is a type of function but instead of using function keyword we use class keyword to declare
them and properties are assigned inside constructor.

The constructor method is called always when class object is initialized
```js
class Person {
        let personName;
        constructor(personName) {
                this.personName = personName;
        }

        let getName = () => personName;
}

let person1 = new Person("Alice");
person1.getName();       // Alice
```

#### Default parameter values
In ES6 we can allow function parameter to have default parameter value.
```js
const mult = (x,y = 10) => x*y;

mult(5);   // 50
```

#### Array.find()
This method is used to find the value from an array as per the condition passed as a parameter to
it. It will return the first value which satisfies the condition.
```js
let numbers = [1,2,3,4,5];
numbers.find(x => x >2);   // It will return 3
```

####  Array.findIndex()     
Its same as the Array.find(), the only difference is it will return the index of the value which
satisfies function condition.
```js
let numbers = [1,2,3,4,5];
numbers.findIndex(x => x >2)   // It will return 2 (index)
```

#### Added new Number properties
```js
Number.EPSILON    //2.220446049250313e-16
Number.MIN_SAFE_INTEGER   //-9007199254740991
Number.MAX_SAFE_INTEGER   //9007199254740991
```

#### Number.isInteger()
It is used to check it a value is integer or not
```js
Number.isInteger(10)   // true
Number.isInteger(10.5) // false
```        

#### Number.isSafeInteger()
A safe integer is an integer that can be exactly represented as a double precision number.
```js
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false
```

#### isFinite()
Is is used to check if a number is finite or not
It will return false if value is Infinite or NaN otherwise true.
```js
isFinite(10/1)    // finite
isFinite(10.0)    // false
isFinite("alpha") // true
```

#### isNaN()
It will return true when the value is not a number else return false
```js
isNaN()    // true
isNaN("")  // false
isNaN("alpha")  // true
isNaN(1)    // false
isNaN(1.1)  // false
isNaN(true)  //false
```

#### Exponential Operator
The exponentiation operator (**) raises the first operand to the power of the second operand.
previously we have to use Math.pow() function like
```js  
Math.pow(5,2)    //25
Now

let x = 5**2;    // 25
```

#### Object.is()

This method is used to compare 2 values are equal or not. This method is slightly different from === in that id we compare -0 with 0,

```js
 -0 === 0   // true
 Object.is(-0,0)   // false
````

Similarly in case of NaN

```js
console.log(NaN === NaN);  // false
console.log(Object.is(NaN,NaN))  // true
```

#### Default parameter
We can define the default value in function parameter. So if we dont pass any parameter value we can use the default value
example :
Here we have 2 functions 1 with default value and other without default value.
```js
const sum = (a=0,b=0,c = 0) => {
   return a+b+c;
}

const add = (a,b,c) => {
   return a+b+c;
}

sum(1,2);   // 3

add(1,2);   // NaN

```

In first function we have default value of c, So we got the result. In second function we have to provide all the parameter value otherwise it will return NaN 
