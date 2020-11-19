import React, {useEffect} from 'react';
import {ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../actions";

import Post from './Post';
import PostCreate from "./PostCreate";

export const Posts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const posts = useSelector(state => state.PostsReducer.posts);

    return (
        <ListGroup>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </ListGroup>
    );
}

export default Posts;
