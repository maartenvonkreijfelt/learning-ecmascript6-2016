function* director(){

    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
}

var action = director();

/*
console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());
*/

console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);