var books = new Set();
books.add('Pride and Prejudice');
books.add('War and Peace')
    .add('Oliver Twist');

console.log(books);
console.log('how many books?', books.size);
console.log('has Oliver Twist?', books.has('Oliver Twist'));
books.delete('Oliver Twist');
console.log('has Oliver Twist still?', books.has('Oliver Twist'));

var data = [4,2,4,4,2,5,1,6,7,5,6,8,2,7];
var set = new Set(data);
console.log('data.length', data.length);
console.log('set.size', set.size);
