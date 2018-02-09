import React, { Component } from "react";
import _ from "lodash"; // _ represents lodash
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions/index";

class PostsIndex extends Component {
    // react lifecycle method -> gets called when component is shown in dom
    componentDidMount() {
      // does the api call
      this.props.fetchPosts();
    }

    renderPosts() {
      // this.props.posts is object -> no map function -> we must use lodash library
      return _.map(this.props.posts, post => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
                  {post.title!=null ? post.title: 'No title defined'}
            </Link>
          </li>
        );
      });
    }


    render() {
        return (
            <div>
                <div className="text-xs-right">
                  <Link className="btn btn-primary" to="/posts/new">
                    Add a post
                  </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                  {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

// 1st arg: mapStateToProps argument
// 2dn arg: actionCreator
export default connect(mapStateToProps, { fetchPosts }) (PostsIndex);
// {fetchPosts} == { fetchPosts : fetchPosts }
