# ECMA2015Features

##let

##const

##Spread operator (оператор разворота)
Convert array into its separate values
```javascript
functionName(...array);
```
####Copy array values
```javascript
let arrayCopyES6 = [...array];
let concatenatedArray = [...array1, ...array2, ...array3]
```
or
```javascript
var arrayCopy = [].concat(array);  // ES5 way
```
ES5
```javascript
Math.max.apply(Math, [2,100,1,6,43]) // 100
```
ES6
```javascript
Math.max(...[2,100,1,6,43]) // 100
```

##Template strings (literals)
Template literals are enclosed by the back-tick ``` ` ` ```

Consider `name` is variable
```javascript
`Hello ${name}`
```
You can make calculations inside template string
```javascript
`${parseInt(x) + parseInt(y)}`
```

##Multi-line strings
Use back-tick  ``` `` ``` for multi-line strings instead of concatenation ``` '\n' + '' ```
```javascript
const template6 =
`<li>
  <div class="view">
    <label></label>
  </div>
  <input class="edit" value="">
</li>`;
```

##Function parameters
Set default values
```javascript
function greet(greeting = 'Hello', name = 'friend') {
    ...
}
```
Iterate throught parameters
```javascript
function sum(...values) {
    let sum = 0;

    values.forEach(function(value) {
        sum += value;
    });
```
    OR
```javascript
    values.reduce(function(prevValue, currentValue) {
        return prevValue + currentValue;
    });
}
```

##for...of

[MDN for...of](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

```javascript
let array = ['one', 'two', 'three'];
array.foo = 'hello';

for (let i in array) {
   console.log(i); // prints '0', '1', '2', 'foo'
}

for (let i of array) {
   console.log(i); // prints 'one', 'two', 'three'
}
```

##Arrow functions

**Стрелка должна идти сразу после параметров, на той же строке**
####Two or more parameters - in brackets ```( )```
```javascript
let add = (x, y) => x + y;
```
####One param - without brackets ```( )```
```javascript
let square = x => x * x;
```
####Without params
```javascript
let answer = () => 42;
```
####With multiple lines - braces ```{ }```
```javascript
let multiply = (x, y) => {
    let result = x * y;
    return result;
};
```
####Returning object - use brackets ```( )```
```javascript
let getPerson = () => ({
    name: 'John'
});
```
####IIFE (immediately invoked function expression)
```javascript
(() => console.log('IIFE'))();
```
---
* В стрелочной функции значение this береться из контекста (i.e. window for setTimeout())
* Нельзя использовать как конструкторы объектов
```javascript
let Task = () => console.log('Creating task');
let task = new Task();
```
```> Uncaught TypeError: Task is not a constructor```

* Нельзя использовать методы ```bind()```, ```call()```, ```apply()```
