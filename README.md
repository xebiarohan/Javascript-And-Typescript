# Javascript
Javscript functions

### Numbers in Javascript
JavaScript has only one type of number. Numbers can be written with or without decimals.

    let x = 10; 
    const y = 20;

Javascript numbers are always 64-bit floating point.

#### Precision in numbers
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
 
    let x = 999999999999999;
    console.log(x);            //999999999999999
    let y = 9999999999999999;
    console.log(y)            //10000000000000000
    
The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:

    let x = 0.1 + 0.2;                      //0.30000000000000004
    
To solve the problem above, it helps to multiply and divide:

    let y = (0.1*10 + 0.2*10)/10      //0.3
    
#### Numeric operations    
The '+' operator is used for both adding and concatination So :

    let a = 5;                 // number
    let b = 10;
    cosole.log(a+b)            // 15
    
    let m = "5";               //string
    let n = "10";              
    cosole.log(a+b)            // 510
  
If you add a number and a string, the result will be a string concatenation:
    
    console.log(a + m)        // 55

if  we add 2 numbers and a string , So the first 2 numbers will get added and then gets concatinated with string.
The JavaScript interpreter works from left to right.
    console.log(a + b + m)     // 155
  
In other numeric operations javascript will try to convert value to number like
    
    let x = "10";
    let y = "100";
    console.log(y/x);           // 10
  
    console.log(y - x)          // 90
    
    console.log(y*x)            // 1000
  
#### NaN : Not a number
NaN is a JavaScript reserved word indicating that a value is not a legal number.

Trying to do arthmetic operations with NaN results in NaN
    
    console.log(10/"alpha");             // NaN
  
    console.log(NaN + 10);               // NaN
    
    console.log(NaN + "10")              //NaN10
    
NaN is a number: typeof NaN returns number
  
      typeof NaN         // number
      
#### Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number


    console.log(10/0);             //Ininity

Infinity is a number
    
    typeof Infinity      // number

#### Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x

    let x - 0xFF          // 255
  
#### Numbers as Object

    let x = 10;
    let y = new Number(10);
    let z = new Number(10);
    
    x == y         // true
    x === y        // false
    y ==z          // false object cannot be compared
    
    typeof x       // number
    typeOf y       //object
    
JavaScript treats primitive values as objects when executing methods and properties

#### toString()
        
        (10).toString();          // "10";
        (10 + 3).toString();      /// "13"
        
#### toExponential()       
returns a string, with a number rounded and written using exponential notation.

        var x = 9.656;
        x.toExponential(2);     // returns 9.66e+0
        x.toExponential(4);     // returns 9.6560e+0
        x.toExponential(6);     // returns 9.656000e+0
        
#### toFixed()
returns a string, with the number written with a specified number of decimals:

        let x = 9.962;
        x.toFixed(1)        // "10.0"
        x.toFixed(2)        // "9.96"
        x.fixed(3)          // "9.962"
it round off the value and can be used to work with money

#### toPrecision()
toPrecision() returns a string, with a number written with a specified length:

        let x = 9.656;
        x.toPrecision();        // returns "9.656"
        x.toPrecision(2);       // returns "9.7"
        x.toPrecision(4);       // returns "9.656"
        x.toPrecision(6);       // returns "9.65600"
        
Difference between toFIxed() and toPrecision is that toFixed consider only the decimal numbers and toPrecision consider
all numbers.

#### valueOf()
valueOf is used to check the value of the number object

        let x = new Number(10);
        x.valueOf()           // 10   

We can use valueOf to compare 2 Objects or Object with primitive value.

#### converting variable to number
#### Number()

        Number(true)      // 1
        Number(false)     //0
        Number(1)         // 1
        Number(10.0)      // 10
        Number()          // 0
        Number("10")      //10
        Number("10.33")   // 10.33
        Number("alpha")   //NaN
        Number(new Date("2017-09-30"));        //1506729600000  (milliseconds)
        
#### parseInt()     
It will return only the integer value, will ignore the decimal value if present

        parseInt()          //NaN
        parseInt("10.33")  //NaN
        parseInt(-10)      // -10
        parseInt("10 20 30");   // returns 10
        parseInt("10 years");   // returns 10
        parseInt("years 10");   // returns NaN 
  
#### parseFloat()
It will return the float value, spaces are allowed and it will only return the first value

        parseFloat("10");        // returns 10
        parseFloat("10.33");     // returns 10.33
        parseFloat("10 20 30");  // returns 10
        parseFloat("10 years");  // returns 10
        parseFloat("years 10");  // returns NaN
        
#### Properties of Number

        Number.MAX_VALUE	Returns the largest number possible in JavaScript(1.7976931348623157e+308)
        Number.MIN_VALUE	Returns the smallest number possible in JavaScript (5e-324)
        Number.POSITIVE_INFINITY	Represents infinity (returned on overflow) (Infinity)
        Number.NEGATIVE_INFINITY	Represents negative infinity (returned on overflow) (-Infinity)
        Number.NaN	Represents a "Not-a-Number" value (NaN)
        Number.MIN_SAFE_INTEGER    (-9007199254740991)
        Number.MAX_SAFE_INTEGER    (9007199254740991)
    
Number properties cannot be used on variables
       
        let minValue = x.MIN_VALUE     // undefined 
        let minValue = Number.MIN_VAVLUE   // 5e-324
        
        
        
