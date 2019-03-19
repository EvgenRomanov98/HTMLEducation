// <li>Array.prototype.every</li>
// <li>Array.prototype.some</li>
// <li>Array.prototype.map</li>
// <li>Array.prototype.forEach</li>
// <li>Array.prototype.find</li>
// <li>Array.prototype.filter</li>
// <li>Array.prototype.flat / flatMap</li>
// <li>Array.prototype.reduce</li>

function fn(arg) {
    return arg < 5;
}

function multiply(arg) {
    return arg * 2;
}

var array = [150, 124, 141, 4, 6];

Array.prototype.myEvery = function (func) {
    for (var i = 0; i < this.length; i++) {
        if (func(this[i]) === false) {
            return false;
        }
    }
    return true;
};

console.log(array.myEvery(fn));


Array.prototype.mySome = function (func) {
    for (var i = 0; i < this.length; i++) {
        if (func(this[i]) === true) {
            return true;
        }
    }
    return false;
};

console.log(array.mySome(fn));

Array.prototype.myMap = function (callback, thisArg) {
    var results = [];
    for (var i = 0; i < this.length; i++) {
        results.push(callback.call(thisArg, this[i], i, this));
    }
    return results;
};

console.log(array.myMap(multiply));


Array.prototype.myForEach = function (callback, thisArg) {
    for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};

array.myForEach(multiply);

Array.prototype.myFind = function (func) {
    for (var i = 0; i < this.length; i++) {
        if (func(this[i]) === true) {
            return this[i];
        }
    }
    return undefined;
};

console.log(array.myFind(fn));

Array.prototype.myFilter = function (callback, thisArg) {
    var results = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            results.push(this[i]);
        }
    }
    return results;
};

var strs = ['Hello', ',', 'JavaScript', 'World', '!'];

var filter = function (str) {
    return str.toLowerCase() !== str;
};

console.log(strs.myFilter(filter));
var arr = [1, 2, [31, 32, [331, 332, [3331, 3332, [515, 5461, [[[]]]]]], 34], 4, , []];


Array.prototype.myFlat = function (depth) {
    if (depth === undefined) {
        depth = 1;
    }
    var newArray = [];

    for (var i = 0; i < this.length; i++) {

        if (Array.isArray(this[i]) && depth > 0) {
            --depth;
            var helpArr = this[i].myFlat(depth);
            for (var j = 0; j < helpArr.length; j++) {
                if (helpArr[j] !== undefined) {
                    newArray.push(helpArr[j]);
                }
            }

        } else if (this[i] !== undefined) {
            newArray.push(this[i]);
        }

    }

    return newArray;

};

console.log(arr.myFlat(4));


Array.prototype.myFlatMap = function (depth, func) {
    if (depth === undefined) {
        depth = 1;
    }
    var newArray = [];

    for (var i = 0; i < this.length; i++) {

        if (Array.isArray(this[i]) && depth > 0) {
            --depth;
            var helpArr = this[i].myFlat(depth);
            for (var j = 0; j < helpArr.length; j++) {
                if (helpArr[j] !== undefined && !Array.isArray(helpArr[j])) {
                    newArray.push(func(helpArr[j]));
                } else {
                    newArray.push(helpArr[j]);
                }
            }

        } else if (this[i] !== undefined) {
            newArray.push(func(this[i]));
        }

    }

    return newArray;

};

console.log(arr.myFlatMap(5, multiply));

Array.prototype.myReduce = function (func, initialValue) {
    var acc = initialValue || 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] !== undefined) {
            acc = func(acc, this[i], i, this);
        }
    }
    return acc;
};

console.log(arr.myReduce(function (acc, elem) {
    return acc + elem;
}));
