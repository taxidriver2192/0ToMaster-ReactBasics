import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx'
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
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'> 
        <SearchBox placeholder='Search here!' handleChange={e => this.setState({ searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
