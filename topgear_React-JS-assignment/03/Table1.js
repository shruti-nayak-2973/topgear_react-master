import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
//import './myindex.css';
//import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn
            isKey
            dataField="id"
            dataAlign="center"
            headerAlign="left"
            width="30"
            thStyle={{ backgroundColor: "cyan", }}
            tdStyle={{border: "dashed",borderColor: 'green'}}
          >
            Employee ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="name"
            dataAlign="right"
            headerAlign="center"
            width="50%"
            thStyle={{ backgroundColor: "cyan"}}
            tdStyle={{border: "dashed",borderColor: 'green'}}
          >
            Employee Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="value"
            dataAlign="center"
            width="50%"
            headerAlign="left"
            thStyle={{ backgroundColor: "cyan"}}
            tdStyle={{border: "dashed",borderColor: 'green'}}
          >
            Employee Email ID
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default Table1;
