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

                
