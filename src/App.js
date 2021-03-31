import React, { Component } from 'react';
import './App.css';
// Life cykel API Hreff
 
class App extends Component {
  constructor() {
    super();

    this.state = {
     monsters: []
    };
  }

  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monsters => (
          <p key={monsters.id}>{monsters.name}</p>
        ))}
      </div>
    );
  }
}
export default App;
