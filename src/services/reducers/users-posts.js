import { GET_USERS_POSTS_REQUEST, GET_USERS_POSTS_SUCCESS, GET_USERS_POSTS_FAILED } from '../actions/users-posts';

const initialState = {
    isLoading: false,
    hasError: false,
    usersPosts: []
}

export const usersPostsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_POSTS_REQUEST:
         return {
                ...state,
                isLoading: true,
         }
        case GET_USERS_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                usersPosts: action.payload
            }
        case GET_USERS_POSTS_FAILED:
            return {
                ...state,
                hasError: true,
                usersPosts: []
            }
        default: return state
    }
}