//SET etrutura de dados unicos

const mySet = new Set();
mySet.add("apple");
mySet.add(5);
console.log(mySet.has("apple"));
mySet.delete(5);

const arr = [1, 2, 2, 3, 1, 5, 7, 10, 10, 11, 1, 2];

const retornaSet = function(array){
    const set2 = new Set(array)
    return [...set2];
}

console.log(retornaSet(arr));