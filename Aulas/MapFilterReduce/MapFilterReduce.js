//MAP
//sintaxe: array.map(callback, thisArg);
const array = [1, 5, 8, 9];
console.log(array.map((item) => item *2));

//FILTER
//Sintaxe: array.filter(callback, thisArg);
const arr = ["manga", "laranja", "limao", "ata"];
console.log(arr.filter((item) => item.includes("manga1")));

//REDUCE
//Sintaxe: array.reduce(callbackFn, initialValue);
const arrays = [1, 5, 8, 9];
function somaArray(arr) {
  return arr.reduce(function(prev, current){
      return prev + current;
  })  
}
console.log(somaArray(arrays));