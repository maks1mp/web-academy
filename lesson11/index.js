// var user = {
//     name: 'Alex'
// };

// user.__proto__ === Object

// var person = {
//     name: 'Mark'
// };

// Object.setPrototypeOf(person, user);

// console.log(person.name);

// console.log(Object.getPrototypeOf(person));
// console.log(Object.getPrototypeOf(user));
// console.log(Object.getPrototypeOf(null));

// console.log(person instanceof Object);
// console.log(null instanceof Object);

// console.log([] instanceof Array);
// console.log({} instanceof Array);


function User(name, age) {
    // this = {};

    this.name = name;
    this.age = age;

    // return this;
}

User.prototype.sayHi = function() {
    console.log('hi, my name is ', this.name);
}

const alex = new User('Alex', 25);
//  alex.__proto__ = User.prototype;

// alex.sayHi();

// console.log(alex instanceof User);

// var copy = JSON.parse(JSON.stringify({}));

// var o1 = {
//     name: 'o1 name'
// };

// var o2 = {
//     age: 28,
//     name: 'LAST'
// }

// var mergedObject = Object.assign({} ,o1, o2);

// console.log(mergedObject, o1, o2);

// var obj1 = {
//     prop: {
//         title: 'Hi'
//     }
// }


// var copyObj1 = Object.assign({}, obj1);

// copyObj1.prop.title = 'NEW!';

// console.log(copyObj1, obj1);


// zoo

//  var firstZoo = new Zoo()
//  var wolf = new Predator('Wolf', 49);
//  var zebra = new Herbaleater('Zebra', 90);

//  firstZoo.addAnimal(wolf);
//  firstZoo.addAnimal(zebra);

//  firstZoo.getHisory(); // wolf 19:42:15, 

//  firstZoo.getAnimals(); 
// {predators: [wolf], herbals: [zebra]}

function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

Animal.prototype.eat = function() {
    console.log(this.name, 'eating');
}

function Predator(name, weight) {
    this.isPredator = true;

    Animal.call(this, name, weight);
}

function Herbaleater(name, weight) {
    this.isPredator = false;

    Animal.call(this, name, weight);
}

Predator.prototype = Object.create(Animal.prototype);
Herbaleater.prototype = Object.create(Animal.prototype);

function Zoo() {
    this.animals = {
        predators: [],
        herbaleaters: []
    };
    this.history = [];
}

Zoo.prototype.addAnimal = function(animal) {
    if (animal.isPredator) {
        this.animals.predators.push(animal);
    } else {
        this.animals.herbaleaters.push(animal);
    }

    this.updateHistory(animal);
}

Zoo.prototype.updateHistory = function(animal) {
    this.history.push({
        name: animal.name,
        date: new Date(),
        type: animal.isPredator ? 'predator' : 'hearbal'
    });
}

Zoo.prototype.feed = function(type) {
    for (var i = 0; i < this.animals[type].length; i++) {
        var animal = this.animals[type][i];

        animal.eat();
    }
}

// var someZoo = new Zoo();

// someZoo.addAnimal(new Predator('Kroko', 700));
// someZoo.addAnimal(new Predator('Lion', 900));
// someZoo.addAnimal(new Predator('Tiger', 500));
// someZoo.addAnimal(new Herbaleater('Belka', 3));

// console.log(someZoo);

// function sayHi() {
//     console.log(this);
//     console.log(this.name);
// }

// var example = {
//     name: 'Example'
// }

// sayHi.call(example);







// var button = document.getElementById('btn');

// document.getElementsByTagName('div');
// document.getElementsByClassName('block');
// document.getEmenetsByName('login');

// innerText, innerHTML

// docuement.querySelector()
// document.querySelectorAll()

// console.dir(button);

function updateTime() {
    var lastDiv = document.querySelector('div:last-of-type');

    var date = new Date()

    lastDiv.innerText = date.toLocaleTimeString();
}

window.onload = function() {
    // var txt = {
    //     ready:'Ready',
    //     fill_up: 'Fill up form please'
    // }

    // // var name = prompt('User name');

    // // var input = document.querySelector('input');

    // // input.value = name;

    // var h1 = document.querySelector('h1');
    // h1.innerText = txt.ready;

    // console.dir(h1);

    // var block = document.querySelector('.block');
    // block.innerText = txt.fill_up;

    // updateTime();

    // setInterval(updateTime, 1000);

    // var listItems = document.querySelectorAll('.weekdays li');

    // var values = [];

    // for (var i = 0; i < listItems.length; i++) {
    //     values.push(listItems[i].innerText);
    // }

    // console.log(values);

    // var heading = document.querySelector('h1');

    // heading.style.backgroundColor = 'red';

    // heading.addEventListener('click', function(event) {
    //     console.log('heading');
    // });

    // document.body.addEventListener('click', function() {
    //     console.log('body');
    // });

    // document.querySelector('html').addEventListener('click', function() {
    //     console.log('html');
    // });

    // var div = document.createElement('div');

    // div.className = 'block';
    // div.id = 'item';
    // div.innerText = 'DIV FROM JS';

    // div.addEventListener('click', function() {
    //     console.log('qq');
    // });

    // document.body.appendChild(div);

    // var ul = document.createElement('ul');

    // for (var i = 0; i < 10; i++) {
    //     var li = document.createElement('li');

    //     li.innerText = 'Item #'+ (i + 1);

    //     ul.appendChild(li);
    // }

    // document.body.appendChild(ul);

    // var weekDaysList = document.querySelector('.weekdays');

    // var oneMoreDay = document.createElement('li');

    // oneMoreDay.innerHTML = '<b>SUPER DAY</b>';

    // weekDaysList.appendChild(oneMoreDay);
}

1) Сделать 10 кнопок, при клике на кнопку показать ее индекс
2) Сделать форму (имя, возраст и кнопка)
    при отправке - вывести ниже формы данные из полей формы
3) Сделать блок с кадратом в центре 
    Двигать квадрат стрелками с клавиатуры

// find buttons container
// for i < 10
//  create buuton
//  inserts text in button
//  add Listener
//  append to container




