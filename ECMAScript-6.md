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

#### String Interpolation
String interpolation is used to add dynamic string value in constant string.
Till ES5 we used to write code like :

```js
const name ={firstName: 'Harbajan', lastName: 'singh'}

let heading = "Indian best spinner name is " + name.firstName + " " + name.lastName;
```

Now in ES6

```js
`Indian best spinner name is ${name.firstName} ${name.lastName}`
```

#### String Repeating
If we want to create a string by repeating some specific string then we can use this method.

```js
('ABC').repeat(4);    // "ABCABCABCABC"
```


#### Spread operator
Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in variable array where there is more than 1 values are expected

```js
const arr = [1,2,3,4,5];
console.log(...arr);  // 1 2 3 4 5

console.log(arr);  // (5) [1, 2, 3, 4, 5]
```
Here we can see the difference between printing array and printing values. Here we are printing array values using spread operator.

Merging array using spread operator
```js
const arr1 = [1,2,3];
const arr2 = [4,5];
const arr = [...arr1,...arr2];   // [1,2,3,4,5]
```
converting char array from string

```js
const name = "Yuvraj";
const chars = [...name];   //(6) ["Y","u","v","r","a","j"];
```

#### Destructuring Assignment
This makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
let arr = [1,2,3,4,5];;

const [a,b,c,d,e] = arr;
console.log(a);  //1
console.log(b);  //2
console.log(c);  //3
console.log(d);  //4
console.log(e);  //5

```
Its not important to give vabiables equal to the array size. We can give lesser variables also like :

```js
let arr = [1,2,3,4,5];

const [a,b] = arr;
console.log(a);  //1
console.log(b);  //2
```
Similarly we have it in Object 

```js
let obj = {firstName: 'Kapil', lastName: 'Dev'};

let {firstName:name} = obj;

console.log(name)   // Kapil
```

## ECMAScript7 -ECMAScript 2016

ES7 is much smaller release than ES6. It has only 2 new changes

#### Array.prototype.includes

Till ES6 to check the presence of an element in an array, we have to do some boilerplace code using indexOf method. indexOf returns the position of element present in an array. But we wanted a boolean value. So, we have to do some extra checks to convert it into boolean.


```js
let fruits = ['apple','mango','pineapple'];
// wrong implenentation
if(fruits.indexOf('aaple')) {
        console.log('Available');
}

```

First we see why index of is not a perfect implementation. In the abovemple we can see we are trying to find an element in an array, which is present at 0th position. So, indexOf will return 0 and in if condition 0 turns into false. So even if the value is present we have to add some extra checks.

So we have to do something like:
```js
let fruits = ['apple','mango','pineapple'];
// till ES6 
if(fruits.indexOf('aaple') !==1)
        console.log('Available');
}

```

Now we have a very simple method in ES7. where we need not add these extra checks

```js
let fruits = ['apple','mango','pineapple'];
// ES7
if(fruits.includes('apple'))
        console.log('Available');
}

```

includes method returns boolean. So no need to do extra checks.

#### Exponentiation Operator
This operator is mostly used in doing Maths and some calculations. Till ES6 we use to use Math.pow() function or sometimes write our own boilerplate code to get a simple exponential functionality. 

```js
Math.pow(2,3);    //8

```
In ES7 they gave a very simple and shorter syntax to acheive the same thing.

```js
2**3   //8
```
