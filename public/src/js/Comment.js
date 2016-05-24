"use strict";
import React from 'react';

export let Comment = React.createClass({
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return {__html: rawMarkup};
  },

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor" data-comment-id={this.props.id}>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}/>
        <button>delete</button>
      </div>
    )
  }
});

