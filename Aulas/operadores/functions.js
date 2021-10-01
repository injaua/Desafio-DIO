//FUNCTIONS

//Funcoes anonima
const sum = function  (a){
    return 2*a;
}

//Funcao autoinvocavel
(function () {
    let name = "litos";
    return name;
})();

//Callbacks: funcao passada como argumento para outra funcao
const soma = function (a, b) {
    return a + b;
}

const calc = function (operacao, a, b){
    return operacao(a+b);
}

const result = calc(soma, 5, 7);


//Parametros em arrays: com spread e rest
// para passar um array para uma funcao podemos usar a tecnica de spread
const soma = function(a){
    return a+a+a;
}

const numbers = [1, 2, 3];

soma(...numbers); //spread

//Object destructuring
const person = {
    name: "litos",
    age: 45
}

function userId({id}) {
    return id;  
}

userId(person);



//THIS keyword
//referencia o contexto


//Array functions
//No ES6
//funcao normal:
const hello = function () {
    return "Hello";
}

//com arraow function
//Nao faz hosting (declare e depois chame)
const Hello = () => "Helo";
