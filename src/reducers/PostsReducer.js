import { v4 as uuidv4 } from 'uuid';

export default function PostsReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.posts

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
};
