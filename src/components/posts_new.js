import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions/index";

class PostsNew extends Component {
  // field contains eventHandler onChange, onFocus, onBlur... syntax
  renderField(field) {
    // destructuring...
    const { meta: { touched, error} } = field;
    const className=`form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control is-valid" {...field.input} />
        <div className="text-help">{touched ? error:''}</div>
      </div>
    );
  }

  renderTextArea(field) {
    // destructuring...
    const { meta: { touched, error} } = field;
    const className=`form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea className="form-control is-valid" {...field.input}></textarea>
        <div className="text-help">{touched ? error:''}</div>
      </div>
    );
  }

  // this === component -> siksi bind onSubmit
  // calling action creator createPost
  onSubmit(values) {
    // history push defined as a call back function for createPost
    this.props.createPost(values, () => {
        this.props.history.push('/');
    });

  }

  render() {
      const { handleSubmit } = this.props;

      return (
          <div clasName="container">
              <h3>New Blog post</h3>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title for new post" name="title" component={this.renderField} />
                <Field label="Tags"  name="categories" component={this.renderField} />
                <Field label="Contents"  name="content" component={this.renderTextArea} />
                <div className="col-sm-10">
                  <Link className="btn btn-danger" to="/">Cancel</Link>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
          </div>
      );
  }
}

function validate(values) {
  const errors = {};
  console.log(values);
  // validate inputs from values
  if (!values.title) {
    errors.title = "Enter a blog post title!";
  } else if (values.title.length < 5) {
    errors.title = "Please Enter a title at least 5 characters";
  }
  if (!values.categories) {
    errors.categories = "Enter blog post categories/tags!";
  }
  if (!values.content) {
    errors.content = "Enter blog post content!";
  }
  // if errors empty, the form is fine to submit
  // if errors has *any* properties, redux form assumes form invalid
  console.log(errors);
  return errors;
}

// form property should be unique
// stacked multiple helpers reduxForm, connect (react-redux)
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost }) (PostsNew)
);
