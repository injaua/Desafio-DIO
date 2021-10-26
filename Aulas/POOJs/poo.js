//Orientao a objectos no JS
//os objectos js herdam prop e methods do prototype; Ex.: object.prototype
//classes nao exitem nativamente, sendo usada a syntatic sugar: construtor, getters e setters.
class contaBancaria{
    constructor(agencia, nr, tipo, saldo){ //sempre com construtor
        this.agencia = agencia;
        this.nr = nr;
        this.tipo = tipo;
        this._saldo = 0;
    }

    getSaldo(){
        return this._saldo;
    }

    setSaldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor<this._saldo){
            return "Saldo insufieciente";
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
 depositar(valor){
     this._saldo = this._saldo + valor;
     return this._saldo;
 }
    
}


class contaCorrente extends contaBancaria{
    construtor(agencia, nr,cartaoCredito){
        super(agencia, nr);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    getCartaoCredito(){
        return this._cartaoCredito;
    }

    setCartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    construtor(agencia, nr) {
        super(agencia, nr);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends contaBancaria {
    construtor(agencia, nr) {
        super(agencia, nr);
        this.tipo = 'universitaria';
    }

    sacra(valor){
        if(valor>500){
            return 'Operacao negada'
        }
        this._saldo = this._saldo - valor;
    }
}