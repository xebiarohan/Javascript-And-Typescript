# Javascript
Javscript functions

### Numbers in Javascript
JavaScript has only one type of number. Numbers can be written with or without decimals.
```js
    let x = 10; 
    const y = 20.0;
```    

Javascript numbers are always 64-bit floating point.

#### Precision in numbers
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
```js
    let x = 999999999999999;
    console.log(x);            //999999999999999
    let y = 9999999999999999;
    console.log(y)            //10000000000000000
```
The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
```js
    let x = 0.1 + 0.2;                      //0.30000000000000004
```    
To solve the problem above, it helps to multiply and divide:
```js
    let y = (0.1*10 + 0.2*10)/10      //0.3
```    
#### Numeric operations    
The '+' operator is used for both adding and concatination So :
```js
    let a = 5;                 // number
    let b = 10;
    cosole.log(a+b)            // 15
    
    let m = "5";               //string
    let n = "10";              
    cosole.log(a+b)            // 510
```  
If you add a number and a string, the result will be a string concatenation:
```js    
    console.log(a + m)        // 55
```
if  we add 2 numbers and a string , So the first 2 numbers will get added and then gets concatinated with string.
The JavaScript interpreter works from left to right.
```js
    console.log(a + b + m)     // 155
```  
In other numeric operations javascript will try to convert value to number like
```js    
    let x = "10";
    let y = "100";
    console.log(y/x);           // 10
  
    console.log(y - x)          // 90
    
    console.log(y*x)            // 1000
```  
#### NaN : Not a number
NaN is a JavaScript reserved word indicating that a value is not a legal number.

Trying to do arthmetic operations with NaN results in NaN
```js    
    console.log(10/"alpha");             // NaN
  
    console.log(NaN + 10);               // NaN
    
    console.log(NaN + "10")              //NaN10
```    
NaN is a number: typeof NaN returns number
```js  
      typeof NaN         // number
```      
      
#### Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number
```js
    console.log(10/0);             //Ininity
```    

Infinity is a number
```js
    typeof Infinity      // number
```

#### Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x
```js
    let x = 0xFF          // 255
```

#### Numbers as Object
```js
    let x = 10;
    let y = new Number(10);
    let z = new Number(10);
    
    x == y         // true
    x === y        // false
    y ==z          // false object cannot be compared
    
    typeof x       // number
    typeof y       //object
```    
    
JavaScript treats primitive values as objects when executing methods and properties

#### toString()
```js        
        (10).toString();          // "10";
        (10 + 3).toString();      /// "13"
```

#### toExponential()       
returns a string, with a number rounded and written using exponential notation.
```js
        var x = 9.656;
        x.toExponential(2);     // returns 9.66e+0
        x.toExponential(4);     // returns 9.6560e+0
        x.toExponential(6);     // returns 9.656000e+0
```        
        
#### toFixed()
returns a string, with the number written with a specified number of decimals:
```js
        let x = 9.962;
        x.toFixed()         // "10"
        x.toFixed(1)        // "10.0"
        x.toFixed(2)        // "9.96"
        x.fixed(3)          // "9.962"
```        
it round off the value and can be used to work with money

#### toPrecision()
toPrecision() returns a string, with a number written with a specified length:
```js
        let x = 9.656;
        x.toPrecision();        // returns "9.656"
        x.toPrecision(2);       // returns "9.7"
        x.toPrecision(4);       // returns "9.656"
        x.toPrecision(6);       // returns "9.65600"
```        
        
Difference between toFIxed() and toPrecision is that toFixed consider only the decimal numbers and toPrecision consider all numbers. In toFixed if we dont pass any number ot will return the closest
integer value and toPrecision will return the exact value.

#### valueOf()
valueOf is used to check the value of the number object
```js
        let x = new Number(10);
        x.valueOf()           // 10   
```

We can use valueOf to compare 2 Objects or Object with primitive value.

#### converting variable to number
#### Number()
```js
        Number(true)      // 1
        Number(false)     //0
        Number(1)         // 1
        Number(10.0)      // 10
        Number()          // 0
        Number("10")      //10
        Number("10.33")   // 10.33
        Number("alpha")   //NaN
        Number(new Date("2017-09-30"));        //1506729600000  (milliseconds)
```

#### parseInt()     
It will return only the integer value, will ignore the decimal value if present
```js
        parseInt()          //NaN
        parseInt("10.33")  //10
        parseInt(-10)      // -10
        parseInt("10 20 30");   // returns 10
        parseInt("10 years");   // returns 10
        parseInt("years 10");   // returns NaN 
```        
  
#### parseFloat()
It will return the float value, spaces are allowed and it will only return the first value
```js
        parseFloat("10");        // returns 10
        parseFloat("10.33");     // returns 10.33
        parseFloat("10 20 30");  // returns 10
        parseFloat("10 years");  // returns 10
        parseFloat("years 10");  // returns NaN
```
        
#### Properties of Number

```js
        Number.MAX_VALUE	Returns the largest number possible in JavaScript(1.7976931348623157e+308)
        Number.MIN_VALUE	Returns the smallest number possible in JavaScript (5e-324)
        Number.POSITIVE_INFINITY	Represents infinity (returned on overflow) (Infinity)
        Number.NEGATIVE_INFINITY	Represents negative infinity (returned on overflow) (-Infinity)
        Number.NaN	Represents a "Not-a-Number" value (NaN)
        Number.MIN_SAFE_INTEGER    (-9007199254740991)
        Number.MAX_SAFE_INTEGER    (9007199254740991)
```

Number properties cannot be used on variables
```js       
        let minValue = x.MIN_VALUE     // undefined 
        let minValue = Number.MIN_VAVLUE   // 5e-324
```        
        

## String in Javascript

We can declare string in single as well as double quotes
        
        let a = "alpha"
        let b = 'alpha'
       
#### Escape Character      

We can use different quotes in string as long as they are not used to declate string

        a = "he isn't going there"

or if we want to use the same quote then we have to use escape chanracter

       b = 'he isn\'t going there"
       
Other Escape characteers 

        \'	'	Single quote
        \"	"	Double quote
        \\	\	Backslash
        
#### String length
using length property we can check the length of string

        let x = "alpha"
        x.length         // 5
        
#### String as Object
String can be of primitive type as well as object

        let x = "alpha";
        let y = new String("alpha");
        let z = new String("alpha");
value of two object cannot be compared directly
        
        y ==z   // false
        x == y  // true
        x ===z   // false
        x === y.valueOf()   // true


### String Methods

#### indexOf()
Founding a string in a string.It will return the first index number found of the matching string. index starts from 0. 
indexOf("") will always be 0.

        let x = "Please locate where 'locate' occurs!";
        x.indexOf()            // -1
        x.indexOf("")         // 0
        x.indexOf("l")        // 1
        x.indexOf("locate")   // 7

#### lastIndexOf()
It is reverse of indexOf(). It will return the last occurance of the string.In this search starts from backwards.

        x.lastIndexOf()    // -1
        x.lastIndexOf()    // 36 (equal to the length of the string)
        x.lastIndexOf("locate") //21
        x.lastIndexOf("loca")   //21
 
both accepts a second parameter to tell optionally from which character to start search

        x.indexOf("loca",10);        //21
        x.lastIndexOf("loca",10);    // 7
        
#### search()
It also takes the string to search and will return the first occurance of that string. It is differet from indexOf()
in the way that it doesnot takes the second argument.

        x.search("locate")   //21
        x.search()           // 0   (-1 in case of indexOf())
        x.search("")         // 0 
        x.search("qas")      // -1

#### Extracting string parts
#### slice()
It is used to extract a part of the string. It takes 2 arguments, first the starting index and second the ending index
(end index not included).
If we dont pass the second argument, it will take the length of the string as default value.

        let x = "Please locate where 'locate' occurs!";
        x.slice(1,5);     //"leas"
        x.slice(0,0);     // ""
        x.slice();         //"Please locate where 'locate' occurs!"
        x.slice(0);        //"Please locate where 'locate' occurs!"
        x.slice(1);        // "lease locate where 'locate' occurs!"
   
If we pass negative value then it will count the position from the end of the string.

        x.slice(-1)     // "!"
        x.slice(-16, -6)   //"'locate' o"
   
#### substring()
Its similar to the slice() method, the only difference is this method cannot accept negative indexes.
If we pass negative values it will behave as 0 is passed

        x.substring();         //"Please locate where 'locate' occurs!"
        x.substring(0);        //"Please locate where 'locate' occurs!"
        x.substring(1);        // "lease locate where 'locate' occurs!"
        x.substring(-1);       // "Please locate where 'locate' occurs!"
        x.substring(-100);     // "Please locate where 'locate' occurs!"

#### substr()
This method takes length as the second parameter. If we pass negative value to it, it will search from the end
of the string.

        x.substr(2,10)    //"ease locat"
        x.substr()        // "Please locate where 'locate' occurs!"
        x.substr(0)       // "Please locate where 'locate' occurs!"
        x.substr(1)       // "lease locate where 'locate' occurs!"
        x.substr(-1)      // "!"
        x.substr(-3,1)    // "r"
        
#### replace()
This method replaces a value with a new one in given string. Replace is case sensitive.

        let str = "My name is Bob";
        str.replace("Bob","Alice");    // "My name is Alice"
        str.replace("ALICE", "Mark");  // My name is Alice (case-sensitive)
        
To replace all matched string use (/ /g)

        str = "Please visit India and India!";
        var n = str.replace(/India/g, "Delhi");   // Please visit Delhi and Delhi


#### toUppercase()
It is used to convert string into uppercase
    
        let x = "bob";
        x = x.toUppercase()   // BOB
        
#### toLowercase()
It is used to convert string into lowercase

        let y= "ALICE";
        y = y.toLowercsae();     // alice
        
#### concat()
It is used to merge strings. It takes 2 parameter. 1st one(optional) is the delimiter and 2nd is the string which we want
to concat.
    
    let x = "My name is";
    let y = "Bob";
    x.concat(y);         // My name isBob;
    x.concat(" ",y)      /// My name is Bob

#### trim()
It is used to trim the whitespaces from both the ends of the string.

    let x = "    Bob    ";
    x = x.trim();     // "Bob"
    
####  charAt()
It is used to extract a single character at a particular index.

    let x = "My name is Bob";
    x.charAt()     // returns the first character
    x.charAt(5)    // "a"

#### charCodeAt()
it is used to get the unicode at a particular index.

    let x = "My name is Bob";
    x.charCodeAt()    // returns the charCode of 1st character 77
    x.charCodeAt(2)   // 32
    
#### split()
Is is used to convert a string into array. It takes delimiter as parameter.

    x = "My name is Bob";
    x.split()   // ["MY NAME IS BOB"]
    x.split("") // ["M", "Y", " ", "N", "A", "M", "E", " ", "I", "S", " ", "B", "O", "B"]
    x.split(" ") // ["MY", "NAME", "IS", "BOB"]

                

### Arrays in Javascript
JavaScript arrays are used to store multiple values in a single variable.

#### Creating an array

        let arr1 = [1,2,3,4];
        let arr2 = new Array("A","B","C");
        
#### Accessing the Array elements

        let names = ["Alice","Bob","Charlie"];
        const firstName = names[0];      // "Alice"
        const secondName = names[1]      // "Bob"
        
#### Changing particular element of Array

        let names = ["Alice","Bob","Charlie"];
        names[0] = "Deric";
        console.log(names)   // ["Deric", "Bob", "Charlie"]

we can dynamically increase the size of array.

        names[3] = "Peter";  
        console.log(names)     //["Deric", "Bob", "Charlie", "Peter"]
        
####  Arrays are object

        typeOf names    // "object"
        
#### Adding Element
        let numbers = [];
        numbers[0] = 1;          //[1]
        numbers.push(2);         //[1,2]
        numbers[numbers.length] = 3;   //[1,2,3]
        
#### JavaScript does not support arrays with named indexes.In JavaScript, arrays always use numbered indexes.

#### Checking if variable is an Array
        let numbers = [];
        let name = "alpha";
        Array.isArray(numbers);     // true
        Array.isArray(name);;       // false
        
        numbers instanceOf Array    // true
        name instanceOf Array       // false
        
        
### Array Methods

#### toString()
This method is used to get comma seperated string from array.

        let numbers = [1,2,3,4];
        numbers.toString();    //1,2,3,4

#### join()
This method also convert an array into string. It also takes delimiter value to seperate the
array values.

        let numbers = [1,2,3];
        numbers.join()     // 1,2,3
        numbers.join("")   // 123
        numbers.join(":")  //1:2:3

#### pop() 
This method is used to remove an element from the last of an array. It returns the popped value.

        let numbers = [1,2,3];
        numbers.pop()          // It will return 3
        console.log(numbers)   // [1,2];

#### push()
This method is used to push an element at the last of an array.It returns the length of the array
after insertion.

        let numberes = [1,2];
        numbers.push(4);   // it will return 3

#### shift()
This method is similar to the pop() method . It just works on the first element of an array.

        let numbers = [1,2,3,4];
        numbers.shift();   // It will return 1st element 1
        console.log(numbers)    // [2,3,4]

#### unshift()
This method is similar to push method. It will insert value in front of an array.

        let numbers = [2,3,4,5];
        numbers.unshift(1);   // It will return 3 the new length
         console.log(numbers)    // [1,2,3,4,5]

#### length
It is a property of array which gives the length of an array

        let numbers = [2,3,4,5];
        numbers.length    // 4

#### Delete
As an array is an object so, we can delete its elements.Its not recommended because it will
leave empty values.        

        let numbers = [1,2,3,4];
        delete numbers[0];     // true
        console.log(numbers)    // [empty,2,3,4];
  
#### splice()
This method can be used to both insert and remove elements from an array at any index.
It takes multiple arguments
1st argument is the index from which we want to start
2nd argument is the number of elements which we want to remove
and remaining are the elements which we want to add after remomving the elements.

        let numbers = [1,2,3,4];
        numbers.splice(2,1,10,12); // It will remove 3 and add 10, 12
        console.log(numbers)       // 1,2,10,12,4

We can just remove the elements also without adding new values

        numbers.spplice(0,1);   // removes the first element

#### concat()
This method is used to merge 2 or more arrays.

        let num1 = [1,2];
        let num2 = [3,4];
        let num3 = [5,6];
        const numbers = num1.concat(num2).concat(num3);

#### slice()
This method is used to create a new array by removing some elements from an array.
It takes 2 arguments
1st : the index from where we want to start (default value is 0, So optional argument)
2nd : number of elements which we want to remove from out new array.

        let numbers = [1,2,3,4,5,6];
        const newArray = numbers.slice(2) //It will create a new array by removing first 2 elements
        console.log(newArray);  // [3,4,5,6];

        const arr = numbers.slice(2,2);    // [1,2,5,6]
        console.log(numbers)    // [1,2,3,4,5,6] still remian same


#### sort()
This method is used to sort array alphabetically

        let names = ["beta","gamma","alpha"];
        numbers.sort();     // ["alpha","beta","gamma"];

        let numbers = [5,2,1,3,4];
        numbers.sort();    // [1,2,3,4,5]

we can pass custom compare method in sort as argument

        numbers.sort((a,b) => { return a -b;});

#### reverse()
This method is used to reverse the order of the array.

        let numbers = [1,2,3,4,5];
        numbers.reverse();      // [5,4,3,2,1];

        let names = ["beta","gamma","alpha"];
        names.reverse();        // ["alpha","gamma","beta"];

#### Max in an array 

        let numbers = [1,2,3,4,5];
        Math.max.apply(null,numbers)   // 5

#### Min in an array

        let numbers = [1,2,3,4,5];
        Math.min.apply(null,numbers);  //1
        


### ECMAScript6 -ECMAScript 2015
Its the protocol on which Javascript works. So we can say its javascript version.

#### Features introduced in EC6

#### let keyword
The let statement allows us to declare a variable with block scope and we cannot redeclare the same
object in the same scope

        var x = 10;
        {
                let x = 2;
                let x = 4;   // ERROR  (cant redeclare)
                x = 5;       // works fine
                // In this block x is equal to 5
        }
        // here x is 10

#### const keyword
The const statement is same as let , the only difference is its value cant be changed.
They also have block scope.

        var x = 10;
        {
                const x = 2;
                // In this block x is equal to 2
                x = 4;    // ERROR
        }
        // here x is 10

####  Arrow Functions
Arrow functions changed the way we write a function        

        //In Javascript 5
        var x = function add(num1,num2) {
                return num1 + num2;
        }

        // In Javascript6 or ES6
        const y = (num1,num2) => num1+ num2;

or if we have multiple lines of code to evaluate then we can wrap it in curly brackets and can
return the result.

        const z = (num1,num2) => {
                console.log(num1 + " " + num2);
                return num1*num2;
        }

Some properties of Arrow functions
They dont have there own `this`.
Arrow function are not hoisted. They must be defined before use.
Always use const to define them because there defination are not going to change.

#### Classes in Javascript
ES6 introduced classes.

A class is a type of function but instead of using function keyword we use class keyword to declare
them and properties are assigned inside constructor.

The constructor method is called always when class object is initialized

        class Person {
                let personName;
                constructor(personName) {
                        this.personName = personName;
                }

                let getName = () => personName;
        }

        let person1 = new Person("Alice");
        person1.getName();       // Alice

#### Default parameter values
In ES6 we can allow function parameter to have default parameter value.

        const mult = (x,y = 10) => x*y;

        mult(5);   // 50

#### Array.find()
This method is used to find the value from an array as per the condition passed as a parameter to
it. It will return the first value which satisfies the condition.

        let numbers = [1,2,3,4,5];
        numbers.find(x => x >2);   // It will return 3

####  Array.findIndex()     
Its same as the Array.find(), the only difference is it will return the index of the value which
satisfies function condition.

        let numbers = [1,2,3,4,5];
        numbers.findIndex(x => x >2)   // It will return 2 (index)

#### Added new Number properties

        Number.EPSILON    //2.220446049250313e-16
        Number.MIN_SAFE_INTEGER   //-9007199254740991
        Number.MAX_SAFE_INTEGER   //9007199254740991

#### Number.isInteger()
It is used to check it a value is integer or not

        Number.isInteger(10)   // true
        Number.isInteger(10.5) // false

#### Number.isSafeInteger()
A safe integer is an integer that can be exactly represented as a double precision number.

        Number.isSafeInteger(10);    // returns true
        Number.isSafeInteger(12345678901234567890);  // returns false

#### isFinite()
Is is used to check if a number is finite or not
It will return false if value is Infinite or NaN otherwise true.

        isFinite(10/1)    // finite
        isFinite(10.0)    // false
        isFinite("alpha") // true

#### isNaN()
It will return true when the value is not a number else return false

        isNaN()    // true
        isNaN("")  // false
        isNaN("alpha")  // true
        isNaN(1)    // false
        isNaN(1.1)  // false
        isNaN(true)  //false

#### Exponential Operator
The exponentiation operator (**) raises the first operand to the power of the second operand.
previously we have to use Math.pow() function like
  
        Math.pow(5,2)    //25
Now

        let x = 5**2;    // 25

          

