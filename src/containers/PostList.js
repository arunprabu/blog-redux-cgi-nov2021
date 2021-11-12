import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// Step 16.1
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    console.log(this.props.posts);
    return (
      <div className='container'>
        <h3>Post List</h3>
        <div className="list-group text-left">
          
          { this.props.posts && this.props.posts.length > 0? 
          // TODO: Do the looping
          // 
             <div className="list-group-item list-group-item-action text-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                  <Link to={`/posts/1`}>Test Post 1</Link>
                </h5>
                <small>Post Id: 1</small>
              </div>
              <p className="mb-1 text-left">
                Random post details
              </p>
            </div>
            :
            <div className='alert alert-warning'>
              Post Not Found! You can add one.
            </div>
          }
         
          
          
          
        </div>
      </div>
    )
  }
}

//mapStateToProps() method should be defined in the same file before the export
  
const mapStateToProps = (state) => { // store data will come in state
  return {
    posts: state.posts  // this.props.posts would be available hereafter
  }
} 

export default connect(mapStateToProps)(PostList);