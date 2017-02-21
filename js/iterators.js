let array = ['item1', 'item2', 'item3'];
let iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let next = iterator.next();
while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

/////////////////////////////////////////////

let randomGenerator = {
    generate() {
        return this[Symbol.iterator]();
    },

    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100),
                    done = count > 9;
                count++;
                return { value, done };
            }
        }
    }
};

let random = randomGenerator.generate();
console.log(random.next().value);



class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = { value: undefined, done: true };

        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index++;
        }

        return result;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}

let taskList = new TaskList();
taskList.addTasks('Learn JS', 'Learn ES6', 'Buy products');

for (let task of taskList) {
    console.log(task);
}
