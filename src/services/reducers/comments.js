import { GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED } from '../actions/comments';

const initialState = {
    isLoading: false,
    hasError: false,
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COMMENTS_REQUEST:
         return {
                ...state,
                isLoading: true,
         }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                comments: action.payload
            }
        case GET_COMMENTS_FAILED:
            return {
                ...state,
                hasError: true,
                comments: []
            }
        default: return state
    }
}