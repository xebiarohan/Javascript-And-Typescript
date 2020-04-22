const combine = (val1: number| string, val2: number|string) => {

let result;
    if(typeof val1 === 'number' && typeof val2 === 'number') {
        result = val1 + val2;
    } else {
        result = val1.toString() + val2.toString();
    }
    return result;
}


console.log(combine(1,2));

console.log(combine("Hello ", "World"));


console.log(combine(1,"world"));