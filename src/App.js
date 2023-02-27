import {Component} from 'react'


import './App.css';

// let originalState = JSON.parse(JSON.stringify(this.state.monsters));
class App extends Component {
  
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
    
  }

  onSearch = (event) => {
    const searchField = event.target.value.toLowerCase();
      this.setState(() => {
        return {searchField};
      })
  }
  

componentDidMount(){
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      
      ))
      
}

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input className='input' type='search' placeholder='search monsters' onInput={this.onSearch} />
       {filteredMonsters.map((monster) => {
          return <h1 className='Monster'  key={monster.id}>{monster.name}</h1>
        })
       }
      </div>
    );
  }  
}

export default App;
