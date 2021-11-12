import React, { Component } from 'react';
// Step 10: Let's now dispatch the action with type and payload
import { connect } from 'react-redux';
import { ADD_POST } from '../actions/types';
import { createPost } from '../services/postService';

class PostForm extends Component {

  /* Step 11: It is time to dispatch actions from form submission logic 
    connect() helps props have dispatch method
    using it we can dispatch action with type and data (payload)
    so, inside the handleSubmit logic, have a console.log(this.props);
  */

  handleSubmit = (e) => {
    e.preventDefault();// stop the page refresh upon form submission
    // Step 9: continues... Let's read the form data
    console.log(this.getTitle.value);
    console.log(this.getContent.value);

    // constructing obj 
    const data = {
      title: this.getTitle.value,
      body: this.getContent.value
    }
    console.log(data); // submittable form data aka payload -- We will send this to REST API

    console.log(this.props);
    
    // Step 13: Let's dispatch the action
    this.props.dispatch(createPost(data)); // this is the service method
  }



  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Create Post!</h3>
            <form className='text-left' onSubmit={this.handleSubmit}>
              {/* Step 9: Working with form submission using ref */}
              <input required type="text"
                placeholder="Enter Post Title"
                className='form-control'
                ref={(postTitleInput) => this.getTitle = postTitleInput} /><br />
              <textarea required rows="5" cols="28"
                placeholder="Enter Post"
                className='form-control'
                ref={(postDescInput) => this.getContent = postDescInput} /><br />
              <button className='btn btn-primary' type='submit'>Add Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// Step 10.1
//last line of the component should be the following. 
// after connecting props will be available in this component. 
// using props you can dispatch an action
export default connect()(PostForm);
