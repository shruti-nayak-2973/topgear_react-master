import React from "react";

export default class MovieDetailPage extends React.Component {
  
  render() {
    return (
      <div>
      <h2> Movie Details: {this.props.match.params.movieID} 
      {this.props.match.params.movieID}
      {this.props.match.params.movieName}
      {this.props.match.params.leadActor}
      {this.props.match.params.leadActrees}
      {this.props.match.params.yearOfRelease}
      {this.props.match.params.language} </h2> 
      </div>
    );     
  }
}