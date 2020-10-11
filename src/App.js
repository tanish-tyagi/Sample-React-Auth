import React, { Component } from 'react';
import Login from './components/login';
import Home from './components/home';
import fire from './shared/firebase';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      user : {},
    }

    this.authlistener = this.authlistener.bind(this);
  }

  componentDidMount(){
    this.authlistener();
  }

  authlistener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user!=null){
        this.setState({user});
        console.log(user);
      }else{
        this.setState({user : null});
      }
    });
  }

  render(){
    return (
      <div>
        {this.state.user ? (<Home user={this.state.user.email}/>) : (<Login/>)}
      </div>
    );
  }
}

export default App;
