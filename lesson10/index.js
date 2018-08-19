// 1 1 2 3 5 8 13 21 ...

function getFibonnaciNumber(n) {
    if (n <= 1) {
        return n;
    }

    return getFibonnaciNumber(n - 1) + getFibonnaciNumber(n - 2);
}

function fibonnaci(n) {
    var result = [];

    for (var i = 0; i < n; i++) {
        result.push(getFibonnaciNumber(i + 1));
    }

    return result;
}

// console.log(fibonnaci(8)); // [1 1 2 3 5 8 13 21]


// Objects

var user = {
    name: 'Maksim',
    surname: 'Moren',
    age: 24,
    'some long name': 'value123'
};
// var obj = new Object();

var prop = true ? 'surname' : 'name';

// console.log(user[prop]);

var o = {};

for (var i = 0; i < 10; i++) {
    var propName = 'prop'+i;

    o[propName] = i;
}

// console.log(o);

// console.log(user);

// console.log(user.name);
// console.log(user['name']);

// console.log(user['some long name']);

// user.name = 'Alex';

// delete user.age;

// console.log(user);

// var VARIABLE = 'Hello!';

// console.log(VARIABLE);

// var a = 2;

// function main() {
//     GLOBAL = 'GLOBAL';


// }

// main();

// practice

// var me = {
//     name: 'Maskim',
//     languages: ['ru', 'en'],
//     programmingLangueages: {
//         dynamic: [{
//             title: 'JS',
//             rate: 10
//         }]
//     }
// }

// console.log(me.programmingLangueages.dynamic[0].rate);

// var user = {
//     name: 'Alex',
//     sayHi: function() {
//         console.log('hi, my name is ' + user.name);
//     },
//     changeName: function(newName) {
//         user.name = newName;
//         console.log('userNAme has been changed to ' +  newName);
//     }
// }

// user.sayHi();
// user.changeName('Mark');
// user.sayHi();

// 1) Создать обьект юзера с данными
//         (10 полей с 2 вложенными объектами и 1 массивом)
//         (name, surname, age, education, languages, address, sallary)

// 2) посчитать количество свойств в объекте (не функций-методы)
// 3) добавить 2 метода (гетФуллНейм ...)

// var user = {
//     name: 'UserName',
//     age: 30,
//     countProps: function() {
//         var propsCounter = 0;

//         for (var prop in user) {
//             if (typeof user[prop] !== 'function') {
//                 propsCounter++;
//             }
//         }

//         return propsCounter;
//     }
// }

// user.countProps();

// 1) cat

// var cat = {
//     name: 'Barsik',
//     sayMeow: function() {
//         console.log(this.name + ' says: “meow”');
//     }
// }

// cat.sayMeow();

// var name = prompt('Name', 'Alex');

// var USER = {
//     name: name
// }

// console.log(USER);

// function getName() {
//     console.log(this.name);
// }

// var obj1 = {
//     name: 'obj1',
//     getName: getName
// }

// var obj2 = {
//     name: 'obj2',
//     getName: getName
// }

// obj1.getName();
// obj2.getName();

// var human = {
//     name: 'ROOT HUMAN',
//     walk: function() {
//         console.log(this.name + ' is walking');
//     },
//     talk: function() {
//         console.log(this.name + ' is talking');
//     }
// }

// human.talk();

// var man = Object.create(human, {
//     name: {
//         value: 'Alex'
//     }
// });

// man.talk();
// man.walk();

// function Terminal(title, amount) {
//     this.title = title;
//     this.amount = amount;
// }

// Terminal.prototype = {
//     addMoney: function(money) {
//         this.amount += money;
//         console.log(this.title, 'added ' + money + ' $');
//     },
//     getMoney: function(money) {
//         if (this.amount >= money) {
//             this.amount -= money;
//             console.log(this.title, 'got ' + money + ' $');
//         } else {
//             console.log(this.title, 'not enouhgt money');
//         }
//     }
// }

// var privat24 = new Terminal('Privatbank', 10000);

// var monobak = new Terminal('Mono', 50000);



// 


function Game(canEat, cantEat) {
    this.canEat = canEat;
    this.cantEat = cantEat;
    this.fullItems = [].concat(canEat, cantEat);
}

Game.prototype = {
    constructor: Game,
    play: function() {
        if (this.fullItems.length !== 0) {
            var randomItem = this.fullItems[Math.floor(Math.random() * this.fullItems.length)],
                result = confirm('Можно ли есть ' + randomItem + '?');

            result
                ? this.playAgainOrLose(this.canEat.indexOf(randomItem), this.canEat)
                : this.playAgainOrLose(this.cantEat.indexOf(randomItem), this.cantEat)
        } else {
            alert('Win!');
        }
    },
    playAgainOrLose: function(index, arr) {
        if (index !== -1) {
            alert('Okay');
            arr.splice(index, 1);
            this.fullItems = [].concat(this.canEat, this.cantEat);
            this.play();
        } else {
            alert('You lost');
        }
    }
}

var game = new Game(['хлеб', 'апельсин', 'вода'], ['колесо', 'телефон']);
// game.play();

var otherGame = new Game(['potato'], ['iron']);

otherGame.play();