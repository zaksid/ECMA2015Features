let symbol1 = Symbol('name');
let symbol2 = Symbol('name');

console.log(symbol1 === symbol2);

let symbolf1 = Symbol.for('namy'); // First finad existing
let symbolf2 = Symbol.for('namy');

console.log(symbolf1 === symbolf2);

///false
///true


let name = Symbol.keyFor(symbolf2);
console.log(name);

// As object property
let user = {
    username: 'R2D2',
    [Symbol.for('password')]: 'c3po'
};

console.log(user[Symbol.for('password')]);

Object.getOwnPropertySymbols(user);