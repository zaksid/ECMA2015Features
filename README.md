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
var arrayCopyES6 = [...array];
```
or
```javascript
var arrayCopy = [].concat(array);
```

##Template strings
Consider `name` is variable
```javascript
`Hello ${name}`
```
You can make calculations inside template string
```javascript
`${parseInt(x) + parseInt(y)}`
```

##Function parameters

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
