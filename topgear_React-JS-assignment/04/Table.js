import React from "react";

class Table extends React.Component {

  display = () => {
    let newArray = [];
    for (let i = 1; i <=10; i++) {
      newArray.push(
        <div key={i} style={{ border: "2px solid #eaeaea", width: "80px" }}>
          5 x {i} ={5 * i}
        </div>
      );
    }
    return newArray;
  };
  render() {
    return (
      <div>
        {this.display()}
        <h3 id="text" />
      </div>
    );
  }
}
export default Table;