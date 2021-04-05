import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import './App.css';
// Life cykel API Hreff
 
class App extends Component {
  constructor() {
    super();

    this.state = {
     monsters: [],
     searchField:''
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
        <input type='search' placeholder='Search here!' 
          onChange={e => this.setState({ searchField: e.target.value})}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}
export default App;
