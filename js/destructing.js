let languages = ['JS', 'PHP', 'Python', 'Ruby'];
let [js, php, py, rb] = languages;

console.log('First example');
console.log(js, php, py, rb);


/* Skip value. Assign the rest of array */
let scores = [3, 4, 5, 6, 7];
let [low, , high, ...rest] = scores;

console.log('Skip value. Assign the rest of array');
console.log(low, high, rest);


/* Default values */
let scores_ = [3, 4, 7];
let [low_, mid_, high_ = 5, upper_ = 9] = scores_;

console.log('Default values');
console.log(low_, mid_, high_, upper_);


/* Nested array */
let _scores = [3, 4, [5, 6]];
let [_low, _mid, _high] = _scores;

console.log('Nested array');
console.log(_low, _mid, _high);

/* Nested array (get values) */
let _scores2 = [3, 4, [5, 6]];
let [_low2, _mid2, [_high2, _higher2]] = _scores2;

console.log('Nested array (get values)');
console.log(_low2, _mid2, _high2, _higher2);

/* As function params */
function computeScore([low, mid]) {
    console.log('Function parameters');
    console.log(low, mid);
}

computeScore([3, 4]);


/* As a returned value from function */
function getScores() {
    return [3, 4, 5];
}

let [rLow, rMid, rHigh] = getScores();
console.log('As a returned value from function');
console.log(rLow, rMid, rHigh);


/* Swap values */
let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('Swap values');
console.log('Yes is ', yes);
console.log('No is ', no);
console.log('o_O');



/**
 * OBJECTS
 */
let person = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let {firstName, lastName, social: { facebook }, age = 25} = person;

console.log('Objects');
console.log(firstName, lastName, facebook, age);

let {firstName: first, lastName: last} = person;
console.log(first, last);

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
