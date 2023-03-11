import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm';
import Header from "./components/Header";

class App extends React.Component {
  render(){
      return (
        <div className='App App-header'>
          <Header/>
          <SignInForm/>
        </div>
      )
  }
}

export default App;
