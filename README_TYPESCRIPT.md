
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

In Javascript we have 5g basic datatypes i.e.

            number   // 1,-1,1.1
            string   // 'Hi', "Hi", `Hi`
            boolean  // true false
            object   // {age:30}
            Array    //  [1,2,3,4]

