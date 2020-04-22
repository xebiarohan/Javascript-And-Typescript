
# Typescript

Typescript is a superset of javascript. Typescript compiles to give javascript file, which gets executed in browser.
As browser dont support typescript directly

Installing typescript in your system

            npm install -g typescript

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

            
