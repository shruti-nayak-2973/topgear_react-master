import React from "react";

export default  class MovieForm extends React.Component {
  constructor(props) {
      super(props);
        this.refmovieName = React.createRef();
        this.refleadActor = React.createRef();
        this.refleadActress = React.createRef();
        this.refyearOfRelease = React.createRef();
        this.reflanguage = React.createRef();
   }

      onSubmit (event) {
       event.preventDefault();
       let comment = {};
       comment.movieName = this.refmovieName.current.value;
       comment.leadActor = this.refleadActor.current.value;
       comment.leadActress = this.refleadActress.current.value;
       comment.yearOfRelease = this.refyearOfRelease.current.value;
       comment.language = this.reflanguage.current.value;
       this.props.onSave(comment);
      }

     render() {
       return(
        <form>
      <h2> Add movie </h2>
      movieName:&nbsp;
      <input type="text"
        ref={this.refmovieName} /> <br/><br/>
      leadActor Text: &nbsp;
      <input type="text"
        ref={this.refleadActor}/> <br/><br/>
       leadActress Text: &nbsp;
      <input type="text"
        ref={this.refleadActress}/> <br/><br/>
       yearOfRelease Text: &nbsp;
      <input type="text"
        ref={this.refyearOfRelease}/> <br/><br/>
      language Text: &nbsp;
      <input type="text"
        ref={this.reflanguage}/> <br/><br/>
      <input type="submit" value="Save" onclick={(e)=> this.onSubmit(e)}/>
    </form>
   );
 } 
}