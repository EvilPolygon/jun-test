import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class Abitbut extends React.Component{
  constructor(props){
    super(props);
    this.state ={value:true};
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    if(this.state.value){
      alert('nice');
    }
    else{
      alert('very nice');
    }

    this.setState(prevState => ({value: !prevState.value}));
  }

  render(){
    return(
      <button onClick = {this.onClick}>
        wow
      </button>
    )
  }
}

class Test extends React.Component{
  render(){
    return (
      <div>
        <h1> some great changes <Abitbut /></h1>
      </div>
    )
  }
}

class Pages extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};    
  }

  render(){
    let page;
    if(this.state.isLoggedIn){
      page = <h1>login true</h1>;
    }
    else{
      return(
        <div className = "welcome">
          <h1 >Добро пожаловать!</h1>
          <h2 >Это тестовое задание для обучения веб-программированию и проверке знаний</h2>
          <h5 >Для продолжения необходимо войти или зарегистрироваться</h5>
          <Abitbut /> <br></br>
          <Abitbut />
        </div>
      )
    }
  }
}

class App extends Component{
  render(){ 
    return(
      <div className="App">
        <Pages />
      </div>
    );
  }
}

export default hot(module)(App);