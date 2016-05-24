"use strict";
import React from 'react';
import {Comment} from './Comment';

export let CommentList = React.createClass({
  render() {
    let commentNodes = this.props.data.map(
      (comment) => (<Comment author={comment.author} key={comment.id}>{comment.text}</Comment>)
    );

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
});
