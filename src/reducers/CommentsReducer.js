import { v4 as uuidv4 } from 'uuid';

export default function CommentsReducer(state = [], action) {
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
};
