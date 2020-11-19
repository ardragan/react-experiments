import React, {useEffect, useReducer} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {fetchPosts, fetchPostsWithFilter} from '../../actions';
import ModalCreatePost from "../posts/ModalCreatePost";
import PropTypes from "prop-types";

FilterPosts.propTypes = {
    inputTitle: PropTypes.string,
    showCreatePost: PropTypes.bool,
};

function init(initialFilter) {
    return {inputTitle: initialFilter};
}

function PostsReducer(state, action) {
    switch (action.type) {
        case 'SET_INPUT_TITLE':
            return { ...state, inputTitle: action.inputTitle};
        case 'RESET_INPUT_TITLE':
            return init(action.inputTitle);
        case 'SHOW_CREATE_POST':
            return { ...state, showCreatePost: action.showCreatePost };
        default:
            throw new Error('We should not get here!');
    }
}

function FilterPosts({initialState}) {
    initialState = initialState || {
        inputTitle: '',
        showCreatePost: false
    };
    const [postsState, dispatchAction] = useReducer(PostsReducer, initialState);
    const { inputTitle, showCreatePost } = postsState;

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (postsState.inputTitle !== '') {
                dispatch(fetchPostsWithFilter(postsState.inputTitle));
            } else {
                dispatch(fetchPosts());
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [postsState.inputTitle]);

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        dispatchAction({ type: 'SET_INPUT_TITLE', inputTitle: e.target.value });
    };

    const handleShowCreatePostModal = () => {
        dispatchAction({ type: 'SHOW_CREATE_POST', showCreatePost: true});
    };
    const handleClosePostModal = () => {
        dispatchAction({ type: 'SHOW_CREATE_POST', showCreatePost: false});
    };

    return (
        <form onSubmit={handleFilterSubmit}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search posts by name"
                    aria-label="Search posts by name"
                    aria-describedby="basic-addon2"
                    value={inputTitle}
                    onChange={e => dispatchAction({ type: 'SET_INPUT_TITLE', inputTitle: e.target.value })}
                />
                <InputGroup.Append>
                    <Button variant="outline-primary" onClick={handleShowCreatePostModal}>New Post</Button>
                    <ModalCreatePost show={showCreatePost} handleClose={handleClosePostModal} />
                </InputGroup.Append>
            </InputGroup>
        </form>
    );
};

export default FilterPosts;
