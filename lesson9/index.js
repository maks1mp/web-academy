// function funcName(fn) {
//     console.log('code from func');
//     fn();
// }

// var someFunc = function() {
//     console.log('someFunc');
// }

// funcName(someFunc);

// function generateMultiplier(m) {
//     return function(x) {
//         console.log('m=', m, 'x=', x);
//         return m * x;
//     }
// }

// var double = generateMultiplier(2);
// var hundredTimes = generateMultiplier(100);

// double(10);
// double(20);
// double(1);

// hundredTimes(10);
 

// function createCounter(start) {
//     return function() {
//         return ++start;
//     }
// }

// var counter1 = createCounter(10);

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// var counter2 = createCounter(15);

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// function pow(x, n) {
//     if (n !== 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
//         return x * pow(x, n - 1);
//     } else { 
//         return x;
//     }
// }

// console.log(pow(2, 4));

// function recursionLog(word) {
//     if (word.length >= 1) {
//         console.log(word[0]);

//         recursionLog(word.slice(1));
//     }
// }

// recursionLog('hello');

// var i = 0;

// while(i < 1000) {
//     console.log(i);
//     i++;
// }

// console.log('end');

// var j = 100;

// do {
//     console.log('j =', j);
//     j++;
// } while(j < 10);

// for (var i = 0, j = 10; i < j; i++) {
//     console.log(i);
// }

// написать функцию которая:

// 1) выводит четные числа от 0 до n
// 2) разворачивает слово (привет = твеирп)
// 3) проверяет являются ли слово палиндромом (мадам)
// 4) fizzBuzz вывести числа от 0 до 100 
//     число которое делится (без остачи) на 3 заменить на слово fizz
//                                         на 5 заменить на слово Buzz
//                                       на 3 и на 5 fizzBuzz
//  0 1 2 fizz 4 buzz fizz 7 8 fizz buzz ... 13 14 fizzBuzz
// 5)* нарисовать звездочками прямоугольник и треугольник

// **********
// **********
// **********
// **********

// *
// **
// ***
// ****
// *****

function odd(n) {
    while(n !== 0) {
        if (n % 2 === 0) {
            console.log(n);
        }

        n--;
    }
}

// odd(100);

function reverseWord(word) {
    var newWord = '';

    for(var i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }

    return newWord;
}

function isPalindrome(word) {
    return word === reverseWord(word);
}


// console.log(isPalindrome('iiii'));
// console.log(isPalindrome('hello'));

function getWord(n) {
    var word = '';

    if (n % 3 === 0) {
        word += 'fizz';
    }

    if (n % 5 === 0) {
        word += 'buzz';
    }

    return (word && n > 0) ? word : n;
}

function fizzBuzz() {
    for (var i = 0; i < 100; i++) {
        document.write(' ' + getWord(i) + ' ');
    }
}

// fizzBuzz();

function createFigure(type) {
    return function(x, y, symbol) {
        document.write('<hr>');

        for (var i = 0; i < y; i++) {
            var line = '';

            for (var j = 0; j < (type === 'rectangle' ? x : i); j++) {
                line += symbol || '*';
            }

            document.write(line + '<br>');
        }

        document.write('<hr>');
    }
}

var rectangleCreator = createFigure('rectangle');
// rectangleCreator(10, 4);

var triangleCreator = createFigure('trianle');
// triangleCreator(20, 20);

// Array

// var arr = [];
// var arr = new Array();

// console.log(arr);

// var colors = ['red', 'green', 'blue', 'green'];

// var otherColors = ['aqua', 'pink'];

// var merged = colors.concat(otherColors);

// console.log(merged, colors, otherColors);

// merged.reverse();

// console.log(merged);

// colors.splice(2, 1, 'INSETRION', '2', 'ONE MORE');

// console.log(colors);

// var result = colors.push('black');
// var result = colors.pop();

// var result = colors.unshift('black');
// var result = colors.shift();

// var result = colors.indexOf('green');
// lastIndexOf

// var copyColors = colors.slice(-1);

// copyColors[0] = 'CHANGED';

// console.log(colors, copyColors);

// console.log('result = ', result, 'length = ',colors.length);
// console.log('>', colors);

// console.log(colors);

// console.log(colors[0]);

// colors[1] = 'black';

// console.log(colors);

// colors[100] = 'new color';

// console.log(colors);

// for (var i = 0; i < colors.length; i++) {
//     document.write('<span style="color:'+colors[i]+'""> '+colors[i]+' </span>');
// }

// parseInt('10');


