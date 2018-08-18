// prev DZ

// var age = +prompt('Your age?');

// var expression = confirm('Are you really ' + age + '?');

// if (expression && age >= 18) {
//     alert('Sucess');
//     console.log('success');
// } else {
//     console.error('error');
// }

// var numb = +prompt('Number');

// if (isNaN(numb)) {
//     console.error('error');
// } else if (numb === 0) {
//     console.log('zero');
// } else if (numb > 0) {
//     console.log('> 0');
// } else {
//     console.log('< 0');
// }

// var rating = +prompt('Rating');

// switch(rating) {
//     case 1:
//         console.log('bad');
//         break;
//     case 2:
//         console.log('terrible');
//         break;
//     default:    
//         console.log('not found');
// }


// _______________________________

// var a = 5;

// debugger;

// console.log('before');

// a = a + 10;

// console.log('after');

// var n = 10;
// var z = 50;

// function sum(a, b) {
//     console.log('a=', a, 'b=', b);
//     var result = a + b;

//     console.log('>', result);
// }

// sum(n, z);
// sum(5, 10);
// sum(50, n);

// var log = null;

// log = function(arg) {
//     console.log('>>', arg);
// }


// log(123);
// log('Hi!');


// function wordToNumber(word) {
//     switch(word) {
//         case 'one':
//             return 1;
//         case 'two':
//             return 2;
//         case 'three':
//             return 3;
//         case 'four':
//             return 4;
//         case 'five':
//             return 5;
//         default:
//             return NaN;
//     }
// }

// function promptAndConvert() {
//     var word = prompt('word');

//     alert(wordToNumber(word));
// }

// promptAndConvert();
// promptAndConvert();
// promptAndConvert();

function mean(a, b) {
    return (a + b) / 2;
}

console.log(mean(5, 7));
console.log(mean(5, 17));
console.log(mean(25, 17));

function isOdd(numb) {
    return numb % 2 === 0;
}

console.log(isOdd(5));

Math.sqrt();
Math.pow(2, 2);

function angleInDegrees(a, c) {
    return Math.acos(a / c) * 180 / Math.PI;
}

function ramndomInRange(n , m) {
    console.log('random', n + Math.round(Math.random() * (m - n)));
}

ramndomInRange(5, 6);
ramndomInRange(100, 1000);
ramndomInRange(-50, 40);



