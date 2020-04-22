
enum Role {
    SOFTWARE_ENGINEER, SCRUM_MASTER, MANAGER
}



let obj2: {
    name: String;
    age: number;
    departmentDetails: [string, string];   // tuple
    role: Role.SOFTWARE_ENGINEER;           // enum
    details: any;                           // any
};


obj2.name = "Alice";
obj2.age = 25;
obj2.departmentDetails = ["technical", "senior software engineer"];
obj2.details = null;


