import React from 'react';
import '../common/App.css';
// import axios from 'axios';
import Header from './section/Header.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleClick() {
  //   axios
  //   .get('http://52.79.228.106:5000/')
  //   .then(data => {
  //     alert('success!!!', data);
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <button onClick={this.handleClick}>click</button> */}
      </div>
    );
  }
}

export default App;
