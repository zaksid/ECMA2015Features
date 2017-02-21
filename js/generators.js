function* generate() {
    console.log('Start');
    yield;
    console.log('Finish');
}

let iterator = generate();
console.log(iterator.next());
console.log(iterator.next());


let numbers = {
    *range(start, end) {
        let current = start;

        while (current <= end) {
            yield current++;
        }
    }
};

for (let num of numbers.range(1, 10)) {
    console.log(num);
}

console.log('----------------');

function* generator() {
    yield 42;
    yield* [1, 2, 3];
    yield 43;
}

let iter = generator();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);


function* gen() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.error(e);
    }
}


iter = gen();
console.log(iter.next());
console.log(iter.throw(new Error('Error')));
console.log(iter.next());

function* genny() {
    let result = 1 + (yield);
    console.log(`Result: ${result}`);
}

iter = genny();
console.log(iter.next());
console.log(iter.next(1));