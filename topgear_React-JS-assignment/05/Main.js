import React, { Component } from 'react';
//import './myindex.css';
import Table1 from './Details'

 
var data = [
  {id: 1, name: 'Shruti', value: 'sab@wip.com'},
  {id: 2, name: 'Ram', value: 'rab@wip.com'},
  {id: 3, name: 'Sita', value: 'sab@wip.com'},
  {id: 4, name: 'Laxman', value: 'lab@wip.com'},
  {id: 5, name: 'Krishna', value: 'kab@wip.com'}
];
 
 
export default class Main extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Table-header">Student Details</h1>
        <Table1 data={data}/>
      </div>
    );
  }
}

