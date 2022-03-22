import React from "react";
import PostCard from "./PostCard/PostCard";
import PropTypes from "prop-types";

const PostsList = ({ posts }) => {
    return (
        <div className="container-fluid">
            <div className="row p-4">
                {posts.map((post, idx) => <PostCard post={post} key={idx} /> )}
            </div>
        </div>
    )
}

PostsList.propTypes = {
    posts: PropTypes.object.isRequired,
  }
  

export default PostsList;