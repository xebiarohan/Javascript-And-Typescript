let studentName: unknown;
studentName = 1;    // Works
studentName = "alpha"  // works

let firstName: string;
// firstName = studentName    // !!! ERROR!!! because both have different types

if(typeof studentName === "string") {
      firstName = studentName;    // works
}


function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}