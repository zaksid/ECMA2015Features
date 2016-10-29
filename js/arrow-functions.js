let add = (x, y) => x + y;
let square = x => x * x;
let answer = () => 42;

let multiply = (x, y) => {
    let result = x * y;
    return result;
};

let getPerson = () => ({
    name: 'John'
});

(() => console.log('IIFE'))();

console.log(add(2, 5));
console.log(square(3));
console.log(answer());
console.log(multiply(7, 3));
console.log(getPerson());

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach(num => sum += num);
let squared = numbers.map(n => n * n);

console.log(sum);
console.log(squared);


let Task = () => console.log('Creating task');
let task = new Task();
