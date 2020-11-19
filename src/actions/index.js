import {
    FETCH_POSTS, ADD_POST, TOGGLE_POST, REMOVE_POST, FILTER_POSTS
} from './actionTypes';

export function fetchPosts() {
    return async (dispatch) => {
        try {
            const response = await fetch('/api/posts?_embed=comments');
            const posts = await response.json();
            dispatch({type: FETCH_POSTS, posts});
        } catch (err) {
            console.error(err.response);
        }
    }
}

export function fetchPostsWithFilter(search) {
    return async (dispatch) => {
        try {
            const query = `/api/posts?_embed=comments
            &q=${search.replace(' ', '%20')}`;

            const response = await fetch(query);
            const posts = await response.json();
            dispatch({type: FETCH_POSTS, posts});
        } catch (err) {
            console.error(err.response);
        }
    }
}

export function addPost(title) {
    return {type: ADD_POST, title}
}

export function togglePost(id) {
    return {type: TOGGLE_POST, id}
}

export function removePost(id) {
    return {type: REMOVE_POST, id}
}

export function filterPosts(filter) {
    return {type: FILTER_POSTS, filter}
}
