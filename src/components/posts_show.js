import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions/index";

class PostsShow extends Component {
  // react lifecycle method -> gets called when component is shown in dom
  componentDidMount() {
      const { id } =  this.props.match.params;
      // does the api call
      this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } =  this.props.match.params;
    this.props.deletePost(id, () => {
        this.props.history.push('/');
    });
  }

  onChangeClick() {
    const { id } =  this.props.match.params;
    //this.props.deletePost(id, () => {
    //    this.props.history.push('/');
    //});
  }


  render() {
    const { post } = this.props;
    const linkStyle = {marginRight: '5px'};
    if (!post) {
      return <div clasName="container">Loading...</div>
    }

    return (
      <div clasName="container">
        <div className="text-xs-right">
            <Link className="btn btn-link" style={linkStyle} to="/">Back To Index</Link>
            <button className="btn" onClick={this.onChangeClick.bind(this)}>Change post</button>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete post</button>
        </div>
        <div class="jumbotron">
          <h1>{post.title}</h1>
          <h6>Categories: {post.categories}</h6>
          <hr class="my-4" />
          <p>{post.content}</p>
        </div>
      </div>

    );
  }
}

// ownProps == this.props
function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
