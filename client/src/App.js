import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
      password: 'init'
    };

    componentDidMount() {
      console.log('ComponenDidMount')
      this.callApi()
        .then(res => {console.log('password '+res[0].password);this.setState({ password: res[0].password })})
        .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('/station_managers');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);
      console.log(body)
      return body;
    };

  render() {
    return (
      <div  >

         <p>{this.state.password}</p>
      </div>
    );
  }
}

export default App;
