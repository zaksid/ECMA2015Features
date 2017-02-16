class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
    }

    get done() {
        return this._done === true ? 'Completed' : 'Not completed';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Set value true or false');
        }
    }

    complete() {
        this.done = true;
        console.log(`Task "${this.title}" completed.`);
    }

    static getDefaultTitle() {
        return 'Task';
    }
}

Task.count = 0; // <-- Static variable

let task = new Task('Buy food');
let task2 = new Task('Task 2 ');
let task3 = new Task();

console.log(task.title);
console.log(task3.title);
task.complete();

console.log(Task.count);
console.log(task.done);
