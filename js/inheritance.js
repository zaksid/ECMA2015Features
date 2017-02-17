class Task {
    constructor(title) {
        this.title = title
        this.done = false;
        console.log('Creating task');
    }

    complete(){
        this.done = true;
        console.log(`Task "${this.title}" completed`);
    }
}

class SubTask extends Task {
    constructor(title){
        super(title);
        console.log('Creating SUB task');
    }

    complete(){
        super.complete();
        console.log(`Subtask "${this.title}" completed`);
    }
}

let task = new Task('Learn JS');
let subtask = new SubTask('Learn ES6');

console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);



// Output
/*
Creating task
Creating task
Creating SUB task

true
true

Task "Learn JS" completed
Task "Learn ES6" completed
Subtask "Learn ES6" completed

Task {title: "Learn JS", done: true}
SubTask {title: "Learn ES6", done: true}
 */