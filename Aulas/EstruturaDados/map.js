//MAP esturutura de dados do tipo chave-valor

const myMap = new Map();
myMap.set("apple", "Fruit");
console.log(myMap.get("apple"));
myMap.delete("apple");

function getAdmi(map) {
    let admin = [];
    for([key, value] of map){
        if(value==="admin"){
            admin.push(key);
        }
    }
    return admin;
}

const user = new Map();
user.set("litos", "admin");
user.set("lina", "admin");
user.set("Chico", "Dev");

console.log(getAdmi(user));