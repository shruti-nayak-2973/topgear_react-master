import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Table from './Table';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Welcome to React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          <Table> </Table>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
