import React from 'react';
import { Link } from 'react-router-dom';

export default class Comment extends React.Component {
  render() {
   const path = '/comment/${this.props.movieID}';
   return(
     <tr>
      <td><Link to={path}> {this.props.movieID}</Link></td>
      <td>{this.props.movieName}</td>
      <td>{this.props.leadActor}</td>
      <td>{this.props.leadActress}</td>
      <td>{this.props.yearOfRelease}</td>
      <td>{this.props.language}</td>
      <td>{this.props.children}</td>
     </tr> 
   ); 
  }
}



