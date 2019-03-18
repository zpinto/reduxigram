import React from "react";

const Comment = React.createClass({
  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postID,
              index
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting the form!");
    const { postID } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postID, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comment;
