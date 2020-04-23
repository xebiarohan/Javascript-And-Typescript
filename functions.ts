function print(): void {
    console.log("Hello world");
}


function sum(num1: number, num2: number): number {
    return num1+ num2;
}            
let combiner: Function;
  // combiner = 10      // !!!ERROR!!!
combiner = sum;     // works fine

console.log(combiner(5,10));   // 15