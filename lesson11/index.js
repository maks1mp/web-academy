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

alex.sayHi();

console.log(alex instanceof User);

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

var wolf = new Predator('Albert', 80);

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

var someZoo = new Zoo();

someZoo.addAnimal(new Predator('Kroko', 700));
someZoo.addAnimal(new Predator('Lion', 900));
someZoo.addAnimal(new Predator('Tiger', 500));
someZoo.addAnimal(new Herbaleater('Belka', 3));

console.log(someZoo);

// function sayHi() {
//     console.log(this);
//     console.log(this.name);
// }

// var example = {
//     name: 'Example'
// }

// sayHi.call(example);











