/*
//bind

var sum = function () {
    return [].reduce.call(arguments, function (result, current) {
        return result + current;
    }, this.sum);
};

// console.log(bindedSum(1, 2)); // 13

var myBind = function (fn, context) {
    // обрезаем ненужные аргументы (функцию и контекст)
    var bindArgs = [].slice.call(arguments, 2);
    return function () {
        // здесь все аргументы будут необходимы
        var fnArgs = [].slice.call(arguments);
        // собираем все
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};

var bindedSum = myBind(sum, {sum: 10}, 20, 30);
console.log(bindedSum(40, 50, 60));
////
*/

// Animal---- родитель

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(this.name + " eat");
};

Animal.prototype.sleep = function () {
    console.log(this.name + " sleep");
};
////

// наследники 1 ур-я
function Pet(name) {
    Animal.apply(this, arguments);
}

function WildAnimal(name) {
    Animal.apply(this, arguments);
}

Pet.prototype = Object.create(Animal.prototype);
WildAnimal.prototype = Object.create(Animal.prototype);

Pet.prototype.constructor = Pet;
WildAnimal.prototype.constructor = WildAnimal;

var animal = new Animal("animal");
var pet = new Pet("pet");
var wildAnimal = new WildAnimal("wildAnimal");
console.log(animal, animal.eat(), animal.sleep());
console.log(animal.name + " name");
console.log(pet, pet.eat(), pet.name, pet.sleep());
console.log(pet.name + " name");
console.log(wildAnimal, wildAnimal.eat(), wildAnimal.name, wildAnimal.sleep());
console.log(wildAnimal.name + " name");
////

// наследники 2 ур-я

function Wolf(name) {
    WildAnimal.apply(this, arguments);
}

function Fox(name) {
    WildAnimal.apply(this, arguments);
}

Wolf.prototype = Object.create(WildAnimal.prototype);
Fox.prototype = Object.create(WildAnimal.prototype);

Wolf.prototype.constructor = Wolf;
Fox.prototype.constructor = Fox;

Wolf.prototype.hawlAtTheMoon = function () {
    console.log("uuuuuuuuuuuuuuuuu Wolf")
};

Fox.prototype.eatColobok = function () {
    console.log("omnomnom colobok Fox")
};

//

function Cat(name) {
    Pet.apply(this, arguments);
}

function YorkshireTerrier(name) {
    Pet.apply(this, arguments);
}

Cat.prototype = Object.create(Pet.prototype);
YorkshireTerrier.prototype = Object.create(Pet.prototype);

Cat.prototype.constructor = Cat;
YorkshireTerrier.prototype.constructor = YorkshireTerrier;

Cat.prototype.sllepOnKeyboard = function () {
    console.log("sllepOnKeyboard Cat");
};

YorkshireTerrier.prototype.bark = function () {
    console.log("bark YorkshireTerrier");
};


var cat = new Cat("cat");
var yorkshireTerrier = new YorkshireTerrier("yorkshireTerrier");

console.log(cat, cat.eat(), cat.sleep(), cat.sllepOnKeyboard());
console.log(cat.name + " name");
console.log(yorkshireTerrier, yorkshireTerrier.eat(), yorkshireTerrier.sleep(), yorkshireTerrier.bark());
console.log(yorkshireTerrier.name + " name");

///