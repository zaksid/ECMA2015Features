# ECMA2015Features

##let

##const

##Spread operator

##Template strings

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
```
