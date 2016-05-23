"use strict";
import React from 'react';
import {CommentList} from './CommentList';
import {CommentForm} from './CommentForm';


export let CommentBox = React.createClass({

  getInitialState: function () {
    return {data: []};
  },

  loadCommentsFromServer: function () {
    console.log('loading');
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function (comment) {
    // TODO: submit to the server and refresh the list


    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
});

/*export let CommentBox = React.createClass({
  render:function(){
    "use strict";
    return (<h1>Privet andreiii</h1>)
  }
});*/
