import React from "react";

class Table extends React.Component {
  state = {
    click: 1
  };
  showTable = () => {
    this.setState({ click: this.state.click + 1 });
  };
  display = () => {
    let newArray = [];
    for (let i = 1; i < this.state.click; i++) {
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
        <button
          style={{
            backgroundColor: "#616161",
            width: "110px",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
            marginBottom:"50px",
            display: "inline-block",
            borderRadius: "20px"
            
          }}
          disable="true"
          onClick={() =>
            this.state.click <= 10
              ? this.showTable()
              : (document.getElementById("text").innerHTML =
                  "No more clicks available")
          }
        >
          Click to generate Multiplication tables of 5
        </button>

        {this.display()}
        <h3 id="text" />
      </div>
    );
  }
}
export default Table;