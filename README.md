# ECMA2015Features

Materials:

[CodeDojo. Основы ES6 (Youtube)](https://www.youtube.com/playlist?list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q)

[Обзор базовых возможностей ES6 (Habrahabr)](https://habrahabr.ru/post/313526/)


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
* [Objects](#objects)
* [Classes](#classes)
  * [Inheritance](#inheritance)
* [Promises](#promises)
* [Symbols](#symbols)
* [Iterators](#iterators) 

---

<a name="let"></a>
## let

<a name="const"></a>
## const


<a name="spread"></a>
## Spread operator (оператор разворота) 
Convert array into its separate values
```javascript
functionName(...array);
```
#### Copy array values
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


<a name="template"></a>
## Template strings (literals)
Template literals are enclosed by the back-tick ``` ` ` ```

Consider `name` is variable
```javascript
`Hello ${name}`
```
You can make calculations inside template string
```javascript
`${parseInt(x) + parseInt(y)}`
```

<a name="multiline"></a>
## Multi-line strings
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


<a name="funcparam"></a>
## Function parameters
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
or
```javascript
    values.reduce(function(prevValue, currentValue) {
        return prevValue + currentValue;
    });
}
```


<a name="forof"></a>
## for...of

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


<a name="arrow"></a>
## Arrow functions

**Стрелка должна идти сразу после параметров, на той же строке.**
#### Two or more parameters - in brackets ```( )```
```javascript
let add = (x, y) => x + y;
```
#### One param - without brackets ```( )```
```javascript
let square = x => x * x;
```
#### Without params
```javascript
let answer = () => 42;
```
#### With multiple lines - braces ```{ }```
```javascript
let multiply = (x, y) => {
    let result = x * y;
    return result;
};
```
#### Returning object - use brackets ```( )```
```javascript
let getPerson = () => ({
    name: 'John'
});
```
#### IIFE (immediately invoked function expression)
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
* Нельзя использовать методы `bind()`, `call()`, `apply()`


<a name="destruction"></a>
## Destructuring Assignment (Деструктивное присваивание)

<a name="arraydestruction"></a>
### Array destructing
```javascript
let languages = ['JS', 'PHP', 'Python', 'Ruby'];
let [js, php, py, rb] = languages;
```
or
```javascript
let [js, php, py, rb] = ['JS', 'PHP', 'Python', 'Ruby'];
```
#### Пропустить значение
```javascript
let scores = [3, 4, 5];
let [low, , high] = scores;
```
```> 3 5```
#### Присвоить остаток массива
```javascript
let scores = [3, 4, 5, 6, 7];
let [low, , high, ...rest] = scores;

console.log(low, high, rest);
```
```> 3 5 [6, 7]```
#### Использовать параметры по умолчанию
```javascript
let scores = [3, 4, 7];
let [low, mid, high = 5, upper = 9] = scores;
```
```> 3 4 7 9```
#### Если содержит вложенный массив
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
#### As function params
```javascript
function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3, 4]);
```
```> 3 4```
#### As a returned value from function
```javascript
function getScores() {
    return [3, 4, 5];
}

let [rLow, rMid, rHigh] = getScores();
console.log(rLow, rMid, rHigh);
```
```> 3 4```
#### Swap values
```javascript
let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
```

<a name="objectdestructing"></a>
### Object destructing

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
#### As a returned value from function
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


<a name="objects"></a>
## Objects
Если названия свойств совпадают с названиями переменных - можно указать только свойства.
```javascript
let firstName = 'Bill',
    lastName = 'Gates';

let person = {
    firstName,
    lastName,
    sayHello() {
        console.log(`Hi! My name is ${firstName} ${lastName}`);
    }
};

console.log(person);
person.sayHello();
```

``` Object {firstName: "Bill", lastName: "Gates"} Hi! My name is Bill Gates```


<a name="classes"></a>
## Classes

* Классы не попадают в глобальное пространство имен (window в браузере).
* Классы не всплывают (hoisting).

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

const animal = new Animal('animal');
animal.speak(); // animal makes a noise.
```
* Class declaration
```javascript
class Clazz { ... }
```
* Class expression
```javascript
let Clazz = class Clazz { ... }
```
  * +inheritance
```javascript
let SubClazz = class extends Clazz { ... }
```

<a name="inheritance"></a>
### Inheritance

```javascript
class Task {
    constructor(param) {
        ...
    }

    method() {
        ...
    }
}

class SubTask extends Task {
    constructor(param) {
        super(param);
        ...
    }

    method() {
        super.method();
        ...
    }
}
```


<a name="promises"></a>
## Promises

Function returning promise:
```javascript
function applyForVisa(document) {
    let promise = new Promise(function (resolve, reject) {
        condition 
            ? resolve() 
            : reject();
    });

    return promise;
}
```

Or another way:
```javascript
return Promise.resolve();
return Promise.reject();
```

Promise result
```javascript
applyForVisa(document)
    .then(bookHotel)
    .catch(error => console.error(error));
```
Дождаться выполнения **всех** промисов
```javascript
Promise.all([promise1, promise2, promise3])
    .then()
    .catch();
```

Дождаться выполнения **первого** промиса
```javascript
Promise.race([promise1, promise2, promise3])
    .then()
    .catch();
```


<a name="symbols"></a>
## Symbols

Declare:
```javascript
let symbol = Symbol('name');
```

First search for existing:
```javascript
let symbol = Symbol.for('name')
```
Equality
```javascript
let symbol1 = Symbol('name');
let symbol2 = Symbol('name');

console.log(symbol1 === symbol2);
```
```> false ```


```javascript
let symbolf1 = Symbol.for('namy');
let symbolf2 = Symbol.for('namy');

console.log(symbolf1 === symbolf2);
```
```> true ```

```javascript
let name = Symbol.keyFor(symbolf1);
console.log(name);
```
```> namy```

As object property
```javascript
let user = {
    username: 'R2D2',
    [Symbol.for('password')]: 'c3po'
};

console.log(user[Symbol.for('password')]);
```
```> c3po```

New Object method

```javascript
Object.getOwnPropertySymbols(user);
```


<a name="iterators"></a>
## Iterators

```javascript
let array = ['item1', 'item2', 'item3'];
let iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```
```
> Object {value: "item1", done: false}
  Object {value: "item2", done: false}
  Object {value: "item3", done: false}
  Object {value: undefined, done: true}
```

Iterate all available objects:
```javascript
let next = iterator.next();
while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}
```
Result is the same as while using `for...of`
```
> item1
  item2
  item3
```
### Create own iterator
Should return object with method `next()` which returns object containing `value: any` and `done:boolean`.
```javascript
let myIterator = {
    [Symbol.iterator]() {
        return {
            next() {
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
};
```