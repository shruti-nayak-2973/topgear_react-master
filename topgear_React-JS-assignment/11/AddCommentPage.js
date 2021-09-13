import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentForm  from './MovieForm';

import CommentApi  from './CommentApi';

class AddCommentPage extends React.Component {
  saveCommet(comment) {
    CommentApi.saveCommet(comment);
    this.props.history.push('/');
  }

  render () {
    return (
      <CommentForm onSave={(data) => this.saveCommet(data)} />
    );
  }
}

export default withRouter(AddCommentPage);