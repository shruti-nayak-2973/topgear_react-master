import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Navlink
} from "react-router-dom";

import AllCommentsPage from "./AllCommentsPage";
import AddCommentPage from "./AddCommentPage";
import MovieDetailPage from "./MovieDetailPage";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AllCommentsPage} />
            <Route path="/addComment">
              <AddCommentPage />
            </Route>
            <Route
              path="/comment/:movieID/:movieName/:leadActor/:leadActress/:yearOfRelease:/language"
              component={MovieDetailPage}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
