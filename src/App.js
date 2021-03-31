import './App.css';
import { Component } from 'react';
// Hvorfor bruger jeg class isteddet for en funktion?
 
class App extends Component {
  constructor() {
    super();

    this.state = {
     monster: [
      {
        name: 'Nr 3',
        id: 'one'
      },
      {
        name: 'Nr 2',
        id: 'two'
      },
      {
        name: 'Nr 3',
        id: 'tree'
      }
     ]
    };
  }
  render() {
    return (
      <div className='App'>
        {this.state.monster.map(monster => (
          <p key={monster.id}>{monster.name}</p>
        ))}
      </div>
    );
  }
}
export default App;
