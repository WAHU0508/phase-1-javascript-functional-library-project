function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            alert(`Element: ${collection[i]}`)
            callback(collection[i])
        }
    }
    else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            alert(`${key}: ${collection[key]}`)
            callback(collection[key], key)
        }
    }
    return collection;
}
let collection = [1, 2, 6, 4, 5]
// myEach(collection, element => {console.log(element)})
// const person = {name: 'Alice', age: 25, city: 'Wonderland'};
// myEach(person, (value, key) => {console.log(`${key}: ${value}`)})

function myMap(collection, callback) {
    let newArray = []
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
    }
    else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            newArray.push(callback(collection[key]))
        }
    }
    return newArray;
}
// console.log(myMap([1, 2, 3], function(num){ return num * 3; }));

// console.log(myMap({one: 1, two: 2, three: 3}, function(num){ return num * 3; }));

function myReduce(collection, callback, acc) {
    let start = 0;

    if (acc === undefined) {
        if (Array.isArray(collection)) {
            acc = collection[0];
            start = 1;
        }
        else if (typeof collection === 'object' && collection !== null) {
            const keys = Object.keys(collection);
            acc = collection[keys[0]];
            start = 1;   
        }
    }

    if (Array.isArray(collection)) {
        for (let i = start; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    }
    else if (typeof collection === 'object' && collection !== null) {
        const keys = Object.keys(collection);
        for (let i = start; i < keys.length; i++) {
            acc = callback(acc, collection[keys[i]], collection);
        }
    }

    return acc;
}
// console.log(myReduce([1, 2, 3], function(acc, val) { return acc + val; }, 10));
// console.log(myReduce([1, 2, 3], function(acc, val) { return acc + val; }));
// console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val) { return acc + val; }));

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    return collection[key];
                }
            }
        }
    }
    return undefined;
}

// console.log(myFind([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; }));
// console.log(myFind({ one: 1, three: 3, four: 4, six: 6 }, function(num) { return num % 2 == 0; }));

function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]);
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    result.push(collection[key]);
                }
            }
        }
    }

    return result;
}

// console.log(myFilter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; }));
// console.log(myFilter({ one: 1, three: 3, five: 5 }, function(num) { return num % 2 == 0; }));

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
        return Object.keys(collection).length;
    }
    return 0;
}

// console.log(mySize({ one: 1, two: 2, three: 3 }));
// console.log(mySize([]));

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

// console.log(myFirst([5, 4, 3, 2, 1]));
// console.log(myFirst([5, 4, 3, 2, 1], 3));

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

// console.log(myLast([5, 4, 3, 2, 1]));
// console.log(myLast([5, 4, 3, 2, 1], 3));

function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        let aValue = callback(a);
        let bValue = callback(b);
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
}

// console.log(mySortBy([1, 2, 3, 4, 5, 6], function(num) { return Math.sin(num); }));
// const stooges = [
//     { name: 'moe', age: 40 },
//     { name: 'larry', age: 50 },
//     { name: 'curly', age: 60 }
// ];
// console.log(mySortBy(stooges, function(stooge) { return stooge.name; }));

function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                newArr.push(...array[i]);
            } else {
                newArr.push(array[i]);
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                myFlatten(array[i], false, newArr);
            } else {
                newArr.push(array[i]);
            }
        }
    }
    return newArr;
}

// console.log(myFlatten([1, [2], [3, [[4]]]]));
// console.log(myFlatten([1, [2], [3, [[4]]]], true));

function myKeys(object) {
    let keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
// console.log(myKeys({ one: 1, two: 2, three: 3 }));

function myValues(object) {
    let values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}
// console.log(myValues({ one: 1, two: 2, three: 3 }));







