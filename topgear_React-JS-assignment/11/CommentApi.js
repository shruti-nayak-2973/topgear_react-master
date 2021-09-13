import MovieData from './MovieData';

export default class CommentApi {
   static getAllComments() {
        return MovieData.comments;
   }
}