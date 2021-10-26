//FORMULARIOS EM REACT JS
import React, {Component} from 'react'

 export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('O nome: ' + this.state.value);
        event.preventDefault();
    }

   render(){
       return(
           <form onSubmit={this.handleSubmit} style={{display: 'flex'}}>
               <label>Nome
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
               </label>
              <input type="submit" value='Send'/>
           </form>
       );
   } 
}