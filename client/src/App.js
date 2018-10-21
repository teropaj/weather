import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {

  super()
  this.state = {
      password: 'init',
      joo:'jee',
      vallue:'jojo',

    };
    this.handleChange = this.handleChange.bind(this);
}
    componentDidMount() {
      console.log('ComponenDidMount')
      this.callApi()
        .then(res => {//console.log('password '+res[0].password)
        this.setState({ password: res[0].password });
      console.log(res); //EI TOIMI EI TOIMI
    })
        .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('/station_managers');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);
      console.log(body)
      return body;
    };
    handleChange(event) {
    this.setState({value: event.target.vallue});
  }

  render() {
    return (
      <div>
         <h1>WEATHER</h1>
         <p>{this.state.joo}</p>
         <p>{this.state.password}</p>

         <form>
  <label>
    Name:
    <input type="text" value={this.state.vallue} onChange={this.handleChange} />
  </label>
  <input type="submit" value="Submit" />
</form>
      </div>
    );
  }
}

export default App;
