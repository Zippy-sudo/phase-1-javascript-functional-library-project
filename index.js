function myEach(collection, callback) {
    let newArray;
    if (!(Array.isArray(collection))) {
        newArray = (Object.values(collection));
    } else newArray = collection.slice(0);

    newArray.forEach(element => callback(element));

    return collection;
}

function myMap(collection, callback) {
    let newArray;
    if (!(Array.isArray(collection))) {
        newArray = (Object.values(collection));
    } else newArray = collection.slice(0);

    return newArray.map((element) => callback(element));
}

function myReduce(collection, callback, acc) {
    let newArray;
    if (!(Array.isArray(collection))) {
        newArray = (Object.values(collection));
    } else newArray = collection.slice(0);

    if (acc) {
        return newArray.reduce(callback, acc)
    } else return newArray.reduce(callback);

}

function myFind(collection, predicate) {
    let newArray;
    if (!(Array.isArray(collection))) {
        newArray = (Object.values(collection));
    } else newArray = collection.slice(0);

    return newArray.find((element) => {
        return predicate(element);
    })
}

function myFilter(collection, predicate) {
    let newArray;
    if (!(Array.isArray(collection))) {
        newArray = (Object.values(collection));
    } else newArray = collection.slice(0);

    return newArray.filter((element) => {
        return predicate(element);
    })
}

function mySize(collection) {
    let newArray;
    if (!(Array.isArray(collection))) {
        newArray = (Object.values(collection));
    } else newArray = collection.slice(0);

    return newArray.length;
}

function myFirst(array, integer) {
    if (integer) {
        return array.slice(0, integer);
    } else return (array.slice(0, 1))[0];
}

function myLast(array, integer) {
    if (integer) {
        return array.slice(array.length - integer);
    } else return (array.slice(array.length - 1))[0];
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}