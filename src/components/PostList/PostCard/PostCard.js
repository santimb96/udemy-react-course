import React from "react";
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 p-4 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={post.avatar} className="card-img-top" alt={post.name} />
        <div className="card-body">
          <h5 className="card-title">{post.name}</h5>
          <h6 className="card-text">{post.datePost}</h6>
          <p className={post.post}></p>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostCard;


