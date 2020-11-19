import {combineReducers} from "redux";
import {v4 as uuidv4} from "uuid";

function PostsReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                posts: action.posts
            }

        case 'ADD_POST':
            const newPost = {
                id: uuidv4(),
                title: action.title,
                content: action.content,
            }
            return [ newPost, ...state ]

        case 'REMOVE_POST':
            return state.filter(t => {
                return t.id !== action.id;
            })

        default:
            return state
    }
}

function CommentsReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_COMMENTS':
            return action.comments

        case 'ADD_COMMENT':
            const newComment = {
                id: uuidv4(),
                'post_id': action.postId,
                content: action.content
            }
            return [ newComment, ...state ]

        case 'REMOVE_COMMENT':
            return state.filter(t => {
                return t.id !== action.id;
            })

        default:
            return state
    }
}

const appReducer = combineReducers({ PostsReducer, CommentsReducer });

export default appReducer;
