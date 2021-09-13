import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
//import './myindex.css';
//import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField="id">
            Employee ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name">Employee Name</TableHeaderColumn>
          <TableHeaderColumn dataField="value">
            Employee Email ID
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default Table1;
