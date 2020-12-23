import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    axios
    .get('http://52.79.228.106:5000/')
    .then(data => {
      alert('success!!!', data);
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default App;
