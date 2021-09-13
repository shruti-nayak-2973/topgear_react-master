import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Details extends Component {
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
            
          >
            studentId
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="name"
            dataAlign="right"
            headerAlign="center"
            width="50%"
            thStyle={{ backgroundColor: "cyan"}}
            
          >
            studentName
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="value"
            dataAlign="center"
            width="50%"
            headerAlign="left"
            thStyle={{ backgroundColor: "cyan"}}
            
          >
            studentMarks
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default Details;
