# ECMA2015Features

### Сontent
* [let](#let)
* [const](#const)
* [Spread operator](#spread)
* [Template strings](#template)
* [Multi-line strings](#multiline)
* [Function parameters](#funcparam)
* [for...of](#forof)
* [Arrow functions](#arrow)
* [Destructuring Assignment](#destruction)
  * [Array destructing](#arraydestruction)
  * [Object destructing](#objectdestructing)

##let <a href="let"></a>

##const <a href="const"></a>

##Spread operator (оператор разворота) <a href="spread"></a>
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
Math.max.apply(Math, [2, 100, 1, 6, 43]) // 100
```
ES6
```javascript
Math.max(...[2, 100, 1, 6, 43]) // 100
```

##Template strings (literals) <a href="template"></a>
Template literals are enclosed by the back-tick ``` ` ` ```

Consider `name` is variable
```javascript
`Hello ${name}`
```
You can make calculations inside template string
```javascript
`${parseInt(x) + parseInt(y)}`
```

##Multi-line strings <a href="multiline"></a>
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

##Function parameters <a href="funcparam"></a>
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

##for...of <a href="forof"></a>

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

##Arrow functions <a href="arrow"></a>

**Стрелка должна идти сразу после параметров, на той же строке.**
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

##Destructuring Assignment (Деструктивное присваивание) <a href="destruction"></a>
###Array destructing <a href="arraydestruction"></a>
```javascript
let languages = ['JS', 'PHP', 'Python', 'Ruby'];
let [js, php, py, rb] = languages;
```
or
```javascript
let [js, php, py, rb] = ['JS', 'PHP', 'Python', 'Ruby'];
```
####Пропустить значение
```javascript
let scores = [3, 4, 5];
let [low, , high] = scores;
```
```> 3 5```
####Присвоить остаток массива
```javascript
let scores = [3, 4, 5, 6, 7];
let [low, , high, ...rest] = scores;

console.log(low, high, rest);
```
```> 3 5 [6, 7]```
####Использовать параметры по умолчанию
```javascript
let scores = [3, 4, 7];
let [low, mid, high = 5, upper = 9] = scores;
```
```> 3 4 7 9```
####Если содержит вложенный массив
```javascript
let scores = [3, 4, [5, 6]];
let [low, mid, high] = scores;

console.log(low, mid, high);
```
```> 3 4 [5, 6]```

Вытащить значения из сложенного массива:
```javascript
let scores = [3, 4, [5, 6]];
let [low, mid, [high, higher]] = scores;

console.log(low, mid, high, higher);
```
```> 3 4 5 6```
####As function params
```javascript
function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3, 4]);
```
####As a returned value from function
```javascript
function getScores() {
    return [3, 4, 5];
}

let [rLow, rMid, rHigh] = getScores();
console.log(rLow, rMid, rHigh);
```
####Swap values
```javascript
let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
```

###Object destructing <a href="objectdestructing"></a>

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let {firstName, lastName, age = 25} = person;
```
**Имена переменных должны совпадать с именами свойств объекта. Иначе:**
```javascript
let {firstName: first, lastName: last} = person;
```
####As a returned value from function
```javascript
function getUserInfo() {
    return  {
        firstName: 'John',
        lastName: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    };
}

let {firstName: fname, lastName: lname, social: { twitter } } = getUserInfo();
console.log(fname, lname, twitter);
```
```> John Doe jdoe```


Object spread only includes own, enumerable properties. That means you lose methods when you spread instances of an object.
