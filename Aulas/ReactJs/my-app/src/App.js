import { useState } from 'react';

import './App.css';
import Form from './formularios.js';

const element = <h1>Ola mundo com React</h1>;


const hello = () =>{
  return(
<div>
  <h2>Biriathy Injaua</h2>
</div>
  );
}

//eventos
const showEvent = () =>{
console.log("evento clicado!");
}

const botao = <button onClick={showEvent}>Show</button>
function App() {
  
  const [valor, setValor] = useState(0);
  function adicionar() {
    setValor(valor + 1);
  }

  function remover() {
    setValor(valor - 1);
  }

  return (
    <div className="App">
     {element}
     {hello()}
     {botao}
     <button onClick={adicionar}>Adicionar</button>
      <button onClick={remover}>Remover</button>
     <p>{valor}</p>
     <div>Formularios em Reactjs</div>
    <Form/>
    </div>
  );
}

export default App;
