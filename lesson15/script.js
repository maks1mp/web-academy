// var http = require('http');
// var PORT = 5000;
// var fs = require('fs');
// var file = fs.readFileSync('index.html');

// http.createServer(function(request, response) {
//     response.writeHead(200, {'Content-type': 'text/html'});
//     response.end(file);
// }).listen(PORT);

// console.log('server started at port:' + PORT);









// function fn(a = 0, b = 0) {
//     console.log(a + b);
// }

// fn(5, 6);
// fn(10);



// const obj = {
//     user: {
//         name: 'User',
//         surname: 'Surname'
//     },
//     data: [{prop: 1}, {prop: 2}, {prop: 3}]
// };

// const {user:{age: userAge = 15}} = obj;

// const [,, thirdItem] = obj.data;

// console.log(thirdItem);

// const str = 'Alex_Moren'; // ['Alex', 'Moren']
// const [name, surname] = str.split('_');


// const arr = ['red', 'green', 'blue'];
// const arr2 = ['black', 'yellow'];

// const merged = [...arr, ...arr2];

// const numbers = [1,2,3,4,5, 'asd'];

// console.log(...numbers);

// const weather = [
//         {
//             t: 100
//         }, {
//             t: 110
//         }, {
//             t: 115
//         }
//     ];

// const [todayWeather,, ...rest] = weather;

// console.log(todayWeather, rest);

// function someFunc(...args) {
//     console.log(arguments, args);
// }

// someFunc('a', 2, 6);

// const settings1 = {
//     value: 1,
//     param: true
// };

// const settings2 = {
//     value: 150,
//     z: 500
// };

// const fullSettings = {
//     ...settings1,
//     ...settings2
// };

// console.log(fullSettings);

// function strict() {

// }


// function log() {
//     console.log('log fn');
// }

// const log = (a, b) => {
//     console.log(a, b);
//     console.log('log from variable');
// }

// log(2, 6);

// const user = {
//     name: 'Alex',
//     surname: 'Moren',
//     sayHi() {
//         const getName = () => this.name + ' ' + this.surname;

//         return getName();
//     }
// }

// console.log(user.sayHi());


// const sum = (a, b) => a + b;

// const mul = _ => _**2;

// console.log(mul(100));


// const user_name = 'Mark';
// const user_age = 40;

// // const phrase = 'Hello my name is ' + user_name + ', i\m ' + user_age;
// const phrase = `Hello my name is ${user_name}, i'm ${user_age}`;

// const div = (
//     `<div>
//         <p>
//             ${phrase}
//         </p>
//     </div>`
// );

// function str() {
//     console.log(arguments);
// }

// const t = 'asdasd'

// str`text ${t}`;

// const colors = ['red', 'green', 'blue'];

// colors.forEach(function(item, index, array) {
//     console.log(item, index, array);
// });

// const numbs = [1,5,7,9];
// let sum = 0;

// numbs.forEach(item => sum += item);

// console.log(sum);

// const users = [
//     {
//         name: 'Alex',
//         age: 50
//     },
//     {
//         name: 'Child',
//         age: 3
//     },
//     {
//         name: 'Anna',
//         age: 22
//     }
// ]; // ['Alex', 'Anna']

// console.log(users.sort((user1, user2) => user2.age - user1.age))

// var sumAges = users.reduce(function(result, next) {
//     return result + next.age;
// }, 0);

// console.log(sumAges);

// const str = 'Hello World!';
// let reversedStr = '';

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }

// console.log(reversedStr);

// function indexOf(el, string) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === el) {
//             return i;
//         }
//     }

//     return -1;
// }

// const {log} = console;

// log(indexOf('s', 'tirsng'));

const phrase = 'всем привет, это предложение для проверки';

function capitalizeWords(phrase) {
    return phrase
        .split(' ')
        .map(word => {
            const [firstLetter] = word;

            return firstLetter.toUpperCase() + word.slice(1);
        })
        .join(' ');
}

console.log(capitalizeWords(phrase));