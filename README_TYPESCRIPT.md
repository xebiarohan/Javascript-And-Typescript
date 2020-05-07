
# Typescript

Typescript is a superset of javascript. Typescript compiles to give javascript file, which gets executed in browser.
As browser dont support typescript directly

Installing typescript in your system
```ts
npm install -g typescript
```

There is a typescript compiler which compiles typescript code to javasript

Command to compile code :
      
      tsc filename.ts
    
It will generate same name javascript file at same folder location

      filename.js
      
### DataType of Arguments in function

Typescript allow us to specify the datatype of the arguments which we are expecting in a method
for example in Javascript

            function add(num1, num2) { return num1 + num2};

but here we can pass string also, it will concat the value.
So now in  typescript :           

            function add(num1: number, num2: number) { return num1 + num2};

It will give compile time error if we try to pass string as an argument to this function

Another example
In Javascript we can declare a variable like

            let value;

Now we can put any data type value to this value variable. we cannot restrict it on compile time
In Typescript

            let value: number;

Now if we try to put anything other than number to this variable, it will give compile time error.            
      
Typescript also provides type-inference. which means if we dont provide the data type to any 
variable then it will take the datatype of the first value assigned to it like

            let key;
            key = 10;
            key = "alpha"   // this will give error because the type of key is set to number.

### Object in Javascript and Typescript            
In Javascript we can create an object and can later add the key value pair in it. There is no
way we can restrict that like :

            let person = {};
            person.name = "alpha";
            console.log(person)  // {name: "alpha"};

In Typescript we can restrict as well as can define the type of each value which we can add in our object like

            let person:  {
                  name: string,
                  age: number
            };
            person.name = 12;   //compile time error
            person.name = "Alice";
            person.age = 25;
            person.hobbies = ["singing","coding"]    // compile time error because hobbies is not  
                                                     // defined in object

### Core Types

In Javascript we have 5 basic datatypes i.e.

            number   // 1,-1,1.1
            string   // 'Hi', "Hi", `Hi`
            boolean  // true false
            object   // {age:30}
            Array    //  [1,2,3,4]

In typescript we get some new data types like :

#### Tuple
Its a fixed length and fixed data type array. 

            let tuple1: [number,string] = [12,"author"];
            let tuple2: [string] = ["alpha"];
            let tuple3 : [string,object] = ["beta", {}];

we have to decrale it using an array like structure. In that we can define how many elements we 
want and of what type.

#### Enum
Enums are used to deal with interrelated constant values.

we can define it like :

            enum Role {
                  SOFTWARE_ENGINEER, SCRUM_MASTER, MANAGER
            }

and we can use it like :

            let role = Role.SOFTWARE_ENGINEER

#### any
This data type is used when we are not sure about the datatype or we know our object can have multiple datatype values

            let arr: any[];
            arr.push(1);
            arr.push("alpha");
            arr.push({});

#### void            
It is used as a function datatype, when we dont want to return any value from a function

            function print(): void {
                  console.log("Hello world");
            }

#### Function
It is used to specify that a variable is of function type. 

            function add(num1: number, num2: number): number {
                  return num1+ num2;
            }            
            let combiner:: Function;
            combiner = 10      // !!!ERROR!!!
            combiner = add;     // works fine

            console.log(combiner(5,10));   // 15

We can be more specific like which kind of method we can assign to a variable like how many parameter it takes and what should be the return type of the method.

            let combiner: (num1: number,num2: number) => number;

#### unknown
Its also a new datatype. This is used when we are not sure about the datatype of the variable. It is little different from any in the way that we cannot use this variable anywhere like

            let name: unknown;
            name = 1;    // Works
            name = "alpha"  // works

            let firstName: string;
            firstName = name    // !!! ERROR!!! because both have different types

            if(typeof name === "string") {
                  firstName = name;    // works
            }

Its better than any because it forces used to check the type before using it anywhere.

#### never
This datatype is used for function which can never return any value like in case of 
a general exception method.

            const generalException: never = (message: string,code: number) => {
                  throw {message: message,errorCode: code};
            }



### Union Types
Union types is used when a variable can expect more than 1 data type value but defined number of data types. like a variable can have string or number in that case we use union types.

            let x: number| string;
            x = 10;   // works
            x = "alpha"  //works
            x ={}   // ERROR

### Literal types
It is used when we know exactly which all value can come in an variable. We can declare variable
with those literal types like

            let role : 'ADMIN' | 'SUPERUSER';

            role = 'ADMIN';    // works fine
            role = 'SUPERUSER' // works fine
            role = 'READONLY'  // ERROR

### Type Alias
It is used to remove redundant lengthy datatype declatations especially in case of union types.

            let x: number | string;
            let y: number | string;

Instead of writing redundant union type declaration we can create an alias like

            type combinable = number | string;
            let x = combinable;
            let y = combinable;


### Typescript compiler
Typescript compiler is used to convert the typescript file into javascript.
command to compile file.

            tsc filename.ts

We can configure different properties during compiling code like watch mode.
Watch mode means when ever we change any value and save it, It will recompile
the file.

            tsc filename.ts -w

If we have multiple ts file in our project then we have to declare it a ts project
using

            tsc --init

It will create tsconfig.json file. Now if we run tsc file then it will compile all
the typescript files which are used in index.html file.

So now we can run watch mode on all these files using

            tsc --watch  / tsc -w

### tsconfig.json
tsconfig.json files is used to configure which all files we have to compile and how to compile
those files.

We can have different properties in tsconfig like 

#### exclude
In this we can add ts files which we dont want to compile.

#### includes
In this we can define which all files we want to include for compilation. By default all the 
files which are there in index.html and are not there in exclude will get compiled.

#### files
It is similar to the includes, the only difference is that in includes we can define folders
but in files we can only define the file names.

#### compilerOptions
Compiler options are used to configure the way in which typescript file will configure it includes
different properties like

i) target : which states that in which javascript version we want after compilation.
ii) allowJs : tsc will compile js file as well
