import React, { Component } from 'react';
import'../calculator.css';
import Result from './result';
import Keyboard from './keyboard';

class Calculator extends Component{
  constructor(){
    super();

    this.state={

      resultado: ""
    }
      
  }

  onClick = button => {
    if(button==="="){
      this.calcular()
    }

    else if(button==="."){
      this.decimal()
    }

    else if(button==="C"){
      this.reset()
    }

    else {
      this.setState({
          resultado: this.state.resultado + button
      })
  }
  };

  reset = () =>{
    this.setState({resultado: ""})
  }

  decimal = () =>{
    this.setState({resultado: "0."}) 
  };

  calcular = () =>{
    try{
      this.setState({
        resultado:(eval(this.state.resultado) || "")+""
      })
    }
    catch(e){
      this.setState({resultado: "error!"})
    }

  };


  render(){
    return(
      <div id="calculator">
        <div className="calculadora">
          <Result resultado={this.state.resultado}/>
          <Keyboard onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}
export default Calculator;
