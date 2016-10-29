function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting}, ${name}`);
}

greet('Hi', 'Bill');
greet();

/* ES5 approach */
function sum5() {
    var sum = 0;

    Array.prototype.forEach.call(arguments, function(value) {
        sum += value;
    });

    console.log('ES5: ' + sum);
}

/* ES5 approach */
function sum6(...values) {
    let sum = 0;

    values.forEach(function(value) {
        sum += value;
    });

    console.log(`ES6: ${sum}`);
}

function sumReduce(...values) {
    console.log('Reduce: ' + values.reduce(function(prevValue, currentValue) {
        return prevValue + currentValue;
    }));
}

sum5(5, 7, 2, 10);
sum6(5, 7, 2, 10);
sumReduce(5, 7, 2, 10);
