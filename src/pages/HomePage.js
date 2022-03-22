import React from "react";
import PostsList from "../components/PostList/PostsList";
import postsList from '../services/posts';

const HomePage = () => {
    return (
        <div className="container-fluid">
            <PostsList posts={postsList} />
        </div>
    )
} 

export default HomePage;