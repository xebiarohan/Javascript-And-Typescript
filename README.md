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
    
    x == y         // true
    x === y        // false
    
    typeof x       // number
    typeOf y       //object
    
  
  
