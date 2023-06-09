import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILED } from '../actions/posts';

const initialState = {
    isLoading: false,
    hasError: false,
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS_REQUEST:
         return {
                ...state,
                isLoading: true,
         }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload
            }
        case GET_POSTS_FAILED:
            return {
                ...state,
                hasError: true,
                posts: []
            }
        default: return state
    }
}