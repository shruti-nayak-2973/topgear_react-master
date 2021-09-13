import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  render() {
    const commentNodes = this.props.comments.map(comment => {
      return (
        <Comment
          key={comment.movieID}
          movieID={comment.movieID}
          movieName={comment.movieName}
          leadActor={comment.leadActor}
          leadActress={comment.leadActrees}
          yearOfRelease={comment.yearOfRelease}
          language={comment.language}
        >
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th> movieID</th>
              <th> movieName</th>
              <th> leadActor</th>
              <th> leadActrees</th>
              <th> yearOfRelease</th>
              <th> language</th>
            </tr>
          </thead>
          <tbody>{commentNodes}</tbody>
        </table>
      </div>
    );
  }
}
